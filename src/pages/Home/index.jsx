import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Process from '../../components/Process';
import Products from '../../components/Products';
import About from '../../components/About';
import FAQ from '../../components/FAQ';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import ContactModal from '../../components/ContactModal';

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const openContactModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
        closeMobileMenu();
    };

    const closeContactModal = () => setIsModalOpen(false);

    return (
        <div className="relative overflow-hidden">
            <div className="bg-grid"></div>
            <div
                className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-noda-primary/20 blur-[120px] mix-blend-screen -z-10 pointer-events-none animate-blob">
            </div>
            <div
                className="fixed top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-noda-cyan/10 blur-[100px] mix-blend-screen -z-10 pointer-events-none animate-blob animation-delay-2000">
            </div>

            <Navbar
                isScrolled={isScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                openContactModal={openContactModal}
            />

            <Hero openContactModal={openContactModal} />
            <Services />
            <Process />
            <Products />
            <About />
            <FAQ />
            <Portfolio />
            <Contact />
            <Footer />

            <ContactModal
                isModalOpen={isModalOpen}
                closeContactModal={closeContactModal}
            />
        </div>
    );
}
