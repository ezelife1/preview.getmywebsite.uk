#!/usr/bin/env python3
"""Run: python3 configure-domain.py https://your-domain.co.uk"""
from pathlib import Path
from urllib.parse import urlsplit
from html import escape
import re,json,sys
base=(sys.argv[1] if len(sys.argv)>1 else input('Full HTTPS website URL: ')).strip().rstrip('/')
u=urlsplit(base)
if u.scheme!='https' or not u.netloc or u.query or u.fragment:raise SystemExit('Use a full HTTPS website URL with no query or fragment.')
r=Path(__file__).resolve().parent;pages=sorted(r.glob('*.html'))
for p in pages:
 s=p.read_text();url=base+'/'+('' if p.name=='index.html' else p.name)
 s=re.sub(r'<link[^>]*rel="canonical"[^>]*>','',s)
 s=re.sub(r'<meta[^>]*property="(?:og:url|og:image:secure_url)"[^>]*>','',s)
 for key in ['og:image','twitter:image']:
  s=re.sub(r'(<meta (?:property|name)="'+key+r'" content=")[^"]*',lambda m:m[1]+base+'/assets/michaelson-social-v1.jpg',s)
 def schema(m):
  d=json.loads(m[1]);biz=d.get('provider',d);biz['url']=base+'/';biz['@id']=base+'/#business';biz['image']=base+'/assets/logo.png'
  if d.get('@type')=='Service':d['url']=url
  return '<script type="application/ld+json">'+json.dumps(d)+'</script>'
 s=re.sub(r'<script type="application/ld\+json">(.*?)</script>',schema,s,flags=re.S)
 s=s.replace('</head>',f'<link rel="canonical" href="{escape(url,quote=True)}"><meta property="og:url" content="{escape(url,quote=True)}"><meta property="og:image:secure_url" content="{escape(base,quote=True)}/assets/michaelson-social-v1.jpg"></head>');p.write_text(s)
(r/'robots.txt').write_text('User-agent: *\nAllow: /\n\nUser-agent: facebookexternalhit\nAllow: /\n\nUser-agent: Facebot\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n')
(r/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+escape(base+'/'+('' if p.name=='index.html' else p.name))+'</loc></url>'for p in pages)+'</urlset>')
if not u.path:(r/'CNAME').write_text(u.netloc+'\n')
print('Configured',len(pages),'pages for',base)
