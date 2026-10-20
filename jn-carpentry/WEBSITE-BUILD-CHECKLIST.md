# Mandatory website build checklist

## Design source
- Use the agreed Elm design from the original elmbespokegardendesigns.zip for these trade builds. Retain its established section structure and composition; do not substitute a new layout.
- Keep each client's own branding, colours and photographs.
- Do not send website preview images unless explicitly requested.
- Use local relative links so index.html and service pages open directly after extracting the ZIP.

## Six required delivery checks
1. Correct clickable Call links using the verified business number.
2. Correct WhatsApp wa.me number in all key buttons and the enquiry form; include chosen service and entered details in the message.
3. Fixed or sticky header remains visible throughout scrolling.
4. Prominent round business logo overlaps the header/hero, stays attached to the fixed header and is legible on desktop and mobile.
5. Floating Call and WhatsApp stay hidden over the hero/header and appear only after the whole hero has scrolled past. Hidden controls must also be removed from keyboard focus.
6. Unique business-specific social sharing image, exactly 1200×630, correctly referenced by both Open Graph and Twitter/X metadata using the user’s public upload address. An image existing locally is not enough; complete the public social-image URL checks below.

## Social card design standard — added 14 October 2026
- A prominent wavy divider passes through the middle of the card, separating the brand-colour panel from the project image.
- The client's round business logo is centred over that wave, integrated as the main visual focal point.
- Keep the business name, service, location and phone readable at social preview size.
- Match client branding. No white square or white corners around the round logo, clipped wording, stretched logos or reused generic cards.
- Inspect the finished card and verify exact 1200×630 dimensions. Use a new asset filename when replacing an existing card to reduce stale social-preview caching.

## Public preview and social-image URL checks — added 19 October 2026
- The user uploads website ZIPs to their own hosting. Default client preview base: `https://preview.getmywebsite.uk/<site-name>/`, unless the user supplies a different public destination.
- Never use a private ChatGPT/Sites address in the delivered ZIP’s `og:image`, `og:image:secure_url`, `twitter:image`, canonical, `og:url`, schema URLs or sitemap. Keep any internal hosted-site metadata separate from the user’s upload files.
- Use absolute HTTPS image URLs with the correct preview subfolder, exact filename and case. Example: `https://preview.getmywebsite.uk/rok-fencing/assets/social-share.jpg`.
- Include the exact matching 1200×630 image in the ZIP. Verify both Open Graph and Twitter/X tags across every page against the intended public base, and decode the packaged image.
- Before upload, verify the metadata-to-ZIP path mapping; do not claim the image is publicly accessible yet. After the user uploads, when access is available, verify the page and image can be fetched without login, the image responds successfully with the correct image content type, and redirects do not lead to private hosting or an HTML error page.
- When replacing an already shared card, use a new image filename and update the metadata to reduce stale cached previews. If live crawler verification is unavailable, report that limit rather than claiming the social preview is working.
- Do not mark requirement 6 complete or deliver a ZIP with private, missing or mismatched image URLs.

## Images and content
- Compact, balanced galleries using supplied photos; preserve full before/after photos and existing wording within them.
- Do not invent before/after pairs, reviews, credentials, addresses, insurance, prices or service areas.
- Add useful factual project descriptions and FAQs. Keep email/social links accurate.

## SEO
- Unique titles and descriptions for every page; one clear H1 and sensible heading structure.
- Useful service pages, genuine supplied location targeting, clear internal links and project content.
- Correct canonical URLs, robots.txt and sitemap.xml.
- Structured data based only on known details; do not fabricate a business address.
- Responsive WebP assets, accurate alt text, explicit image dimensions, lazy loading below the hero and lightweight video where used.
- Keep previews noindex; switch to index with the confirmed live domain at launch.
- Check live mobile performance, Search Console, sitemap submission and indexing when deployment/account access is available.
- GBP consistency, genuine reviews and legitimate local links remain ongoing work where authorised.

## Verification
- Check the actual site files and behaviour before delivery.
- Decode every packaged JPEG, PNG and WebP, including each responsive srcset size; a file existing does not prove it is valid.
- Record incomplete browser or live checks honestly; do not describe file checks as visual browser verification.
