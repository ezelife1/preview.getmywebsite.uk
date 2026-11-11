# Broadhurst Fencing — verified build checklist

- [x] Elm design, round logo and mint/grey branding.
- [x] Call links use tel:+441922611681 — 01922 611681.
- [x] WhatsApp links and form use https://wa.me/447969115643 — 07969 115643.
- [x] WhatsApp draft contains all six fields, including selected service, with special characters encoded correctly. No test message sent.
- [x] Fixed header remains visible while scrolling.
- [x] Prominent overlapping round logo remains attached to the fixed header. Desktop: top 8px, bottom 172px, header bottom 90px. Mobile: logo top 7px during scrolling.
- [x] Floating Call and WhatsApp hidden with display:none throughout the hero, then visible only when hero bottom is at or above 0px. Verified on desktop and mobile.
- [x] Unique business-specific 1200×630 social image with mint WAVY divider. Visually inspected and divider measured across a 52px height variation.
- [x] Social image referenced by static Open Graph and Twitter/X metadata on all 11 pages.
- [x] 15 project photos/collages and one supplied advertisement included; complete gallery rows.
- [x] Full collages and advertisement displayed without cropping. Black bars removed from composite fence photograph.
- [x] Links, fragments, responsive image references, metadata and structured data checked.
- [x] Mobile menu opens and closes; no horizontal overflow at 390px.
- [ ] Live social platform verification awaits final public domain and deployment. Noindex retained until launch configuration.

Before public launch, configure the final HTTPS domain using configure-launch.py, then verify the deployed sharing image and canonical URLs.
