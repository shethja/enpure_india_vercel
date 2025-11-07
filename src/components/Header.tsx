import React, { useState } from 'react';
import enpureLogo from '../assets/enpureLogo.png';
//import enpureWhiteLogo from '../assets/ENPURE WHITE LOGO_1 (1).png';
import dihydroLogo from '../assets/dihydroLogo(2).png';
//import combinedLogo from '../assets/combineLogo-Photoroom.png';
//import dihydroLogoBlue from '../assets/dihydroLogoBlue.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      {/* Spacer to prevent content from hiding behind floating nav */}
      <div className="h-20"></div>

      {/* Floating Navigation Bar */}
      {/*<header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] md:w-[90%] lg:max-w-6xl transition-all duration-300 px-2 sm:px-4">*/}
      {/*<header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        w-[95%] md:w-[92%] lg:w-[94%] xl:max-w-6xl px-2 sm:px-4 transition-all duration-300">*/}
      <header
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50
             w-[97%] sm:w-[95%] md:w-[93%] lg:w-[96%] xl:max-w-6xl
             px-2 sm:px-3 md:px-4 transition-all duration-300"
      >
 
        <div className="bg-gradient-to-r from-gray-800/70 to-gray-700/40 
          backdrop-blur-[8px] border border-white/20 
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_32px_rgba(0,0,0,0.25)] 
          rounded-full">

          {/*<div className="flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-6">*/}
          {/*<div className="flex items-center justify-between h-16 px-4 lg:px-5 xl:px-6">*/}
          <div className="flex items-center justify-between h-16 px-3 md:px-4 lg:px-5 xl:px-6">

            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-1 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                <img
                  src={dihydroLogo}
                  alt="DiHydro-logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block w-px h-6 sm:h-8 bg-gray-300 mx-2" />
              <div className="w-24 sm:w-28 md:w-32 lg:w-36">
                <img
                  src={enpureLogo}
                  alt="Enpure-logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <NavButton to="/" label="Home" active={location.pathname === '/'} />
              <NavButton to="/products" label="Products" active={location.pathname === '/products'} />
              <NavButton to="/installation" label="Installation" active={location.pathname === '/installation'} />
              <NavButton to="/blogs" label="Blogs" active={location.pathname === '/blogs'} />
              <NavButton to="/about" label="About" active={location.pathname === '/about'} />
              <NavButton to="/contact" label="Contact" active={location.pathname === '/contact'} />
              <NavButton to="/testimonials" label="Reviews" active={location.pathname === '/testimonials'} />
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              
              {/* Cart Button */}
              <div className="relative">
                <Link to="/cart">
                  <ActionButton className="relative modern-button glass-card">
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  </ActionButton>
                </Link>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium shadow-lg">
                    {getTotalItems()}
                  </span>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <ActionButton
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 modern-button glass-card"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  {isAuthenticated && (
                    <span className="hidden md:inline text-xs sm:text-sm font-medium truncate max-w-[80px] text-ellipsis">
                      {user?.name}
                    </span>
                  )}
                </ActionButton>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-3 w-48 sm:w-56 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-600/30 py-2 z-50">
                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-3 border-b border-slate-600/30">
                          <p className="text-sm font-semibold text-white">{user?.name}</p>
                          <p className="text-xs text-slate-300 truncate">{user?.email}</p>
                        </div>
                        <DropdownItem to="/profile" onClick={() => setIsUserMenuOpen(false)}>
                          Profile
                        </DropdownItem>
                        <DropdownItem to="/orders" onClick={() => setIsUserMenuOpen(false)}>
                          My Orders
                        </DropdownItem>
                        <button
                          onClick={handleLogout}
                          className="block w-auto text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700/50 transition-colors duration-200 rounded-full mx-2"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <DropdownItem to="/login" onClick={() => setIsUserMenuOpen(false)}>
                          Login
                        </DropdownItem>
                        <DropdownItem to="/register" onClick={() => setIsUserMenuOpen(false)}>
                          Register
                        </DropdownItem>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <ActionButton
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </ActionButton>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gradient-to-r from-gray-900/90 to-gray-700/80 
              backdrop-blur-3xl text-white rounded-3xl shadow-lg flex flex-col 
              items-center py-6 px-6 space-y-4 sm:space-y-5 transition-all duration-300 z-40">
              <nav className="flex flex-col space-y-3 text-center w-full">
                {[
                  { label: "Home", to: "/" },
                  { label: "Products", to: "/products" },
                  { label: "Installation", to: "/installation" },
                  { label: "Blogs", to: "/blogs" },
                  { label: "About", to: "/about" },
                  { label: "Contact", to: "/contact" },
                  { label: "Reviews", to: "/testimonials" },
                ].map((item) => (
                  <MobileNavButton
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    active={location.pathname === item.to}
                  >
                    {item.label}
                  </MobileNavButton>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

    </>
  );
};

// Navigation Button Component for Desktop
const NavButton: React.FC<{ to: string; label: string; active?: boolean }> = ({ to, label, active = false }) => (
  <Link
    to={to}
    className={`nav-link relative px-6 py-2 text-sm font-light text-white hover:text-blue-200 transition-all duration-300 ${active ? 'active' : ''}`}
  >
    {label}
  </Link>
);

// Action Button Component (Search, Cart, User)
const ActionButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 rounded-full bg-slate-700/50 hover:bg-slate-600/70 text-white transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg border border-slate-500/30 hover:border-blue-400/50 ${className}`}
  >
    {children}
  </button>
);

// Dropdown Item Component
const DropdownItem: React.FC<{
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700/50 transition-colors duration-200 rounded-full mx-2"
  >
    {children}
  </Link>
);

// Mobile Navigation Button Component
const MobileNavButton: React.FC<{
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean;
}> = ({ to, onClick, children, active = false }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`relative block px-4 py-3 text-white hover:text-blue-200 rounded-full transition-all duration-300 font-light group ${active ? 'mobile-active' : ''}`}
  >
    <span className="relative z-10">{children}</span>
    <div className={`absolute bottom-1 left-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 rounded-full ${active ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}></div>
  </Link>
);

export default Header;