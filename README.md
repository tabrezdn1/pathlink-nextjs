# PathLink Next.js

A modern, high-performance website for PathLink built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run type-check` - Run TypeScript type checking

### CI/CD
- `npm run ci:check` - Run all quality checks (type-check + lint + format + build)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Turbopack (dev) / Webpack (prod)

## 🔄 GitHub Workflows

### CI Pipeline (`ci.yml`)
Runs on every push and PR:
- ✅ TypeScript type checking
- ✅ ESLint code quality checks
- ✅ Prettier formatting verification
- ✅ Production build validation
- ✅ Security audit
- ✅ Dependency review (PRs only)

### Code Quality (`code-quality.yml`)
Advanced PR checks:
- 📊 Bundle size analysis
- 🔍 ESLint SARIF reporting
- 💬 Automated PR comments

### Deployment (`deploy.yml`)
Production deployment:
- 🚀 Automatic Vercel deployment
- ✅ Quality checks before deploy

## 🎨 Features

- **Responsive Design**: Perfect on all devices
- **Dark Mode**: System preference detection
- **Performance**: Optimized with Next.js 15
- **Animations**: Smooth Framer Motion effects
- **SEO**: Built-in Next.js optimizations
- **Type Safety**: Full TypeScript coverage

## 🔧 Development

### Prerequisites
- Node.js 18+ or 20+
- npm

### Code Style
This project uses:
- ESLint for code quality
- Prettier for formatting
- TypeScript strict mode

### Pre-commit Checks
All commits should pass:
```bash
npm run ci:check
```

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
├── context/           # React contexts
├── hooks/             # Custom hooks
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set up environment variables (if any)
3. Deploy automatically on push to main

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run ci:check`
5. Submit a pull request

## 📄 License

This project is private and proprietary.