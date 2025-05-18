# 🚗 Car Rental App

**Car Rental App** is a single-page web application for car rentals. Users can browse available cars, filter by brand, price, and mileage, add cars to favorites, view details, and book a car through a form. The app is built using **React**, **Vite**, **Redux Toolkit**, **React Router**, **Axios**, and **CSS Modules**.

---

## 🔗 Demo

👉 [Go to the app](https://rental-car-khaki-three.vercel.app/)

---

## 🛠️ Technologies

- **React + Vite** — modern, fast build and development for SPAs
- **Redux Toolkit** — state management
- **React Router DOM** — routing between pages
- **Axios** — handling HTTP requests
- **CSS Modules** — isolated component styling
- **LocalStorage** — saving favorites across sessions

---

## 📄 Pages

- `/` — **Home page** with a banner and "View Catalog" button
- `/catalog` — **Car catalog** with filters and a "Load More" button
- `/catalog/:id` — **Car detail page** with information and booking form

---

## 🔧 Core Features

- 🔍 Filtering cars by brand, price, mileage
- ❤️ Adding cars to favorites (saved in LocalStorage)
- 📄 Viewing detailed car information
- 📝 Booking form with a successful booking notification
- 🔁 Lazy loading cars via pagination ("Load More")

---

## 🎨 Styling and Fonts

The project uses **CSS Modules** and fonts **Manrope** and **Inter**.

## 📦 Installation and Running

```bash
# Clone the repository
git clone https://github.com/Dmytr0-kova1/Rental-Car

# Install dependencies
npm install

# Run locally
npm run dev
```
