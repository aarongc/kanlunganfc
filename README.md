# Kanlungan FC Website

A modern, mobile-first website for Kanlungan FC - Cebu's premier youth football club.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📁 Project Structure

```
kanlungan-fc/
├── app/
│   ├── about/              # About page
│   ├── teams/              # Teams listing page
│   ├── news/               # News & updates page
│   ├── schedule/           # Fixtures & training schedule
│   ├── gallery/            # Photo gallery
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   └── page.tsx            # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   └── Hero.tsx        # Hero section component
│   ├── cards/
│   │   ├── MatchCard.tsx   # Match display card
│   │   ├── PlayerCard.tsx  # Player profile card
│   │   └── NewsCard.tsx    # News article card
│   └── ui/                 # shadcn/ui components
└── public/
    └── images/             # Static images
```

## 🎨 Design

- **Color Scheme:** Black / Yellow / Gold (official club colors from logo)
- **Typography:** Inter (primary font)
- **Approach:** Mobile-first responsive design
- **Style:** Modern, bold, action-oriented
- **Founded:** 2014

## 🏃 Getting Started

### Development Server

```bash
npm run dev
npm run open:app
npm run open:repo
```

Run `npm run open:app` after starting the dev server to open the app URL in your browser.
If opening is blocked in your environment, visit [http://localhost:3000](http://localhost:3000) manually.
Run `npm run open:repo` to open the current repository folder (Explorer on Windows, `open` on macOS, `xdg-open` on Linux).
If your OS opener command is unavailable, the script prints the folder path for manual opening.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Home (/)** - Hero, upcoming matches, latest news, CTA
- **About (/about)** - Club history, mission, vision, values
- **Teams (/teams)** - Age groups (U8, U10, U12, U16, Adults)
- **News (/news)** - Latest updates and announcements
- **Schedule (/schedule)** - Match fixtures, results, training schedule
- **Gallery (/gallery)** - Photos from matches and events
- **Contact (/contact)** - Contact form and information

## ✨ Features Implemented

✅ Responsive navigation with mobile menu and logo  
✅ Hero section with CTA buttons  
✅ Reusable card components (Match, Player, News)  
✅ Static page content for all main pages  
✅ Consistent layout with header and footer  
✅ Mobile-first responsive design  
✅ Hover effects and transitions  
✅ Official club branding (Yellow/Black color scheme with logo)  

## 🔜 Next Steps (Phase 2)

- [ ] Integrate Sanity CMS for content management
- [ ] Add dynamic routes for individual team pages
- [ ] Add dynamic routes for news articles
- [ ] Implement image uploads and gallery
- [ ] Add SEO optimization (meta tags, sitemap)
- [ ] Set up contact form backend
- [ ] Deploy to Vercel

## 🔜 Future Features (Phase 3)

- [ ] Player registration system
- [ ] Member portal with authentication
- [ ] Admin dashboard
- [ ] Training attendance tracking
- [ ] Live match updates
- [ ] WhatsApp integration
- [ ] Sponsor section

## 📦 Dependencies

Key dependencies:
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `framer-motion` - Animations
- `lucide-react` - Icons
- `class-variance-authority`, `clsx`, `tailwind-merge` - Utility functions

## 👨‍💻 Development

This project uses:
- Next.js App Router (not Pages Router)
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for pre-built components

## 📝 Notes

- All pages are currently static with sample data
- Club logo added to navbar (`/public/images/logo.png`)
- Official colors: Black, Yellow (#EAB308 / yellow-500), Gold
- Contact form is frontend-only (needs backend integration)
- CMS integration recommended for content management
- Founded in 2014

---

Built with ❤️ for Kanlungan FC
