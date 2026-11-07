# Website build checklist

Required for every website build and ZIP:

1. Working Call links using the verified business number and tel: URLs.
2. Working WhatsApp links using wa.me and the verified mobile number. Enquiry messages must include every supplied field and the selected service.
3. A sticky/fixed header that remains visible while scrolling.
4. A prominently overlapping client logo attached to, and visible with, the scrolling header.
5. Persistent Call and WhatsApp controls hidden and unfocusable over the entire hero; shown only after the hero has fully scrolled out of view.
6. A unique business-specific 1200×630 sharing image wired into static Open Graph and Twitter/X metadata.
7. Social preview readiness: use full absolute HTTPS image URLs matching the actual deployment domain and any GitHub Pages repository path. Configure canonical and og:url for the URL actually being shared. Do not guess a domain or leave relative social image URLs in a delivery claimed as ready for social sharing. Obtain the intended public URL when missing.
8. After deployment, verify the exact shared URL and image URL are publicly fetchable without authentication or crawler blocks, return successful responses with correct content types, and expose metadata in the original HTML. Verify the social platform can retrieve the card, refreshing its scrape/cache where available. Local file checks alone do not establish a working social card.
9. If deployment has not happened, label live social-card verification as pending. Never describe it as fully verified until the public fetch and platform checks pass.

Use the Elm design when requested. Include supplied project photographs and videos in the requested sections. Do not generate or send website preview images unless explicitly requested; this restriction does not refer to social sharing cards.
