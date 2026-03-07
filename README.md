# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, custom cursor effects, and an elegant intro animation.

🌐 **Live Demo**: [https://vikash-portfolio0.netlify.app/](https://vikash-portfolio0.netlify.app/)

## ✨ Features

- **Intro Animation** - Eye-catching loading animation on first visit
- **Custom Cursor** - Interactive custom cursor for enhanced user experience
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Responsive Design** - Fully responsive across all devices using Tailwind CSS
- **Contact Form** - Integrated EmailJS for direct communication
- **Modern UI** - Clean and professional design with gradient backgrounds
- **Multiple Sections**:
  - Home/Hero section
  - About me
  - Skills showcase
  - Projects portfolio
  - Contact form
  - Footer

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **Framer Motion** 12.23.25 - Animation library
- **EmailJS** 4.4.1 - Email service integration
- **React Icons** 5.5.0 - Icon library
- **Lucide React** 0.561.0 - Additional icon set
- **React Router DOM** 7.10.1 - Routing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/VikashRaj-cmd/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components
│   │   ├── CustomCursor.jsx
│   │   ├── IntroAnimation.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   └── ParticlesBackground.jsx
│   ├── section/        # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

1. **Personal Information**: Update content in section components (`About.jsx`, `Home.jsx`, etc.)
2. **Projects**: Add your projects in `Projects.jsx`
3. **Skills**: Modify skills list in `Skills.jsx`
4. **Styling**: Customize colors and styles in `index.css` and Tailwind configuration
5. **Images**: Replace images in `src/assets/` with your own

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your credentials to the `.env` file

## 🌐 Deployment

This project is deployed on [Netlify](https://vikash-portfolio0.netlify.app/)

### Deploy Your Own

**Netlify:**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

**Vercel:**
```bash
npm install -g vercel
vercel
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Vikash Rajput**
- GitHub: [@VikashRaj-cmd](https://github.com/VikashRaj-cmd)
- LinkedIn: [Vikash Rajput](https://www.linkedin.com/in/vikash-rajput-788838317/)
- Portfolio: [vikash-portfolio0.netlify.app](https://vikash-portfolio0.netlify.app/)

## ⭐ Show your support

Give a ⭐️ if you like this project!
