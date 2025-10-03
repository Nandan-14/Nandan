import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";



import Home from "./pages/Home";
import Services from "./pages/Services";
import Activity from "./pages/Activity";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Courier from "./pages/Courier";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import UpiPaymentPage from "./pages/UpiPaymentPage";
import Book from "./pages/Book";


import AuthProvider from "./pages/AuthContext";
import ProtectRoute from "./pages/ProtectRoute";
import "./App.css";
import ConfirmRide1 from "./pages/ConfirmRide1";
import Cab from "./pages/cab";
import Bike from "./pages/Bike";
import Auto from "./pages/Auto";
import Rental from "./pages/Rental";
import ConfirmRide from "./components/ConfirmRide";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Logout" element={<Login />}/>
            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route
              path="/account"
              element={
                <ProtectRoute>
                  <Account />
                </ProtectRoute>
              }
            />
           <Route
              path="/Book"
              element={
                <ProtectRoute>
                  < Book/>
                </ProtectRoute>
              }
              />
            <Route
              path="/courier"
              element={
                <ProtectRoute>
                  <Courier />
                </ProtectRoute>
              }
            />
            <Route
              path="/upiPaymentPage"
              element={
                <ProtectRoute>
                  <UpiPaymentPage />
                </ProtectRoute>
              }
            />
           
            <Route
              path="/ConfirmRide1"
              element={
                <ProtectRoute>
                  <ConfirmRide1 />
                </ProtectRoute>
              }
            />

             <Route
             path="/Settings"
             element={
              <ProtectRoute>
                <Settings />
              </ProtectRoute>
             }
             />
            <Route
            path="/Cab"
            element={
              <ProtectRoute>
                <Cab />
              </ProtectRoute>
            }
            />
            <Route
            path="/Bike"
            element={
              <ProtectRoute>
                <Bike />
              </ProtectRoute>
            }
            />
            <Route
            path="/Auto"
            element={
              <ProtectRoute>
                <Auto />
              </ProtectRoute>
            }
            />
            <Route
            path="Rental"
            element={
              <ProtectRoute>
                <Rental/>
              </ProtectRoute>
            }
            />
          <Route
          path="ConfirmRide"
          element={
            <ProtectRoute>
              <ConfirmRide />
            </ProtectRoute>
          }
          />
          <Route 
          path="Logout"
          element={
            <ProtectRoute>
              <Logout />
            </ProtectRoute>
          }
          />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
