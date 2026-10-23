# RunMoa public website work log

## 2026-10-23 — Introduction copy refresh

- Updated Korean, English, and the root English fallback introduction to describe Apple Health run review, monthly/weekly goals, shoe mileage, stickers, photo compositions, and Flyover route videos.
- Updated the supported-workout FAQ to cover Apple Health records from Apple Watch, iPhone, Garmin, COROS, and other apps, with availability depending on the saved data.
- Updated page titles, search/social descriptions, application descriptions, and footer dates together.
- Preserved HTML structure, styles, scripts, screenshots, navigation, and download destinations.
- Validation: parsed all three pages and their JSON-LD; confirmed identical tag/attribute structure except description metadata; checked five feature items, four FAQs, unchanged links/assets, and matching English fallback content. No browser visual validation was performed.
- This is a website copy change, not confirmation of an App Store or TestFlight release.

## 2026-10-23 — Match the app's visual style

- Replaced broad mint emphasis with white headings and primary actions, muted supporting text, and restrained blue accents drawn from PNR2026.water.
- Matched PNR2026.canvas/canvasLift, translucent surfaces, fine borders, and 20px card corners; retained the page sections and content, existing images, links, and language routing.
- Versioned the shared stylesheet reference on all pages for consistent styling and cache refresh.
- Replaced the old promotional screenshot with the app's existing Korean Home onboarding asset, removing the large green framing without generating new App Store screenshots.
- Validation: Chrome at 320/390/1280px in Korean and English (six cases), with no horizontal overflow, broken images, or page errors; five feature items and FAQ interaction confirmed. Inspected the captured Korean mobile page. HTML changes outside the landing-page copy are stylesheet cache-version changes only.
