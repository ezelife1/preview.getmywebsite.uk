# Guinan & Sons Tree Surgery

Static website built from the established Elm trades layout. No build step or external font dependency. Upload website files at the hosting root, keeping assets/ intact.

## Business details
07956 037437 · ryanguinan97@icloud.com
Huddersfield and surrounding areas. All photographs supplied by the client. Before/after labels retained; phone-screen bars removed.

## Final domain setup — required before launch
No final website domain has been provided. To prevent an incorrect canonical domain, the ZIP has no guessed canonical, CNAME or sitemap URLs. Sharing metadata is present, with a relative image path pending final setup.
Run `python3 configure-domain.py https://YOUR-DOMAIN` from this folder before upload. The script creates the sitemap and CNAME (for a root domain), sets all canonical/OG URLs, makes social image URLs absolute and adds the public URL to business/service schema. A preview subdirectory URL is also supported; it will not create a CNAME. For a different host, configure the custom domain in its dashboard too.

## Checklist
- Fixed header with overlapping round logo attached while scrolling.
- Call and WhatsApp links use 07956 037437.
- Floating contact is hidden and unfocusable until the entire hero has left view.
- Five separate service pages with unique metadata, local copy and Service schema.
- Gallery has filled thumbnail boxes; lightbox shows the full image.
- Enquiry includes name, phone, optional email, chosen service, postcode and full project details. Works through WhatsApp or the email alternative; the visitor must send the prepared message.
- Bespoke social JPEG: assets/guinan-social-v1.jpg (1200 × 630).
- Static OG/Twitter metadata; robots.txt allows all crawlers, facebookexternalhit and Facebot. No login or JavaScript rendering is needed to read page metadata.
- No invented reviews, opening hours, qualifications beyond the supplied poster, company number or street address.
- Mobile layout and internal links checked during production. No external analytics/tracking added.

## Live Facebook verification — after deployment
Use a publicly accessible HTTPS URL. Page and social JPEG must return HTTP 200 with text/html and image/jpeg respectively. Do not enable password protection, crawler challenges or hotlink blocks. Run the final URL in Meta Sharing Debugger and request a fresh scrape. Local checks cannot verify the final hosting response or Meta cache. Confirm the WhatsApp number can receive messages; the number is taken from the supplied flyer.
