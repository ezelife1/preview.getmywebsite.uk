#!/usr/bin/env python3
"""Activate contact links after the business confirms its number and email."""
from pathlib import Path
from html import escape
import re,sys,json
if len(sys.argv)<2:raise SystemExit('Usage: python3 configure-contacts.py 07XXXXXXXXX [business@example.com]')
raw=re.sub(r'\D','',sys.argv[1]);number='44'+raw[1:] if raw.startswith('0') else raw
if not re.fullmatch(r'447\d{9}',number):raise SystemExit('Use a verified UK mobile number, e.g. 07XXXXXXXXX.')
email=sys.argv[2] if len(sys.argv)>2 else ''
if email and not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email):raise SystemExit('Invalid email address')
phone='0'+number[2:];label=phone[:5]+' '+phone[5:];base=Path(__file__).resolve().parent
for p in base.glob('*.html'):
 s=p.read_text()
 def button(m):
  attrs,text=m.group(1),m.group(2);role=re.search(r'data-contact-role="(.*?)"',attrs).group(1);cls=re.search(r'class="(.*?)"',attrs);cls=(cls.group(1) if cls else '').replace('pending-contact','').strip();href=('https://wa.me/' if role=='whatsapp' else 'tel:+')+number;name='WhatsApp' if role=='whatsapp' else 'Call '+label
  return '<a href="'+href+'" class="'+cls+'">'+name+'</a>'
 s=re.sub(r'<button([^>]*data-contact-role="[^"]+"[^>]*)>(.*?)</button>',button,s,flags=re.S)
 s=s.replace('<body>','<body data-whatsapp="'+number+'">')
 s=s.replace('Prepare my enquiry →','Open my quote in WhatsApp →')
 s=s.replace('Draft website: direct contact details are awaiting confirmation. This form prepares your enquiry but does not send it.','This form opens a WhatsApp draft for you to review, add photographs and send.')
 s=s.replace('Tell us what you have in mind. Prepare your enquiry below and keep a copy of your details.','Tell us what you have in mind. This form prepares a WhatsApp draft with all your details. You review it before sending.')
 if email and 'id="quote"' in s:s=s.replace('<form id="wa-form"','<p><a class="email-link" href="mailto:'+escape(email)+'">'+escape(email)+'</a></p><form id="wa-form"')
 def graph(m):
  g=json.loads(m.group(1))
  for item in g.get('@graph',[]):
   if item.get('@type')=='HomeAndConstructionBusiness':
    item['telephone']='+'+number
    if email:item['email']=email
  return '<script type="application/ld+json">'+json.dumps(g)+'</script>'
 s=re.sub(r'<script type="application/ld\+json">(.*?)</script>',graph,s,flags=re.S);p.write_text(s)
print('Contact links and WhatsApp form configured. Verify the destinations before launch.')
