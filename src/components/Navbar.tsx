import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={styles.header}>
      <div 
        className={`${styles.headerContainer} 
                  ${isScrolled ? styles.scrolled : ''} 
                  ${isDarkMode ? styles.headerContainerDark : ''} 
                  ${isDarkMode && isScrolled ? styles.scrolledDark : ''} 
                  ${isDarkMode ? styles.darkMode : ''}`}
      >
        <div className={styles.navbarLogo}>EchoGPT</div>
        
        <div className={styles.navbarLinks}>
          <Link href="/" className={styles.navbarLink}>
            Home
          </Link>
          <Link href="/features" className={styles.navbarLink}>
            Features
          </Link>
          <Link href="/signin" className={styles.navbarLink}>
            Sign In
          </Link>
          <Link href="/signup" className={styles.navbarLink}>
            Sign Up
          </Link>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
        
        <button className={styles.mobileMenuBtn} onClick={toggleMobileNav}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileNavOpen ? styles.mobileNavActive : ''} ${isDarkMode ? styles.darkMode : ''}`}>
        <button className={styles.mobileNavClose} onClick={toggleMobileNav}>
          ✕
        </button>
        <div className={styles.mobileNavLinks}>
          <Link href="/" onClick={toggleMobileNav}>Home</Link>
          <Link href="/features" onClick={toggleMobileNav}>Features</Link>
          <Link href="/signin" onClick={toggleMobileNav}>Sign In</Link>
          <Link href="/signup" onClick={toggleMobileNav}>Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;