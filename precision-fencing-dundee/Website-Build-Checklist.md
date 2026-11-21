# Precision Fencing Dundee — build verification

## Six required checks

1. Call: all phone links checked. Primary Call uses tel:+441382684128. The separately labelled mobile uses tel:+447386629812.
2. WhatsApp: links and quote form use wa.me/447386629812. Executed form logic confirms all six fields and special characters are preserved and invalid forms are blocked. No message sent.
3. Fixed scrolling header: actual CSS uses position:fixed, top:0.
4. Overlapping supplied logo: positioned inside the fixed header. Desktop 164px logo starts at 8px and extends 82px below the 90px header; mobile 100px logo starts at 7px and extends 31px below the 76px header.
5. Floating contacts: executed script verifies hidden throughout hero, shown only when hero bottom <= 0, and hidden on returning to hero. Explicit hidden CSS rule included.
6. Dedicated social graphic: unique business-specific 1200×630 image using the supplied logo and decking photograph. Exact dimensions and Open Graph/Twitter references checked on all 10 pages.

## Further verification

- 10 distinct page titles and one H1 per page.
- Local links, anchors, image dimensions, responsive image widths and sitemap checked.
- Eight distinct project photographs, supplied logo and supplied services poster included. Identical repeated uploads appear once.
- Correct landline, mobile, WhatsApp and email throughout.
- Domain configuration tested on a temporary copy.
- JavaScript syntax and ZIP integrity checked.
- No invented reviews, ratings, insurance claims or credentials.
- Over a decade of experience, listed service areas and free estimates supported by supplied business information.
- Promotional poster shown in full; composite page distinguishes the timber project photographs from composite options.

Verification scope: source-file checks and isolated JavaScript execution. Browser rendering could not run in this environment; no browser rendering result is claimed.

The final domain was not supplied. The review build retains noindex until configure-launch.py is run with the confirmed public HTTPS URL. Instructions are in README.txt.
