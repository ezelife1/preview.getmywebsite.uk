# Happy Homes Cleaning

Elm-based blue/white cleaning website with supplied branding and three packages. Static HTML/CSS/JS. Upload at hosting root with assets/ intact.

## Contact placeholders — authorised by the user
No matching business number could be verified for Livingston / Mid Calder / East Calder. No number or email has been guessed. Call/WhatsApp controls are visibly pending and disabled. Enquiry currently prepares all six fields locally and allows copying; it does not send. This is a contact-incomplete website draft, not a live booking system.

To enable contact, edit contact-config.js with the verified international numbers:
window.HAPPY_CONTACT={phone:"+44...",whatsapp:"44...",display:"07..."};
The script replaces pending controls with tel/wa.me links and switches the form to WhatsApp. Remove pending footer/contact-page text after confirming the details. Never enter an unverified number.

## Final domain
Run `python3 configure-domain.py https://YOUR-DOMAIN` before upload. Sets canonicals, OG URLs, absolute share image URLs, schema URLs, sitemap.xml, robots sitemap reference and root CNAME. No final domain supplied; these remain pending.

## Prices and scope
Regular £17.50/hr weekly/fortnightly; standard £20/hr one-off; deep £25/hr. Full comparison is transcribed from supplied poster. Interior windows are included for deep, excluded from other plans. Inside cupboards/drawers, oven, fridge/freezer require a separate request. Carpet/upholstery cleaning is not included in deep cleaning. No minimum booking, insurance, reviews or opening hours invented.

## Photos
Unbranded photos reused from previous cleaning build with user permission, labelled illustrative rather than claimed Happy Homes jobs. Supplied owner-style brand badge used as provided.

## Checklist status
Fixed header and overlapping round logo; floating contact hidden over entire hero and shown afterwards; responsive layout; unique business-specific 1200×630 social image in OG/Twitter; separate service pages; schema and unique metadata; full-image lightbox. Phone/WhatsApp live destinations intentionally pending. Enquiry preparation checked locally. Static metadata and robots allow Facebook crawling; final domain/host and Meta scrape remain unverified until deployment.
