from pathlib import Path
from urllib.parse import urlsplit
import re,sys
if len(sys.argv)!=2:raise SystemExit('Usage: python3 configure-launch.py https://your-public-url')
new=sys.argv[1].rstrip('/')+'/'
u=urlsplit(new)
if u.scheme!='https' or not u.hostname or u.query or u.fragment or u.username or u.password:raise SystemExit('Use the full HTTPS public URL.')
root=Path(__file__).resolve().parent
old=re.search(r'<meta property="og:image" content="([^"]+)assets/lg-social.jpg"',(root/'index.html').read_text())[1]
for p in [*root.glob('*.html'),root/'robots.txt',root/'sitemap.xml']:
 p.write_text(p.read_text().replace(old,new).replace('noindex,follow','index,follow'))

(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+new+'sitemap.xml\n')
