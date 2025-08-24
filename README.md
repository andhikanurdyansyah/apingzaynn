# 🌟 Aping - Premium Influencer Rate Card

A stunning, modern influencer rate card built with React, TypeScript, and premium animations. Features authentic beauty content creator portfolio with professional glass morphism design and interactive elements.

![Premium Rate Card](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 **Premium UI/UX**
- **Glass Morphism Design** - Modern glassmorphism effects with blur and transparency
- **Dark/Light Mode** - Seamless theme switching with beautiful animations
- **Responsive Design** - Perfect on all devices from mobile to desktop
- **Premium Animations** - Framer Motion powered smooth interactions

### 🚀 **Interactive Elements**
- **Three.js Background** - Dynamic 3D animated background
- **Floating Elements** - Subtle moving elements for depth
- **Hover Effects** - Engaging micro-interactions
- **Smooth Scrolling** - Buttery smooth page transitions

### 📊 **Content Sections**
- **Hero Profile** - Professional profile with animated stats
- **Brand Collaborations** - Moving carousel of brand logos with tooltips
- **Rate Card Packages** - Clear pricing with WhatsApp integration
- **Audience Analytics** - Comprehensive performance metrics
- **USP Highlights** - Animated unique selling propositions

### 🎯 **Real Data Integration**
- **Instagram Metrics** - Live @apingxxvi data (3,654 followers, 252 posts)
- **TikTok Analytics** - @apingzaynn performance (2.5K followers, 18.9K likes)
- **Brand Portfolio** - Real collaboration history with major beauty brands
- **Professional Branding** - Custom logo and cohesive design system

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Glass Components
- **Animations**: Framer Motion + Custom Effects
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/andhikanurdyansyah/apingzaynn.git

# Navigate to project directory
cd apingzaynn

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📱 Live Demo

🌐 **[View Live Site](https://apingzaynn.vercel.app)**

## 📦 Package Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

## 🎨 Design Highlights

### **Glass Morphism Components**
- Backdrop blur effects
- Gradient borders
- Subtle shadows and highlights
- Theme-adaptive transparency

### **Professional Brand Identity**
- Custom SVG logo design
- Consistent color palette (Rose/Pink/Purple gradients)
- Typography hierarchy with Inter font
- Professional photography integration

### **Animation System**
- Staggered component reveals
- Smooth page transitions
- Interactive hover states
- Floating element physics

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ Performance
- **Mobile Responsive**: 100%
- **Accessibility**: WCAG 2.1 AA Compliant
- **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💎 Created by Aping

**Professional Beauty & Lifestyle Influencer**
- 📸 Instagram: [@apingxxvi](https://instagram.com/apingxxvi)
- 🎵 TikTok: [@apingzaynn](https://tiktok.com/@apingzaynn)
- 📧 Email: apingzaynn@gmail.com

---

**Built with ❤️ using modern web technologies for the beauty influencer community.**
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
