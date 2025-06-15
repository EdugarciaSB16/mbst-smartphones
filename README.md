# 📱 MBST Smartphones

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Testing](https://img.shields.io/badge/Testing-Jest-15C213?style=for-the-badge&logo=jest)](https://jestjs.io/)
[![Coverage](https://img.shields.io/badge/Coverage-90%25-97CA00?style=for-the-badge)](https://jestjs.io/)

**MBST Smartphones** is a responsive mobile phone catalog developed as part of a Frontend Engineer technical challenge. The app features real-time product search, interactive product detail pages, a functional shopping cart with persistent state, and animated UI feedback.

> ✅ Built using the latest **Next.js 14 (App Router)** with a focus on clean architecture, performance, and test coverage.

## 🚀 Demo

Explore the live app 👉 [mbst-smartphones.vercel.app/phones](https://mbst-smartphones.vercel.app/phones)

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Context API
- **Data Fetching**: SWR
- **Testing**: Jest + React Testing Library
- **Tooling**: Turbopack, ESLint, Prettier

## ✨ Features

- 🔎 Search & Filter phones
- 📱 Interactive product detail with color/storage selectors
- 🛒 Cart with localStorage persistence
- 📦 Dynamic pricing
- ⚙️ Detailed technical specs
- 🔁 Similar product recommendations
- 💬 Toast feedback system
- 📱 Mobile-first responsive design
- 🎯 Test coverage >90%

## 📁 Project Structure

```bash
src/
├── app/                      # Next.js App Router structure
│   ├── api/                  # API proxy routes
│   │   └── products/
│   │       ├── [id]/route.ts # Product detail fetch
│   │       └── route.ts      # Product listing fetch
│   ├── cart/
│   │   └── page.tsx          # Cart view
│   └── phones/
│       ├── [id]/page.tsx     # Product detail page
│       └── page.tsx          # Product listing
│
├── components/               # Shared UI components
│   ├── BackButton.tsx
│   ├── Navbar.tsx
│   ├── PageTransition.tsx
│   └── Skeleton.tsx
│
├── context/                  # Global state via React Context
│   ├── CartContext.tsx
│   └── ToastContext.tsx
│
├── features/                 # Feature-based folders (modular design)
│   ├── phoneDetail/
│   │   ├── components/       # UI components for detail view
│   │   │   ├── ColorSelector.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── SpecificationsTable.tsx
│   │   │   └── StorageSelector.tsx
│   │   └── hooks/
│   │       └── useProductById.ts
│   └── phones/
│       ├── components/       # UI components for listing
│       │   ├── PhoneCard.tsx
│       │   ├── PhoneGrid.tsx
│       │   └── SearchBar.tsx
│       └── hooks/
│           └── usePhone.ts
│
├── hooks/                    # Global reusable hooks
│   ├── useDebounce.ts
│   └── useIsMobile.ts
│
├── lib/                      # Helpers and utilities
│   ├── fetcher.ts
│   └── dedupeProducts.ts
│
├── styles/                   # Global styles (Tailwind base, etc.)
│
├── __tests__/                # Centralized tests (unit + integration)
│   ├── context/
│   ├── lib/
│   └── pages/
│
├── .env.local                # Environment variables
├── jest.config.ts           # Testing config
├── jest.setup.ts            # Jest setup
├── tsconfig.json            # TypeScript config
└── package.json             # Project metadata
```

## ▶️ Getting Started

```bash
git clone https://github.com/EdugarciaSB16/mbst-smartphones.git
cd mbst-smartphones
npm install
cp .env.local
API_URL=your_api_url_here
API_KEY=your_api_key_here
npm run dev
```

## 🧪 Testing

```bash
npm test           # Run tests
npm run test:coverage   # View coverage
```

## 📦 Production

```bash
npm run build
npm start
```

## 🧠 Future Enhancements

- Authentication flow
- Stripe payment integration
- PWA capabilities
- i18n support
- Analytics tracking

MIT © Eduardo García
