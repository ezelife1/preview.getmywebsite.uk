from pathlib import Path
import re,json,sys
number=re.sub(r'[\s()-]','',sys.argv[1] if len(sys.argv)>1 else input('Confirmed business number (+country code): '))
if not re.fullmatch(r'\+[1-9]\d{7,14}',number):raise SystemExit('Use a confirmed international number, for example +447XXXXXXXXX.')
r=Path(__file__).resolve().parent;wa='https://wa.me/'+number[1:]
for p in r.glob('*.html'):
 s=p.read_text().replace('<a class="head-call" href="contact.html#quote">Enquire</a>',f'<a class="head-call" href="tel:{number}">Call now</a>')
 s=s.replace('<a href="contact.html#quote">Enquire</a><a href="https://www.instagram.com/laser_by_sally/">Instagram</a>',f'<a href="tel:{number}">Call now</a><a href="{wa}">WhatsApp</a>')
 s=s.replace('<a class="btn whatsapp" href="https://www.instagram.com/laser_by_sally/">Message Sally</a>',f'<a class="btn whatsapp" href="{wa}">WhatsApp Sally</a>')
 s=s.replace('<a class="btn primary" href="https://www.instagram.com/laser_by_sally/">Message @laser_by_sally</a>',f'<div class="hero-actions"><a class="btn primary" href="tel:{number}">Call {number}</a><a class="btn whatsapp" href="{wa}">WhatsApp Sally</a></div>')
 s=s.replace('Prepare enquiry →','Continue to WhatsApp →').replace('Prepare and copy your message, then paste it into an Instagram DM. Nothing is sent automatically.','Your enquiry opens in WhatsApp for you to review and send. Nothing is sent automatically.').replace('You decide whether to copy it and send it through Instagram.','You decide whether to send it through WhatsApp.').replace('sent through your chosen messaging service','sent through WhatsApp')
 def schema(m):
  d=json.loads(m[1]);d.get('provider',d)['telephone']=number;return '<script type="application/ld+json">'+json.dumps(d)+'</script>'
 s=re.sub(r'<script type="application/ld\+json">(.*?)</script>',schema,s);p.write_text(s)
p=r/'script.js';s=p.read_text();s=s.replace("document.getElementById('enquiry-text').value=message;document.getElementById('prepared-enquiry').hidden=false;", "window.location.assign('"+wa+"?text='+encodeURIComponent(message));");p.write_text(s)
print('Call and WhatsApp configured for',number)
