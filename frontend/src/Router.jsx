// // import React from 'react'
// // import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
// // import AdminPosts from './components/pages/Admin/AdminPosts.jsx';
// // // import ShopPage from "./pages/Landing Page/NavbarPage/Shop/Shop.jsx"
// // // import Pricing from "./pages/Landing Page/Navbar Page/Pricing/index.jsx"
// // // import IntegrationPage from "./pages/Landing Page/Navbar Page/Integration/index.jsx"
// // // import CompanyPage from "./pages/Landing Page/Navbar Page/Company/index.jsx"
// // // import BlogPage from "./pages/Landing Page/Navbar Page/Blog/index.jsx"
// // // import BlogDetails from "./pages/Landing Page/Navbar Page/Blog/BlogDetails/BlogList.jsx"
// // // import LoginPage from "./pages/Login/index.jsx"
// // // import BookADemoPage from "./pages/BookADemo/index.jsx"
// // // import CashflowDashboardPage from "./pages/Landing Page/HeroPage/Products/CashflowDashboard/index.jsx"
// // // import ReconcilationsPage from "./pages/Landing Page/HeroPage/Products/Reconcilation/index.jsx"
// // // import ChargebackManagementPages from "./pages/Landing Page/HeroPage/Products/ChargebackManagement/index.jsx"
// // // import ContactPage from "./pages/Landing Page/NavbarPage/Contact/Contact.jsx"
// // import { Route, Routes } from 'react-router-dom';
// // import BlogDetail from './components/pages/Blogs/BlogDetail.jsx';
// // import GrowDexBlog from './components/pages/Blogs/GrowdexBlog.jsx';
// // import AdminLogin from './components/pages/Admin/AdminLoginPage.jsx';
// // import AdminDashboard from './components/pages/Admin/AdminDashboard.jsx';
// // import ProtectedRoute from './components/ProtectedRoute.jsx';


// // function Router() {
// //   return (
// //    <Routes>
// //     <Route path="/" element={<LandingPage />} />
// //     <Route path="/ad" element={<AdminPosts />} />
// //     <Route path="/admin" element={<AdminLogin />} />
// //       {/* Protected */}
// //       <Route
// //           path="/admin/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <AdminDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //     <Route path="/blog" element={<GrowDexBlog />} />
// //     <Route path="/blog/:slug" element={<BlogDetail />} />
// //     {/* <Route path="/pricing-plan" element={<Pricing />} />
// //     <Route path="/integration" element={<IntegrationPage />} />
// //     <Route path="/company" element={<CompanyPage />} />
// //     <Route path="/blog" element={<BlogPage />} />
// //     <Route path="/blog/:id" element={<BlogDetails />} />
// //     <Route path="/login" element={<LoginPage />} />
// //     <Route path="/book-demo" element={<BookADemoPage />} />
// //     <Route path="/cash-flow-dashboard" element={<CashflowDashboardPage />} />
// //     <Route path="/reconcilations" element={<ReconcilationsPage />} />
// //     <Route path="/chargeback-management" element={<ChargebackManagementPages />} /> */}
    
    
    



// //      {/* />
   


// //     <Route path="/contact" element={<ContactPage />} /> */}
// //     </Routes>
// //   )
// // }

// // export default Router

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
// import AdminPosts from "./components/pages/Admin/AdminPosts.jsx";
// import BlogDetail from "./components/pages/Blogs/BlogDetail.jsx";
// import GrowDexBlog from "./components/pages/Blogs/GrowdexBlog.jsx";
// import AdminLogin from "./components/pages/Admin/AdminLoginPage.jsx";
// import AdminDashboard from "./components/pages/Admin/AdminDashboard.jsx";

// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import RedirectIfAuth from "./components/RedirectIfAuth.jsx";

// function Router() {
//   return (
//     <Routes>
//       {/* Public routes */}
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/blog" element={<GrowDexBlog />} />
//       <Route path="/blog/:slug" element={<BlogDetail />} />
//       <Route path="/ad" element={<AdminPosts />} />

//       {/* Auth routes */}
//       <Route
//         path="/admin"
//         element={
//           <RedirectIfAuth>
//             <AdminLogin />
//           </RedirectIfAuth>
//         }
//       />
//       <Route
//         path="/admin/dashboard"
//         element={
//           <ProtectedRoute>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default Router;


import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/Landing Page/HeroPage/index.jsx";
import BlogDetail from "./components/pages/Blogs/BlogDetail.jsx";
import GrowDexBlog from "./components/pages/Blogs/GrowdexBlog.jsx";
import AdminLogin from "./components/pages/Admin/AdminLoginPage.jsx";
import AdminDashboard from "./components/pages/Admin/AdminDashboard.jsx";
// import AdminPosts from "./components/pages/Admin/AdminPosts.jsx";
// import AdminUsers from "./components/pages/Admin/AdminUsers.jsx";
// import AdminCategories from "./components/pages/Admin/AdminCategories.jsx";
// import AdminRoles from "./components/pages/Admin/AdminRoles.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RedirectIfAuth from "./components/RedirectIfAuth.jsx";

function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<GrowDexBlog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      {/* Auth routes */}
      <Route
        path="/admin"
        element={
          <RedirectIfAuth>
            <AdminLogin />
          </RedirectIfAuth>
        }
      />

      {/* Protected admin pages */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/admin/posts"
        element={
          <ProtectedRoute>
            <AdminPosts />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <AdminUsers />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/admin/categories"
        element={
          <ProtectedRoute>
            <AdminCategories />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/admin/roles"
        element={
          <ProtectedRoute>
            <AdminRoles />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default Router;
