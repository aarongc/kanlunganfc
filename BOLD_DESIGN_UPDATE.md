# Bold Minimalist Design Update

## Design Philosophy
Inspired by professional sports club rebrands, the website now features:
- **Bold, oversized typography** (text-6xl to text-9xl)
- **High contrast** black & white with yellow accent
- **Minimal, impactful sections** (removed clutter)
- **Dramatic first impression** with grayscale hero photo
- **Athletic aesthetic** with uppercase tracking-tight text

## Key Changes

### Hero Section
- ✅ Full-screen height (h-screen)
- ✅ Black & white team photo background (grayscale filter)
- ✅ Yellow logo badge at top
- ✅ Massive typography: "KANLUNGAN FC" (text-6xl to text-9xl)
- ✅ Scroll indicator animation
- ✅ Copyright footer in hero
- ✅ Dark overlay (bg-black/60) for text readability

### Stats Bar
- ✅ Black background with yellow stats
- ✅ Yellow border top/bottom (border-y-4)
- ✅ Compact, impactful numbers
- ✅ uppercase tracking-wider labels

### About Section
- ✅ White background, clean spacing (py-32)
- ✅ Centered content (max-w-5xl mx-auto)
- ✅ Bold title with yellow accent
- ✅ Large readable text (text-xl to text-2xl)
- ✅ Black button CTA

### Teams Section
- ✅ Black background with white text
- ✅ Yellow team cards (bg-yellow-500)
- ✅ Bold uppercase team names
- ✅ 5-column grid layout
- ✅ Hover effect (hover:bg-yellow-400)

### Upcoming Matches
- ✅ White background
- ✅ Bold title with yellow accent
- ✅ 3-column match card grid
- ✅ Black button CTA

### Call to Action
- ✅ Yellow gradient background (from-yellow-400 to-yellow-600)
- ✅ Huge typography (text-6xl to text-8xl)
- ✅ "JOIN THE TEAM" message
- ✅ Black primary button + outline secondary
- ✅ Large buttons (px-16 py-10)

## Typography Scale
- **Hero Headline**: text-6xl md:text-8xl lg:text-9xl
- **Section Titles**: text-5xl md:text-7xl
- **Body Text**: text-xl md:text-2xl
- **Buttons**: text-xl
- **Font Weight**: font-black (900) for impact

## Color Palette
- **Primary**: Yellow-400/500/600 (#EAB308, #F59E0B)
- **Background**: Black (#000000), White (#FFFFFF)
- **Text**: Black on yellow, White on black, Gray-700 on white
- **Borders**: 4px yellow borders for emphasis

## Spacing
- **Section Padding**: py-32 (large sections), py-8 (compact)
- **Container**: max-w-5xl to max-w-7xl
- **Grid Gaps**: gap-6 to gap-8
- **Button Padding**: px-12 to px-16, py-8 to py-10

## Removed Sections
- ❌ Featured Players section (too cluttered)
- ❌ Latest News grid (simplified)
- ❌ "Thank You" emotional section (too wordy)
- ❌ Duplicate CTAs (consolidated to one powerful section)
- ❌ Complex gradients with images (simplified to solid colors)

## Mobile Responsiveness
- Hero text scales: text-6xl → text-8xl → text-9xl
- Stats: 2 columns mobile → 4 columns desktop
- Teams: 1 column → 3 columns → 5 columns
- Matches: 1 column → 2 columns → 3 columns
- Buttons: flex-col → flex-row

## Performance
- ✅ Grayscale filter applied via CSS (fast)
- ✅ Priority loading for hero image
- ✅ AnimatedSection for scroll effects
- ✅ Optimized Next.js Image components
- ✅ Minimal animations (focus on content)

## Files Modified
1. `components/sections/Hero.tsx` - Complete redesign
2. `app/page.tsx` - Simplified from 9 sections to 5 core sections
3. All sections use bold typography and minimal approach

## View Live
```bash
cd kanlungan-fc
npm run dev
```
Visit: http://localhost:3000

## Design Inspiration
- Atletico Bucaramanga rebrand (bold typography, B&W photography)
- Professional sports clubs (Houston Dynamo, etc.)
- Emphasis on club identity and pride over flashy effects
