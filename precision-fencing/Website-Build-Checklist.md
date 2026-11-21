# Precision Fencing — build verification

1. Call functionality: every telephone link checked against tel:+447940534707.
2. WhatsApp: links and quote form use wa.me/447940534707. Executed form logic verifies all six fields, special characters and invalid-form blocking. No message sent.
3. Scrolling header: actual CSS uses position:fixed with top:0.
4. Overlapping logo: positioned inside the fixed header. Desktop 164px logo starts at 8px across a 90px header; mobile 100px logo starts at 7px across a 76px header.
5. Floating Call and WhatsApp: executed script checks hidden throughout hero, shown only when hero bottom <= 0, and hidden when returning to hero. Hidden CSS rule is explicit.
6. Unique social image: supplied business logo and project photograph composed into a dedicated 1200×630 graphic. Exact dimensions and static Open Graph/Twitter image references checked on all eight pages.

Additional checks: local links, fragments, media, responsive images, image dimensions, one H1 and unique page title, structured data, script syntax, domain configuration and ZIP integrity.

Verification scope: file checks and isolated JavaScript execution. Browser rendering was unavailable because the local browser could not start in this environment; no browser rendering result is claimed.

The exact Elm layout is adapted from the existing fencing template, using Precision Fencing's black and gold identity. All eight supplied project photographs and the promotional poster are included. No reviews, insurance claims or other business credentials are invented.

The final domain has not been supplied. The review build uses noindex and a preview URL. README.txt explains how to set the confirmed public URL using configure-launch.py before deployment.
