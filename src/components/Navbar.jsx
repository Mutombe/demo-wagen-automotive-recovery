import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List,
  X,
  CaretDown,
  HardHat,
  Phone,
  WhatsappLogo,
  MagnifyingGlass,
  Envelope,
  Clock,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
} from '@phosphor-icons/react';
import siteData from '../data/siteData';

/* ── Brand Colors ── */
const BRAND = {
  primary: '#000000',
  primaryLight: '#1a1a1a',
  primaryMid: '#111111',
  accent: '#DC2626',
  accentHover: '#B91C1C',
  accentLight: '#FCA5A5',
  accentSubtle: '#DC2626',
  ctaText: '#FFFFFF',
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Our Work',
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
    ],
  },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const socialIconMap = {
  facebook: FacebookLogo,
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
};

function UtilityBar({ business, visible }) {
  const socials = business.socialLinks || {};
  const hasSocials = Object.values(socials).some((v) => v && v !== '#');
  const firstHours = business.hours?.[0];

  return (
    <motion.div
      initial={false}
      animate={{
        height: visible ? 'auto' : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden border-b border-white/5 relative z-[1]"
      style={{ backgroundColor: BRAND.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 text-white/60 text-xs">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            {business.phone && (
              <a
                href={`tel:${business.phoneRaw || business.phone}`}
                className="flex items-center gap-1.5 transition-colors shrink-0"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = BRAND.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <Phone size={12} weight="bold" />
                <span className="text-[10px] sm:text-xs">{business.phone}</span>
              </a>
            )}
            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="hidden sm:flex items-center gap-1.5 transition-colors min-w-0"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = BRAND.accent}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <Envelope size={12} weight="bold" className="shrink-0" />
                <span className="truncate">{business.email}</span>
              </a>
            )}
            {firstHours && (
              <span className="hidden lg:flex items-center gap-1.5">
                <Clock size={12} weight="bold" className="shrink-0" />
                <span>
                  {firstHours.day}: {firstHours.time}
                </span>
              </span>
            )}
          </div>

          {(
            <div className="flex items-center gap-2">
              {Object.entries(socials).map(([platform, url]) => {
                if (!url || url === '#') return null;
                const Icon = socialIconMap[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = BRAND.accent}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    aria-label={platform}
                  >
                    <Icon size={14} weight="bold" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
        active ? '' : 'text-white/80 hover:text-white'
      }`}
      style={active ? { color: BRAND.accent } : undefined}
    >
      {children}
      <span
        className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-none transition-transform duration-300 origin-left ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
        style={{ backgroundColor: BRAND.accent }}
      />
    </Link>
  );
}

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 * i, duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  }),
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

function Navbar({ onSearchOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const { business, navbar } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const flatLinks = [];
  navLinks.forEach((link) => {
    if (link.children) {
      flatLinks.push({ type: 'parent', ...link });
      link.children.forEach((child) => flatLinks.push({ type: 'child', ...child }));
    } else {
      flatLinks.push({ type: 'link', ...link });
    }
  });

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 z-50"
      style={{ top: 'var(--banner-height, 0px)' }}
    >
      <UtilityBar business={business} visible={!isScrolled} />

      <nav
        className={`transition-all duration-500 border-b ${
          isScrolled
            ? 'backdrop-blur-2xl shadow-2xl shadow-black/20'
            : 'backdrop-blur-sm border-white/0'
        }`}
        style={{
          backgroundColor: isScrolled
            ? BRAND.primary + 'e6'
            : BRAND.primary + '4d',
          borderBottomColor: isScrolled ? BRAND.accent + '33' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              {navbar.logoImage ? (
                <img
                  src={navbar.logoImage}
                  alt={navbar.logoLine1}
                  className={`h-9 sm:h-10 lg:h-11 w-auto object-contain ${
                    navbar.logoBrightness === 'invert' ? 'brightness-0 invert' : ''
                  }`}
                  loading="eager"
                />
              ) : (
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-none flex items-center justify-center transition-colors shadow-lg"
                  style={{ backgroundColor: BRAND.accent, boxShadow: `0 4px 14px ${BRAND.accent}33` }}
                >
                  <HardHat size={20} weight="fill" className="sm:hidden" style={{ color: BRAND.ctaText }} />
                  <HardHat size={22} weight="fill" className="hidden sm:block lg:hidden" style={{ color: BRAND.ctaText }} />
                  <HardHat size={24} weight="fill" className="hidden lg:block" style={{ color: BRAND.ctaText }} />
                </div>
              )}
              {(!navbar.logoImage || navbar.showLogoText) && (
                <div className="min-w-0">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight block leading-tight truncate max-w-[140px] sm:max-w-[200px] lg:max-w-none">
                    {navbar.logoLine1}
                  </span>
                  <span
                    className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium leading-tight block truncate max-w-[140px] sm:max-w-[200px] lg:max-w-none"
                    style={{ color: BRAND.accent }}
                  >
                    {navbar.logoLine2}
                  </span>
                </div>
              )}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(link.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors group ${
                        link.children.some((c) => isActive(c.path))
                          ? ''
                          : 'text-white/80 hover:text-white'
                      }`}
                      style={link.children.some((c) => isActive(c.path)) ? { color: BRAND.accent } : undefined}
                    >
                      {link.name}
                      <CaretDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen === link.name ? 'rotate-180' : ''
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-none transition-transform duration-300 origin-left ${
                          link.children.some((c) => isActive(c.path))
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        style={{ backgroundColor: BRAND.accent }}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full left-0 mt-2 w-52 backdrop-blur-2xl rounded-none border border-white/10 shadow-2xl shadow-black/30 overflow-hidden"
                          style={{ backgroundColor: BRAND.primaryLight + 'f2' }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`flex items-center gap-3 px-5 py-3.5 text-sm transition-all border-l-2 ${
                                isActive(child.path)
                                  ? ''
                                  : 'text-white/70 hover:text-white hover:bg-white/5 border-transparent'
                              }`}
                              style={isActive(child.path) ? {
                                color: BRAND.accent,
                                backgroundColor: BRAND.accent + '1a',
                                borderLeftColor: BRAND.accent,
                              } : undefined}
                              onMouseEnter={(e) => {
                                if (!isActive(child.path)) e.currentTarget.style.borderLeftColor = BRAND.accent + '66';
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive(child.path)) e.currentTarget.style.borderLeftColor = 'transparent';
                              }}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={link.path} to={link.path} active={isActive(link.path)}>
                    {link.name}
                  </NavLink>
                )
              )}
            </div>

            {/* CTA + Search + Phone + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onSearchOpen}
                className="text-white/60 hover:text-white p-2 rounded-none hover:bg-white/5 transition-colors"
                aria-label="Search"
              >
                <MagnifyingGlass size={18} className="sm:hidden" />
                <MagnifyingGlass size={20} className="hidden sm:block" />
              </button>

              <a
                href={`tel:${business.phoneRaw || business.phone}`}
                className="hidden xl:flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} weight="bold" />
                <span>{business.phone}</span>
              </a>

              <div className="hidden xl:block w-px h-5 bg-white/10" />

              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-5 lg:px-6 py-2 lg:py-2.5 rounded-none font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 hover:-translate-y-px active:translate-y-0"
                style={{
                  backgroundColor: BRAND.accent,
                  color: BRAND.ctaText,
                  boxShadow: `0 4px 14px ${BRAND.accent}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND.accentHover;
                  e.currentTarget.style.boxShadow = `0 8px 20px ${BRAND.accent}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND.accent;
                  e.currentTarget.style.boxShadow = `0 4px 14px ${BRAND.accent}40`;
                }}
              >
                Get Free Quote
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-1.5 relative z-[60]"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      <X size={24} weight="bold" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      <List size={24} weight="bold" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50 backdrop-blur-2xl"
            style={{
              top: 'var(--banner-height, 0px)',
              backgroundColor: BRAND.primary + 'fa',
            }}
          >
            <div className="flex flex-col justify-between h-full pt-24 pb-8 px-6 overflow-y-auto">
              <div className="space-y-1">
                <motion.button
                  custom={0}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => {
                    setMobileOpen(false);
                    onSearchOpen?.();
                  }}
                  className="flex items-center gap-4 w-full text-white/40 px-2 py-3 rounded-none hover:bg-white/5 mb-4"
                >
                  <MagnifyingGlass size={20} />
                  <span className="text-base">Search...</span>
                  <kbd className="ml-auto text-xs text-white/20 bg-white/5 px-2 py-1 rounded-none font-mono">
                    Ctrl+K
                  </kbd>
                </motion.button>

                {navLinks.map((link, idx) =>
                  link.children ? (
                    <div key={link.name}>
                      <motion.button
                        custom={idx + 1}
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() =>
                          setDropdownOpen(dropdownOpen === link.name ? null : link.name)
                        }
                        className={`flex items-center justify-between w-full px-2 py-4 text-2xl font-semibold tracking-tight transition-colors ${
                          link.children.some((c) => isActive(c.path))
                            ? ''
                            : 'text-white/90'
                        }`}
                        style={link.children.some((c) => isActive(c.path)) ? { color: BRAND.accent } : undefined}
                      >
                        {link.name}
                        <CaretDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            dropdownOpen === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {dropdownOpen === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 ml-2"
                            style={{ borderLeft: `2px solid ${BRAND.accent}4d` }}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={`block px-4 py-3 text-lg font-medium transition-colors ${
                                  isActive(child.path)
                                    ? ''
                                    : 'text-white/60 hover:text-white'
                                }`}
                                style={isActive(child.path) ? { color: BRAND.accent } : undefined}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={link.path}
                      custom={idx + 1}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        to={link.path}
                        className={`block px-2 py-4 text-2xl font-semibold tracking-tight transition-colors ${
                          isActive(link.path)
                            ? ''
                            : 'text-white/90 hover:text-white'
                        }`}
                        style={isActive(link.path) ? { color: BRAND.accent } : undefined}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* Bottom CTA section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="space-y-4 pt-6 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-none font-bold text-lg tracking-wide transition-all"
                  style={{ backgroundColor: BRAND.accent, color: BRAND.ctaText }}
                >
                  Get Free Quote
                </Link>

                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/${business.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600/90 hover:bg-green-500 text-white py-3.5 rounded-none text-sm font-semibold transition-colors"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${business.phoneRaw || business.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-3.5 rounded-none text-sm font-semibold transition-colors"
                  >
                    <Phone size={20} weight="bold" />
                    Call Us
                  </a>
                </div>

                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center justify-center gap-2 text-white/40 text-sm hover:text-white/60 transition-colors pt-2"
                  >
                    <Envelope size={14} />
                    {business.email}
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
