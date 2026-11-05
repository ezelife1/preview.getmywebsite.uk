from pathlib import Path
from urllib.parse import urlsplit
from html import escape
import re,sys
if len(sys.argv)!=2:raise SystemExit('Usage: python3 configure-launch.py https://your-public-url')
new=sys.argv[1].rstrip('/')+'/'
p=urlsplit(new)
if p.scheme!='https' or not p.hostname or p.username or p.password or p.query or p.fragment:raise SystemExit('Enter the full HTTPS public URL without a query or fragment.')
root=Path(__file__).resolve().parent
for file in [*root.glob('*.html'),root/'robots.txt',root/'sitemap.xml']:
 s=file.read_text()
 if file.suffix=='.html':
  current=re.search(r'<meta property="og:image" content="([^"]+)assets/oakstone-photo-first.jpg"',s)[1]
  s=s.replace(current,new).replace('noindex,follow','index,follow')
 else:
  s=re.sub(r'https://[^\s<]+?(?=sitemap\.xml|<)',lambda m:new if file.name=='robots.txt' else m[0],s) if file.name=='robots.txt' else '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+escape(new+('' if h.name=='index.html' else h.name))+'</loc></url>' for h in sorted(root.glob('*.html')))+'</urlset>'
 file.write_text(s)
