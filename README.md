# 🏬 Commodities Management System

A modern **role-based Commodities Management System** built with **Next.js**, focusing on clean architecture, scalable state management, and a professional dashboard experience.

This project demonstrates **authentication, role-based access control, CRUD operations, analytics dashboards, and UI theming**, aligned with real-world frontend development practices.

---

## 🔗 Live Demo

👉 **Vercel Deployment:**
[https://commodities-management-three.vercel.app/](https://commodities-management-three.vercel.app/)

---

## 🎯 Key Features

### 🔐 Role-Based Access Control

| Feature             | Manager | Store Keeper |
| ------------------- | ------- | ------------ |
| Login               | ✅       | ✅            |
| Dashboard Access    | ✅       | ❌            |
| View Products       | ✅       | ✅            |
| Add Products        | ✅       | ✅            |
| Role-Based UI       | ✅       | ✅            |

---

## 🧭 Application Flow

### Authentication

* Login with form validation
* Mock API authentication
* Secure session handling using cookies
* Role-based access enforcement

### Dashboard (Manager Only)

* KPI cards (Earnings, Sales)
* Analytics overview using charts
* Data fetched via React Query

### Product Management

* Fetch products (`GET /products`)
* Add products (`POST /products`)
* Delete products (`DELETE /products`)
* UI updates handled via React Query cache & mutations

### UI & UX Enhancements

* Light / Dark Mode (persisted using `localStorage`)
* Responsive sidebar + navbar layout
* Role-based feature visibility

## 📱 Responsive UI

* Fully responsive layout optimized for **desktop, tablet, and mobile**
* Sidebar automatically:

  * Fixed on desktop
  * Toggleable on mobile using a hamburger menu
* Navbar and content adapt seamlessly across breakpoints
* Smooth transitions for sidebar open/close on smaller screens
* UI components tested across common viewport sizes

This ensures a consistent and accessible user experience regardless of device.

---

## 🧪 Demo Credentials

Use the following dummy users to test role-based behavior:

```txt
Manager
Email: manager@slooze.com
Password: manager123

Store Keeper
Email: keeper@slooze.com
Password: keeper123
```

---

## 🛠 Tech Stack

### Framework & Core

* **Next.js 16 (App Router)**
* **React 19**

### State Management

* **React Query (TanStack Query)** – server & async state
* **Zustand** – UI state (theme)

### Forms & Validation

* **React Hook Form**
* **Zod**

### UI & Styling

* **Tailwind CSS**
* **Radix UI**
* **Lucide Icons**
* **shadcn/ui patterns**

### Charts & Visualization

* **Chart.js**
* **react-chartjs-2**

---

## 🚀 Run Locally

```bash
git clone https://github.com/Sandy8172/Commodities_Management.git
cd Commodities_Management
npm install
npm run dev
```

App runs at 👉 `http://localhost:3000`

---

## 🧠 Architectural Highlights

* **React Query** used instead of Redux for API data:

  * Caching & request deduplication
  * Optimistic updates
  * Clean async flow
* **Zustand** limited to UI state only
* Mock APIs structured to be easily replaced with real backend services
* Clean separation of concerns across components, hooks, and stores

---

## 👨‍💻 Author

**Sandeep Singh**
Frontend Developer
GitHub: [https://github.com/Sandy8172](https://github.com/Sandy8172)

---

## 📌 Notes

* UI inspired by provided Figma design
* Sample data and mock APIs used where backend was not provided
* Designed to reflect real-world frontend application structure
