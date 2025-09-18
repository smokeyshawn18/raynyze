# 🚀 Raynyze - AI Resume Analyzer

[![CI/CD Pipeline](https://github.com/smokeyshawn18/raynyze/actions/workflows/ci.yml/badge.svg)](https://github.com/smokeyshawn18/raynyze/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<div align="center">
  <br />
    <a href="https://raynyze.vercel.app" target="_blank">
      <img src="public/readme/hero.webp" alt="Raynyze - AI Resume Analyzer">
    </a>
  <br />
</div>

## ✨ Introduction

Raynyze is an AI-powered resume analyzer that provides instant feedback, ATS optimization, and personalized improvement suggestions to help you land your dream job. Built with React Router v7, TypeScript, and modern web technologies.

## ⚙️ Tech Stack

- **[React Router v7](https://reactrouter.com/)** - Full-stack React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[Puter.js](https://puter.com/)** - Cloud storage and AI services

## 🔋 Features

👉 **Smart Resume Analysis**: AI-powered scoring and feedback system
👉 **ATS Optimization**: Check compatibility with Applicant Tracking Systems  
👉 **Real-time Processing**: Instant feedback and score calculation
👉 **File Management**: Secure upload and storage with Puter.js
👉 **Responsive Design**: Works perfectly on all devices
👉 **Clean UI/UX**: Modern purple/blue theme with smooth animations
👉 **Type Safety**: Full TypeScript implementation
👉 **SEO Optimized**: Complete meta tags, Open Graph, and sitemap

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/smokeyshawn18/raynyze.git
cd raynyze
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Puter.js Configuration (required for file storage and AI features)
VITE_PUTER_DOMAIN=api.puter.com
VITE_PUTER_SUBDOMAIN=your-app-subdomain

# Add any additional environment variables here
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Visit [http://localhost:5173](http://localhost:5173) to view the application.

## 🛠️ Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run dev:debug    # Start development server with debugging

# Building
npm run build        # Build for production
npm run preview      # Preview production build locally

# Type Checking
npm run typecheck    # Run TypeScript type checking
npm run typecheck:watch # Watch mode for type checking

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier

# Testing
npm test            # Run tests (when implemented)

# Utility
npm run clean       # Clean build artifacts
```

### Code Quality

This project uses:

- **ESLint** for code linting with React and TypeScript rules
- **TypeScript** for type safety and better developer experience
- **Prettier** for consistent code formatting (recommended)

### CI/CD Pipeline

Our GitHub Actions workflow includes:

1. **Quality Gate**: ESLint, TypeScript checking, formatting validation
2. **Build & Test**: Production build verification and test execution
3. **Deploy**: Automatic deployment to Vercel on successful builds
4. **Security**: Dependency vulnerability scanning

## 📁 Project Structure

```
raynyze/
├── app/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── lib/               # Utilities and helpers
│   ├── routes/            # Route components
│   ├── app.css           # Global styles and CSS variables
│   ├── root.tsx          # Root component with SEO meta
│   └── routes.ts         # Route definitions
├── build/                 # Production build output
├── constants/             # Application constants
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── .github/workflows/    # CI/CD configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

## 🎨 Styling & Theming

The application uses a modern purple/blue color scheme with CSS custom properties:

```css
:root {
  --color-primary: #6366f1; /* Indigo */
  --color-secondary: #8b5cf6; /* Violet */
  --color-accent: #06b6d4; /* Cyan */
  --color-background: #f8fafc; /* Slate 50 */
  --color-surface: #ffffff; /* White */
}
```

All components use Tailwind CSS utilities for consistent styling.

## 🔧 Configuration Files

### TypeScript Configuration

The project uses strict TypeScript settings for better code quality:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### ESLint Configuration

Custom ESLint rules for React and TypeScript:

```json
{
  "extends": [
    "@eslint/js/recommended",
    "@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ]
}
```

## � Deployment

### Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Upload build/ directory to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add TypeScript types for all new code
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Router](https://reactrouter.com/) for the amazing full-stack framework
- [Puter.js](https://puter.com/) for cloud services and AI capabilities
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Vercel](https://vercel.com/) for seamless deployment

---

<div align="center">
  Made with ❤️ by the Raynyze team
</div>

👉 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.

👉 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.

👉 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/ai-resume-analyzer.git
cd ai-resume-analyzer
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="links">🔗 Assets</a>

Assets and snippets used in the project can be found in the **[video kit](https://jsm.dev/resumind-kit)**.

<a href="https://jsm.dev/resumind-kit" target="_blank">
  <img src="public/readme/videokit.webp" alt="Video Kit Banner">
</a>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsm.dev/resumind-courses" target="_blank">
  <img src="public/readme/jsmpro.webp" alt="Project Banner">
</a>
# Pipeline test
