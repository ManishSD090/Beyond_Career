# Beyond Career - Landing Page

A modern, responsive landing page built for Beyond Career, a student-led initiative from IIT Kharagpur. The platform aims to empower students through mentorship, internship opportunities, industry connections, and personalized guidance.

## Features

- Responsive layout (mobile-first design)
- Clean visual hierarchy and smooth scrolling
- Hero section with CTA
- About, Services, Testimonials, Contact sections
- Navbar with in-page navigation
- Subtle animations on hover and scroll
- Integrated with Vercel for fast deployment

## Technologies Used

- React.js (Vite + JSX)
- HTML5 & CSS3
- Bootstrap (select utilities)
- Google Fonts (Outfit & Poppins)
- Git & GitHub
- Vercel for hosting

## Folder Structure

Beyond_Career/
├── public/
├── src/
│   ├── assets/               # Images and icons
│   ├── components/           # All UI components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── Footer/
│   └── App.jsx               # Main app wrapper
├── index.html
├── package.json
└── README.md

## Getting Started

1. Clone the repository:
   git clone https://github.com/ManishSD090/Beyond_Career.git

2. Navigate to the project directory:
   cd Beyond_Career

3. Install dependencies:
   npm install

4. Start development server:
   npm run dev

## Design Rationale

The design emphasizes clarity, responsiveness, and accessibility. A calm green accent color reflects growth and trust. Rounded cards and hover animations improve user engagement. Poppins and Outfit fonts provide modern typography, while layout sections follow a visual narrative — guiding users from discovery to connection.

## Technical Documentation

Built using React (with Vite for fast bundling), CSS3, and Bootstrap. Faced styling inconsistencies across devices, resolved using media queries. Optimized performance with compressed assets and component-based structure.

## Deployment Guide

Deployed via Vercel: connected GitHub repo → selected root directory → build command `npm run build`. Final URL tested across devices.

## License

This project is for educational and portfolio use. All rights reserved by the creator.

## Live on Vercel

https://beyond-career-five.vercel.app/
