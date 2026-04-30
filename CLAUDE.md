@AGENTS.md

# Elysia Booking Style Guide

Use this guide to keep every page and component visually consistent. This project is a luxury hotel booking template with a calm, premium, alpine-resort feeling.

## Overall Theme

- Mood: serene, private, elegant, refined, high-end hospitality.
- Visual language: quiet luxury, strong vertical spacing, editorial photography, simple geometry, restrained colors.
- Layout: mobile-first with the main page constrained around `max-w-[402px]` unless a future desktop layout is intentionally designed.
- Shape language: mostly squared or subtly rounded. Avoid pill buttons, playful shapes, bubbly cards, loud gradients, or decorative blobs.
- Surfaces: use full-width section bands instead of nested cards. Cards are only for repeated content, image tiles, modals, or contained tools.

## Color Theme

Primary brand colors:

- Deep navy: `text-blue-950`, `bg-blue-950`, hex `#172554`
- Navy hover: `#071a33`
- Warm accent: `border-orange-300`, `border-orange-400`, `text-yellow-900`
- Light stone: `bg-stone-100`, `bg-stone-200`
- Mid stone: `bg-stone-300`, `border-stone-300`, `border-stone-400`
- Body text: `text-stone-600`, `text-stone-700`, `text-stone-800`
- White text/surfaces: `text-white`, `bg-white`

Usage rules:

- Use deep navy for primary actions, navigation, footer, icons, and important headings.
- Use warm orange only as an accent line, border, or small emphasis. Do not make it the dominant page color.
- Use stone backgrounds for calm content sections.
- Use white surfaces sparingly for buttons, assistance blocks, and contrast panels.
- Use dark overlays on images: `bg-black/50`, `bg-blue-950/60`, or image `brightness-30`.

## Typography

Current font setup:

- The app loads Geist through `next/font/google`.
- Components also use Tailwind `font-serif` for luxury/editorial headings.
- Keep this contrast: serif for brand and headings, sans for body and utility text.

Font style rules:

- Brand/nav text: `font-serif uppercase tracking-[0.3em]`
- Main hero eyebrow: `text-lg text-center uppercase tracking-[0.3em]`
- Section labels: `text-sm uppercase text-yellow-900`
- Section headings: `font-serif text-lg` or `font-serif text-xl` with `text-blue-950`
- Body copy: `text-sm` or `text-base` with `leading-relaxed` or comfortable line height
- Utility text: `text-xs uppercase font-bold`
- Fine print/footer legal: `text-[10px] uppercase tracking-[0.18em]`

Avoid:

- Oversized typography inside compact sections.
- Negative letter spacing.
- Viewport-scaled font sizes.
- Mixing many font families.

## Language And Copy

- Use clear, simple wording for a broad guest audience.
- Keep the tone calm, helpful, and practical rather than overly formal or exclusive.
- Prefer direct phrases like "help confirm your room" or "details for your visit" over luxury-heavy wording like "curate your perfect stay."
- Mention real guest needs: rooms, dates, directions, reservations, availability, and next steps.
- Keep short intro copy to 1-2 sentences so it fits comfortably on the mobile layout.

## Font Sizes

Preferred Tailwind sizes:

- Fine print: `text-[10px]`
- Metadata and labels: `text-xs`
- Buttons and body: `text-sm`
- Supporting copy: `text-base`
- Section headings: `text-lg`
- Larger editorial headings: `text-xl` to `text-2xl` only when space allows

Keep text readable on the mobile width. If a label is long, wrap it intentionally instead of shrinking it too aggressively.

## Button Themes

Primary button:

- Classes: `flex h-12 w-60 items-center justify-center border-l-4 border-orange-400 bg-blue-950 text-sm text-white hover:bg-[#071a33]`
- Use for the most important booking/reservation action.
- Keep the orange left border as the signature action accent.

Secondary glass button:

- Classes: `h-12 w-60 border border-white bg-white/5 text-sm text-white backdrop-blur`
- Use over dark hero images or image overlays.
- Keep text white and borders thin.

Header reserve button:

- Classes: `bg-blue-950 px-5 py-2 text-sm text-white hover:bg-[#071a33] tracking-[0.1em]`
- Keep it compact and uppercase.

Assistance/action block:

- Classes: `flex min-h-25 w-full items-center gap-7 border-l-4 bg-white px-9 text-left text-blue-950`
- Use a left border accent: orange for messaging/concierge, navy for phone/reservation.
- Include an icon, a serif title, and a small muted description.

Button rules:

- Prefer rectangular buttons with subtle or no radius.
- Use consistent heights: `h-12` for standard buttons, `min-h-25` or `min-h-30` for large action blocks.
- Hover states should darken navy or subtly increase contrast. Avoid flashy animation.
- Include accessible labels for icon-only buttons.

## Shadows And Borders

Use shadows sparingly:

- Small image/content depth: `shadow-sm`
- Map or featured embedded content: `shadow-2xl`
- Avoid heavy shadows on every section.

Borders:

- Standard neutral borders: `border border-stone-300` or `border-stone-400`
- Action accent borders: `border-l-4 border-orange-300`, `border-l-4 border-orange-400`, or `border-l-4 border-blue-950`
- Icon containers may use `rounded-2xl` when they are small functional blocks.

## Spacing

Section padding:

- Standard content section: `px-5 py-12`
- Tighter section: `px-5 py-6`
- Footer: `px-5 py-16`

Vertical rhythm:

- Use generous spacing between major content groups: `space-y-6`, `space-y-8`, `mb-10`, `mb-16`.
- Hero content can use `gap-4`.
- Keep icon/text rows aligned with `flex items-center gap-5` or `gap-7`.

## Image Style

- Use real hotel/resort imagery as the primary visual signal.
- Use `next/image` with `fill` and `object-cover` for hero and room tiles.
- Hero images should feel immersive and dark enough for white text.
- Room/image tiles can use `h-80 overflow-hidden bg-stone-300 shadow-sm`.
- Overlay image cards with `absolute inset-0 bg-black/50` when text sits on top.

## Icons

- Keep icons thin and elegant: `strokeWidth="1.8"` or `2`.
- Use simple line icons in navy or white.
- Icon sizes should usually be `h-6 w-6`.
- Icons should support the action, not decorate the page randomly.

## Component Patterns

Navbar:

- Sticky top navigation.
- White background, navy text, serif uppercase brand.
- Menu icon on the left, compact reserve action on the right.

Hero:

- Full image background.
- Dark navy or black overlay.
- Centered vertical content.
- One primary button and one secondary button.

Content sections:

- Alternate stone background tones to create page rhythm.
- Use uppercase labels, serif navy headings, and muted stone body text.

Footer:

- Deep navy background.
- Serif uppercase brand text with wide tracking.
- Muted blue links and legal text.

## Accessibility And Polish

- All images need useful `alt` text unless decorative.
- Icon-only buttons need `aria-label`.
- Interactive elements need visible hover/focus states.
- Text must not overlap images or controls.
- Maintain enough contrast, especially over photography.
- Do not add visible instructional copy about how the UI works unless it is part of the actual user experience.
