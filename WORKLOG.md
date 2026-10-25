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

## 2026-10-23 — Use factual product copy and narrow support wording

- Replaced emotional headlines and section introductions with direct descriptions of the iPhone app and its record, chart, goal, shoe, sticker, photo, and Flyover features in Korean, English, and the root fallback.
- Added the Korean product name to the Korean page title and introduction heading and aligned search/social descriptions with the functional copy.
- Removed named third-party device support claims from the introduction FAQ. The FAQ now describes running workouts saved to Apple Health, read permission, and data-dependent detail availability.
- Historical work-log entries are retained. Styling, sections, navigation, and app behavior are unchanged.
- Validation: all three pages retained their HTML structure, links, and JSON-LD; English fallback copy matches the English page; removed support names and emotional phrases are absent. Chrome checks at Korean/English 320/390/1280px passed without horizontal overflow, broken images, or page errors, and FAQ interaction worked; narrow mobile captures were inspected.

## 2026-10-23 — Use the exact product name runmoa

- At the user's request, the introduction uses the exact lowercase Latin name `runmoa` in both languages to distinguish the app from a separate Korean-named product.
- Replaced the Korean transliteration and mixed-case name in landing headings, navigation, footer, search/social metadata, image/accessibility labels, and application JSON-LD. Historical work-log entries remain intact.
- Validation: all three introduction pages use `runmoa`; no Korean transliteration or mixed-case product name remains in those files. Structure, links, styling, and app behavior are preserved.

## 2026-10-23 — Clarify product features and pre-install questions

- Preserved the introduction page's sections and direct product tone. Expanded the feature grid from five to six concise cards so photo sharing and 3D route videos have distinct descriptions while retaining records, goals, readiness, and shoe mileage.
- Used feature-specific Korean/English wording, including running stats on photos and running shoe mileage, without adding blog articles or unsupported device claims.
- Added two FAQs covering sample runs before Health permission and the route-data requirement for Flyover.
- Set the six-card grid to three desktop columns, two tablet columns, and one mobile column, and refreshed shared stylesheet cache references.
- Validation: Korean/English Chrome at 320/390/1280px passed (six cases), with six feature cards, no horizontal overflow, no broken images or page errors, and working FAQ expansion. Inspected Korean desktop and English narrow-mobile captures. Verified six FAQs per page, preserved links/headings/JSON-LD, matching English fallback content, exact runmoa naming, and absence of unsupported third-party device claims.
- Visual review found the Korean desktop hero's automatic image column could compress the text to near zero despite no document overflow. Set an explicit responsive image-column limit and let the English text-only hero span its grid. Rechecked all six cases with a minimum text-column-width assertion; Korean desktop text is about 738px wide and mobile text is 292/362px. Final desktop capture was inspected.

## 2026-10-25 — Separate the hero name and supporting headline

- At the user's request, the hero uses `Runmoa` while keeping its existing responsive font size. Korean supporting lines read `더 편하고 쉬운` and `iPhone 러닝 기록 앱` in smaller text.
- Applied the same hierarchy to English and the root fallback with `Simpler, easier` and `Running records for iPhone`.
- Preserved the descriptive search titles and metadata, existing sections, and product behavior. Other product-name references keep the existing `runmoa` spelling; this case change is scoped to the hero.
- Updated introduction footer dates and refreshed shared stylesheet cache references.
- Validation: Korean/English Chrome at 320/390/1280px passed. The app name retains 42.4/46.8/76.8px at those widths, while the supporting text is 20/20/32px and stays on exactly two lines. No horizontal overflow; six features and FAQs and one h1 remain. Inspected Korean mobile/desktop captures; search metadata is unchanged except the stylesheet cache version.

## 2026-10-25 — Put feature numbers and titles on the same row

- Placed each numbered badge beside its feature title with a 10px gap; descriptions remain below across the card width.
- Applied the shared layout to Korean, English, and the root fallback while preserving copy, title sizes, hero styling, and card order. Removed the badge's previous 24px bottom margin and refreshed stylesheet cache references.
- Validation: all six cards in Korean/English at 320/390/1280px show single-line titles beside the badge, vertically centered with a 10px gap; descriptions sit below, and there is no horizontal overflow. Inspected the Korean mobile capture. HTML copy and structure are byte-identical except for stylesheet cache references.
