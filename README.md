# 🌌 Glassmorphism Authentication Suite

A modern, visually stunning, and highly responsive user authentication interface featuring a login page, registration page, and a reset password workflow. Built using pure HTML5 and custom CSS3, this interface uses premium glassmorphism aesthetics, glowing element micro-interactions, and cutting-edge browser view transitions.

---

## ✨ Features

- **Premium Glassmorphism Aesthetic:** Utilizes semi-transparent backgrounds (`rgba`), advanced CSS filters (`backdrop-filter: blur`), subtle borders, and dual-layer box shadows (inset & drop shadows) to achieve a modern frosted-glass effect.
- **Micro-interactions & Glow Effects:** High-fidelity focus transitions that feature custom active borders and cyan neon glowing shadows (`box-shadow: 0 0 15px rgba(0, 229, 255, .5)`).
- **CSS View Transitions API:** Out-of-the-box support for browser-native fluid page transitions (`@view-transition { navigation: auto; }`) for a smooth, single-page-app-like experience in modern browsers (Chrome/Edge/Opera/Safari 18+).
- **Intelligent Autocomplete Handling:** Includes tailored CSS overrides to bypass ugly browser default auto-fill backgrounds, preserving the dark glass theme during credential insertion.
- **Fully Responsive:** Custom media queries scale down elements elegantly for viewport sizes below `500px` (such as stacking check-boxes and forgot password links on mobile).
- **Visual Iconography:** Implements Bootstrap Icons as visual indicators directly embedded inside form elements for maximum clarity.

---

## 📂 Project Structure

```text
glassmorphism-login-page/
├── Media/
│   └── bg-image.jpg         # Dark premium background graphic
├── f-password.html          # Password Reset form (Email, OTP, New Passwords)
├── index.html               # Main Login form (Remember Me, Links to reset/register)
├── registration.html        # Account Creation form (Name, Email, Passwords)
├── style.css                # Global stylesheet containing core variables, layouts, and animations
└── README.md                # Documentation (this file)
```

---

## 🛠️ Built With

- **HTML5:** Semantic architecture (`<form>`, `<input>`, `<label>`, `<button>`).
- **CSS3:** Custom styling (Flexbox, CSS Transitions, `@keyframes` entrance fallback animations, `@supports`, and View Transitions).
- **Poppins:** Modern, sleek typeface fetched from Google Fonts.
- **Bootstrap Icons:** Light vector icons for clean element labeling.

---

## 🚀 How to Run

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/your-username/Glassmorphic-Login-page.git
   cd glassmorphism-login-page
   ```
2. **Launch the Application:**
   - Double-click `index.html` to open it in your browser directly.
   - Alternatively, serve it via a local development server (such as the VS Code **Live Server** extension) to fully observe the native browser **View Transitions API** in action.

---

## ⚙️ Customization

You can change the background graphic, fonts, or primary branding color scheme by adjusting the parameters in [style.css](file:///d:/WEB/PROJECTS/Log-in/style.css):

- **Change Background Image:** Modify the image file in the `Media/` folder or update the file path in `style.css`:
  ```css
  body {
      background: url("./Media/your-new-image.jpg");
  }
  ```
- **Change Primary Glow Theme:** Replace the cyan color values (`#00e5ff`) with your preferred accent color.

---

## 📄 License

This project is open-source and free to use. Customise it to your heart's content!