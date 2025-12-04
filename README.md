# Vasu Kaneriya - Portfolio

A modern, fully responsive portfolio website built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Optimized performance
- 🎨 Smooth animations with Framer Motion
- 🎯 SEO optimized
- ♿ Accessible
- 🧩 Reusable components
- 📦 Clean architecture

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Language:** JavaScript (ES6+)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout with providers
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.js        # About page
│   ├── projects/
│   │   └── page.js        # Projects page
│   └── contact/
│       └── page.js        # Contact page
├── components/
│   ├── ui/
│   │   ├── Button.js      # Reusable button
│   │   ├── Badge.js       # Reusable badge
│   │   ├── Card.js        # Reusable card
│   │   ├── SectionTitle.js # Section titles
│   │   └── MotionWrapper.js # Animation wrapper
│   ├── sections/
│   │   ├── Hero.js        # Hero section
│   │   ├── About.js       # About section
│   │   ├── Skills.js      # Skills section
│   │   ├── Experience.js  # Experience timeline
│   │   ├── Projects.js    # Projects grid
│   │   └── Contact.js     # Contact form
│   ├── layout/
│   │   ├── Navbar.js      # Navigation bar
│   │   └── Footer.js      # Footer
│   ├── Container.js       # Container wrapper
│   └── ThemeProvider.js   # Theme provider
├── constants/
│   ├── skills.js          # Skills data
│   ├── experience.js      # Experience data
│   ├── projects.js        # Projects data
│   └── socialLinks.js     # Social links
├── lib/
│   └── utils.js           # Utility functions
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/vasu/Desktop/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

Edit the constants files in the `/constants` directory:

- `socialLinks.js` - Personal info and social media links
- `skills.js` - Technical skills
- `experience.js` - Work experience and education
- `projects.js` - Project portfolio

### Modify Theme Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Add New Sections

1. Create a new component in `/components/sections`
2. Import and add it to the desired page in `/app`

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

This project can be deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **Any Node.js hosting platform**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vasu Kaneriya**
- Email: kaneriya52@gmail.com
- Phone: +91 9727967339

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
