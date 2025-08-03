import React from 'react'
import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
// import ShopPage from "./pages/Landing Page/NavbarPage/Shop/Shop.jsx"
// import Pricing from "./pages/Landing Page/Navbar Page/Pricing/index.jsx"
// import IntegrationPage from "./pages/Landing Page/Navbar Page/Integration/index.jsx"
// import CompanyPage from "./pages/Landing Page/Navbar Page/Company/index.jsx"
// import BlogPage from "./pages/Landing Page/Navbar Page/Blog/index.jsx"
// import BlogDetails from "./pages/Landing Page/Navbar Page/Blog/BlogDetails/BlogList.jsx"
// import LoginPage from "./pages/Login/index.jsx"
// import BookADemoPage from "./pages/BookADemo/index.jsx"
// import CashflowDashboardPage from "./pages/Landing Page/HeroPage/Products/CashflowDashboard/index.jsx"
// import ReconcilationsPage from "./pages/Landing Page/HeroPage/Products/Reconcilation/index.jsx"
// import ChargebackManagementPages from "./pages/Landing Page/HeroPage/Products/ChargebackManagement/index.jsx"
// import ContactPage from "./pages/Landing Page/NavbarPage/Contact/Contact.jsx"
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
   <Routes>
    <Route path="/" element={<LandingPage />} />
    {/* <Route path="/pricing-plan" element={<Pricing />} />
    <Route path="/integration" element={<IntegrationPage />} />
    <Route path="/company" element={<CompanyPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/book-demo" element={<BookADemoPage />} />
    <Route path="/cash-flow-dashboard" element={<CashflowDashboardPage />} />
    <Route path="/reconcilations" element={<ReconcilationsPage />} />
    <Route path="/chargeback-management" element={<ChargebackManagementPages />} /> */}
    
    
    



     {/* />
   


    <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  )
}

export default Router
