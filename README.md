# ACCL Lab Website

Welcome to the official website of the **ACCL Lab** at IIT Bhilai!  
This repository contains the source code for our lab's public website, built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

🌐 **Live Website**: [https://accl-lab.github.io/accl-lab/](https://accl-lab.github.io/accl-lab/)

---

## 🚀 Features

- ⚛️ Built with React and Vite for fast performance
- 📱 Responsive design (Bootstrap)
- 🎨 Animations with AOS
- 🧭 React Router-based navigation

---

## 📁 Project Structure

```

accl-lab/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable components
│   ├── pages/            # Website pages
│   ├── styles/           # CSS
│   └── App.jsx           # Main app
├── index.html
└── package.json

````

---

## 🛠️ Installation & Development

```bash
# Clone the repo
git clone https://github.com/ACCL-lab/accl-lab.git
cd accl-lab

# Install dependencies
npm install

# Start development server
npm run dev
````

---

## 🏗️ Build for Deployment

```bash
npm run build
```

The generated `dist/` folder contains static files that can be hosted.

---

## 🚀 Deploy to GitHub Pages

This site is deployed using **GitHub Actions** to the `gh-pages` branch.

1. Push code to `main`
2. GitHub Actions will automatically build and deploy
3. The site will be available at [https://accl-lab.github.io/accl-lab/](https://accl-lab.github.io/accl-lab/)

If needed, update the `vite.config.js` with the correct `base`:

```js
export default defineConfig({
  base: "/accl-lab/",
  plugins: [react()],
});
```

---

## 🧪 Feedback

We welcome your feedback!
Feel free to raise issues or suggestions in the [Issues](https://github.com/ACCL-lab/accl-lab/issues) section.

---

## 📄 License

This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for more details.

---

© ACCL Lab, IIT Bhilai
