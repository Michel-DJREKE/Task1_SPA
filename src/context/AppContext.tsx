import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AppState {
  currentPage: string;
  isMenuOpen: boolean;
  contactFormSubmitted: boolean;
  newsletterSubscribed: boolean;
  selectedPlan: string | null;
  scrollPosition: number;
  isScrolled: boolean;
}

interface AppContextType {
  state: AppState;
  setCurrentPage: (page: string) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  setContactFormSubmitted: (submitted: boolean) => void;
  setNewsletterSubscribed: (subscribed: boolean) => void;
  setSelectedPlan: (plan: string | null) => void;
  scrollToSection: (sectionId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  
  const [state, setState] = useState<AppState>({
    currentPage: 'accueil',
    isMenuOpen: false,
    contactFormSubmitted: false,
    newsletterSubscribed: false,
    selectedPlan: null,
    scrollPosition: 0,
    isScrolled: false,
  });

  
  useEffect(() => {
    const pageMap: Record<string, string> = {
      '/': 'accueil',
      '/a-propos': 'a-propos',
      '/contact': 'contact',
    };
    const currentPage = pageMap[location.pathname] || 'accueil';
    setState(prev => ({ ...prev, currentPage }));
  }, [location.pathname]);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 50;
      setState(prev => ({ ...prev, scrollPosition, isScrolled }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setCurrentPage = useCallback((page: string) => {
    setState(prev => ({ ...prev, currentPage: page }));
  }, []);

  const toggleMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  const closeMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: false }));
  }, []);

  const setContactFormSubmitted = useCallback((submitted: boolean) => {
    setState(prev => ({ ...prev, contactFormSubmitted: submitted }));
  }, []);

  const setNewsletterSubscribed = useCallback((subscribed: boolean) => {
    setState(prev => ({ ...prev, newsletterSubscribed: subscribed }));
  }, []);

  const setSelectedPlan = useCallback((plan: string | null) => {
    setState(prev => ({ ...prev, selectedPlan: plan }));
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        setCurrentPage,
        toggleMenu,
        closeMenu,
        setContactFormSubmitted,
        setNewsletterSubscribed,
        setSelectedPlan,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
