# Goring All Trades website

Elm design with the client’s black/gold identity, overlapping round logo and actual supplied project photographs. Static HTML/CSS/JS; no build step. Upload the files at the hosting root, keeping assets/ intact.

Phone and WhatsApp: 07752 594197. Address supplied: 132 Limbrick Lane, Worthing. Established 2016. No email, final domain, postcode, opening hours, reviews or accreditation details have been invented.

## Final domain — needed before launch
Run `python3 configure-domain.py https://YOUR-DOMAIN` from this folder before upload. This sets canonical/OG URLs, absolute sharing image URLs, business/service schema URLs, sitemap.xml, robots sitemap reference and a root-domain CNAME. A preview subdirectory URL is supported without generating a CNAME. No final domain has been guessed in this package.

## Verified checklist
Call tel links; WhatsApp wa.me links; fixed header; prominent round logo attached to header; floating contact hidden until the hero bottom has left the viewport; dedicated 1200×630 social image wired into OG and Twitter; unique service pages with metadata and schema; all five enquiry fields encoded into the WhatsApp message; responsive layout; full-image lightbox. Static metadata and robots allow Facebook crawlers.

## Facebook after launch
The public HTTPS page and social image must return HTTP 200 with correct content types. Avoid password protection, crawler challenges and hotlink blocks. Run the final URL in Meta Sharing Debugger and request a fresh scrape. Final host access and Meta caching cannot be verified before deployment. Confirm the supplied mobile number receives WhatsApp messages; the link and message generation are tested locally.

## Photo notes
Only Goring-supplied images are used. Shower room progress images show unfinished flooring/protective covering; captions identify these. No third-party contractor branding has been added.
