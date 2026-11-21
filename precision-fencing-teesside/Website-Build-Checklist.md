# Precision Fencing — Teesside

## Six required checks

- Call: all telephone links verified as tel:+447984418788.
- WhatsApp: links and form verified against wa.me/447984418788. Executed script check confirms all six fields and special characters are preserved, and invalid forms are blocked. No test message sent.
- Fixed header: actual CSS uses position:fixed, top:0.
- Overlapping logo: the supplied PF mark is positioned inside the fixed header. Desktop logo starts at 8px and extends 82px below the header. Mobile logo starts at 7px and extends 31px below the header.
- Floating contacts: executed script verifies hidden throughout the hero, visible only when hero bottom <= 0, and hidden again on return. Explicit hidden CSS rule included.
- Social image: unique business-specific 1200×630 graphic made with the supplied logo and project photograph; exact dimensions and Open Graph/Twitter references checked on all 10 pages.

## Further checks

- 10 distinct page titles and one H1 per page.
- All local links, anchors, image dimensions, responsive image widths, video posters and video sources checked.
- Nine supplied project photographs, one before/after advertisement and the supplied PF logo included.
- Both supplied MP4 files included unchanged, with 720×1280 dimensions verified by ffprobe. Native controls, playsinline and no automatic playback. Video playback pauses the other film to prevent overlapping audio.
- Sharing metadata, structured business data and sitemap checked.
- Launch configuration tested on a temporary copy.
- JavaScript syntax and ZIP integrity checked.
- No invented ratings, testimonials, insurance claims or credentials.

Verification scope: source-file checks and isolated JavaScript execution. Local browser rendering could not run in this environment; no browser playback or visual rendering result is claimed.

No final public domain supplied: noindex retained until configure-launch.py sets the confirmed URL. Instructions are in README.txt.
