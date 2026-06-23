# RunMoa landing page design QA

- Date: 2026-06-23
- Source direction: editorial-clean RunMoa landing concept
- Reference image: `/Users/shnoah/.codex/generated_images/019ef1de-960d-7e73-a8a5-bcd8dd41030c/exec-8bc02aa7-bb9c-4d1e-a154-725cc27b8ac0.png`
- Implementation screenshots: `/tmp/runmoa-short-desktop.png`, `/tmp/runmoa-short-mobile.png`
- Tested viewports: 1280×800 and 390×844

## Intentional changes from the reference

- Reduced the page to header, hero, five features, five inline FAQs, and footer.
- Kept the RunMoa navy and mint palette while removing decorative cards, gallery surfaces, and excess shadows.
- Used one real app screenshot at its original 647×1400 ratio instead of a multi-screen gallery.

## Verification

- Mobile document width equals viewport width: 390px, with no horizontal overflow.
- Hero heading renders as the specified three lines.
- Hero image preserves its source ratio and renders at 298×645px on mobile and 318×688px on desktop.
- Exactly five native `details` elements are present; the first is open by default and pointer toggling works.
- FAQ questions and answers match the `FAQPage` JSON-LD exactly.
- Page hierarchy contains one `h1`, followed by feature and FAQ `h2` headings.
- Focus-visible styling, skip link, reduced-motion handling, and descriptive image alt text are present.
- `/faq/` redirects to `/#faq`; internal FAQ links now target the main-page section.

## Issues

- P0: none
- P1: none
- P2: none

Final result: passed
