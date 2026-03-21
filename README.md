# Developer Portfolio

A production-ready personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features
- **Next.js 14 (App Router)** for fast rendering and optimal SEO.
- **Tailwind CSS** for responsive, utility-first styling.
- **Framer Motion** for smooth scroll animations and page transitions.
- **Dark/Light Mode** implemented via `next-themes`.
- **Live LeetCode Stats** using public API.
- **EmailJS Contact Form** for direct messaging straight to your inbox.
- **Fully Customizable Data** separated into clean JS utility files.

## 🛠️ Local Setup

1. **Clone the repository** (or use the provided template).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up Environment Variables**:
   Open `.env.local` and add your EmailJS keys:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## 📝 How to Update Personal Data

All your personal data, skills, education, and projects are centralized in `utils/data/`:
- `personal-data.js` - Update your name, titles, bio, and social links. Note: Add your LeetCode username here to make the DSA stats widget work.
- `skills.js` - Update your technical skills organized by category.
- `projects.js` - Update your portfolio projects.
- `education.js` - Update your educational background.
- `dsa-topics.js` - Update your Data Structures & Algorithms topic tracking.

Images such as your profile picture should be placed in the `/public` folder (e.g., `/public/profile.png`).

## 📧 EmailJS Setup Guide

To get the contact form working:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Setup an Email Service (e.g., Gmail) and note your **Service ID**.
3. Create an Email Template. You can use standard variables like `{{user_name}}`, `{{user_email}}`, and `{{message}}`. Note your **Template ID**.
4. Go to the Account section and note your **Public Key**.
5. Put these three keys into your `.env.local` (for local testing) and in your Vercel Environment Variables (for deployment).

## ☁️ Vercel Deployment Steps

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click "Add New... > Project".
3. Import your GitHub repository.
4. **Important**: In the configuration before deploying, expand **Environment Variables** and add your EmailJS keys here too.
5. Click **Deploy**. Vercel will build and host your site seamlessly.
