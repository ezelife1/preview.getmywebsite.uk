#!/usr/bin/env python3
"""Set final public URL in static HTML, schema, robots and sitemap. No packages needed."""
from pathlib import Path
from urllib.parse import urlsplit
from html import escape
import re,sys,json
base=sys.argv[1].rstrip('/') if len(sys.argv)>1 else input('Full website URL (https://...): ').strip().rstrip('/')
assert urlsplit(base).scheme=='https' and urlsplit(base).netloc,'Enter the complete HTTPS website URL'
root=Path(__file__).resolve().parent
pages=sorted(root.glob('*.html'))
for p in pages:
 s=p.read_text();url=base+'/' + ('' if p.name=='index.html' else p.name)
 s=re.sub(r'<link[^>]*rel=["\']canonical["\'][^>]*>','',s)
 s=re.sub(r'<meta[^>]*(?:property=["\']og:url["\']|property=["\']og:image:secure_url["\'])[^>]*>','',s)
 s=re.sub(r'(<meta\s+[^>]*(?:property=["\']og:image["\']|name=["\']twitter:image["\'])[^>]*content=["\'])[^"\']+',lambda m:m[1]+base+'/assets/jbm-social-v1.jpg',s)
 # BeautifulSoup may place content before name/property: support either attribute order.
 def image_meta(m):
  tag=m[0]
  if re.search(r'(?:property|name)=["\'](?:og:image|twitter:image)["\']',tag): tag=re.sub(r'content=["\'][^"\']*["\']','content="'+base+'/assets/jbm-social-v1.jpg"',tag)
  return tag
 s=re.sub(r'<meta\b[^>]*>',image_meta,s)
 def schema(m):
  d=json.loads(m[1]);d['url']=url;d['image']=base+'/assets/logo.png';return '<script type="application/ld+json">'+json.dumps(d)+'</script>'
 s=re.sub(r'<script type="application/ld\+json">(.*?)</script>',schema,s,flags=re.S)
 s=s.replace('</head>',f'<link rel="canonical" href="{escape(url,quote=True)}"><meta property="og:url" content="{escape(url,quote=True)}"><meta property="og:image:secure_url" content="{base}/assets/jbm-social-v1.jpg"></head>')
 p.write_text(s)
(root/'robots.txt').write_text('User-agent: *\nAllow: /\n\nUser-agent: facebookexternalhit\nAllow: /\n\nUser-agent: Facebot\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n')
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+escape(base+'/'+('' if p.name=='index.html' else p.name))+'</loc></url>' for p in pages)+'</urlset>')
print('Updated all page URLs, image URLs, schema, robots and sitemap for',base)
