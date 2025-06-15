# 📱 MBST Smartphones - E-commerce Catalog

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Testing](https://img.shields.io/badge/Testing-Jest-15C213?style=for-the-badge&logo=jest)](https://jestjs.io/)
[![Coverage](https://img.shields.io/badge/Coverage-85%25-97CA00?style=for-the-badge)](https://jestjs.io/)

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
- 🎯 Test coverage >85%

## 📁 Project Structure

src/
├── **mocks**/ # Test mocks (e.g., Next.js Image mock)
│ └── next/
├── app/ # App Router structure (Next.js 14)
│ ├── api/ # API proxy handlers
│ │ └── products/
│ │ └── [id]/route.ts # Product detail API fetch
│ │ └── route.ts # Product listing API fetch
│ ├── cart/
│ │ ├── **tests**/ # Page test
│ │ └── page.tsx # Cart view
│ └── phones/
│ ├── [id]/page.tsx # Product detail page
│ └── page.tsx # Product listing page
├── components/ # Global reusable components
│ ├── BackButton.tsx
│ ├── Navbar.tsx
│ ├── PageTransition.tsx
│ └── Skeleton.tsx
├── context/ # React Contexts
│ ├── **tests**/
│ │ ├── CartContext.test.tsx
│ │ └── ToastContext.test.tsx
│ ├── CartContext.tsx # Cart state
│ └── ToastContext.tsx # Toast notifications
├── features/ # Domain-specific features
│ ├── phoneDetail/
│ │ ├── **tests**/ # Tests for detail components
│ │ ├── components/ # UI for phone detail
│ │ │ ├── ColorSelector.tsx
│ │ │ ├── ProductDetailSkeleton.tsx
│ │ │ ├── ProductGallery.tsx
│ │ │ ├── SimilarItems.tsx
│ │ │ ├── SimilarItemsDesktop.tsx
│ │ │ ├── SimilarItemsMobile.tsx
│ │ │ ├── SpecificationsTable.tsx
│ │ │ └── StorageSelector.tsx
│ │ └── hooks/
│ │ └── useProductById.ts
│ └── phones/
│ ├── **tests**/ # Tests for phone listing
│ ├── components/
│ │ ├── PhoneCard.tsx
│ │ ├── PhoneGrid.tsx
│ │ ├── PhoneGridSkeleton.tsx
│ │ ├── ResultCount.tsx
│ │ └── SearchBar.tsx
│ ├── hooks/
│ │ └── usePhone.ts
│ └── types.ts
├── hooks/ # Global custom hooks
│ ├── useDebounce.ts
│ └── useIsMobile.ts
├── lib/ # Utilities and helpers
│ ├── **tests**/
│ │ └── fetcher.test.ts
│ ├── dedupeProducts.ts
│ └── fetcher.ts
├── styles/ # Global styles
├── .env.local # Env variables
├── jest.config.ts # Jest config
├── jest.setup.ts # Jest setup
├── tsconfig.json # TS compiler config
└── package.json # Project metadata

## ▶️ Getting Started

```bash
git clone https://github.com/EdugarciaSB16/mbst-smartphones.git
cd mbst-smartphones
npm install
cp .env.local.example .env.local
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
