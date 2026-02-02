# 🏨 The Wild Oasis – Hotel Management Dashboard

The **Wild Oasis** is an internal hotel management application built for a small boutique hotel with **8 luxurious wooden cabins**.  
This app is designed **only for hotel employees** to manage bookings, cabins, guests, and daily operations efficiently.

live at Vercel : https://the-oasis-wild-escape.netlify.app/ 

---

## 📌 Project Overview

- Internal hotel management system (not customer-facing)
- Used by hotel staff to manage guests and bookings
- Built as a **React Single Page Application (SPA)**
- Powered by a reusable **API** (future-ready for a customer booking website)

---
## 🛠️ Tech Stack

### Frontend
- **React** (SPA)
- **React Router** – Routing
- **Styled Components** – Component-scoped styling
- **React Query** – Remote state management
- **Context API** – UI state management
- **React Hook Form** – Form handling

### Other Tools & Libraries
- React Icons
- React Hot Toast
- Recharts
- date-fns
- Supabase (Backend & Authentication)

## ✨ Features

### 🔐 Authentication
- Secure login system for hotel employees
- New users can only be created **inside the application**
- Users can:
  - Upload an avatar
  - Update name and password

---

### 🏠 Cabins Management
- View all cabins in a table format
- Displays:
  - Cabin photo
  - Name
  - Capacity
  - Price
  - Current discount
- Create, update, and delete cabins
- Upload cabin photos

---

### 📅 Bookings Management
- View all bookings with:
  - Arrival & departure dates
  - Booking status
  - Paid amount
  - Guest & cabin details
- Booking statuses:
  - `unconfirmed`
  - `checked-in`
  - `checked-out`
- Additional booking details:
  - Number of guests
  - Number of nights
  - Guest observations
  - Breakfast option & breakfast price

---

### 🔁 Check-in / Check-out
- Check in guests as they arrive
- Check out guests on departure
- Accept payment during check-in (if not already paid)
- Add breakfast for the entire stay during check-in

---

### 👥 Guests Management
- Guest data includes:
  - Full name
  - Email
  - National ID
  - Nationality
  - Country flag for easy identification

---

### 📊 Dashboard
The dashboard is the **main entry screen** and shows:
- Data for the last **7 / 30 / 90 days**
- Today’s check-ins and check-outs
- Recent bookings, sales, and occupancy rate
- Charts:
  - Daily hotel sales (total sales vs extras)
  - Stay duration statistics

---

### ⚙️ App Settings
- Application-wide settings:
  - Breakfast price
  - Minimum and maximum nights per booking
- Dark mode support 🌙

---

## 🧭 Application Pages & Routes

| Page | Route |
|-----|------|
| Dashboard | `/dashboard` |
| Bookings | `/bookings` |
| Cabins | `/cabins` |
| Booking Check-in | `/checkin/:bookingId` |
| App Settings | `/settings` |
| User Signup | `/users` |
| Login | `/login` |
| Account Settings | `/account` |

---



---


- Shared API for internal and future customer-facing applications
- Scalable and future-ready architecture

---

## 🚀 Getting Started


# Install dependencies
```bash
npm install
```

# Start development server
```bash
npm run dev
```

