import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, MessageCircleMore } from 'lucide-react';

// --- Optimizations ---
// 1. Moved all static link data into arrays to be mapped over, reducing JSX repetition.
const POLICY_LINKS = [
    { to: "/cancellation-policy", text: "Cancellation & Refund Policy" },
    { to: "/terms-and-conditions", text: "Terms & conditions" },
    { to: "/shipping-policy", text: "Shipping Policy" },
    { to: "/privacy-policy", text: "Privacy Policy" },
];

const QUICK_LINKS = [
    { type: 'scroll', text: "Destinations" },
    { type: 'link', to: "/about-us", text: "About Us" },
    { type: 'link', to: "/enquire", text: "Contact Us" },
    { type: 'link', to: "/testimonials", text: "Testimonials" },
];

const SOCIAL_ICONS = [
    { href: "https://wa.me/919019748508", label: "WhatsApp", icon: <MessageCircleMore className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 text-white" />, className: "bg-green-500 hover:bg-green-600" },
    { href: "https://www.instagram.com/talesbydora/", label: "Instagram", icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 text-white" />, className: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700" },
    { href: "https://www.linkedin.com/company/talesbydora", label: "LinkedIn", icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 text-white" />, className: "bg-blue-700 hover:bg-blue-800" },
];

// 2. Created a small, reusable component for the link lists.
const LinkList = ({ title, links, onScrollClick }: { title: string, links: any[], onScrollClick: (e: any) => void }) => (
    <div>
        <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">{title}</h3>
        <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
            {links.map(link => (
                <li key={link.text}>
                    {link.type === 'scroll' ? (
                        <a href="#" onClick={onScrollClick} className="hover:text-white transition-colors duration-200 block">{link.text}</a>
                    ) : (
                        <Link to={link.to} className="hover:text-white transition-colors duration-200 block">{link.text}</Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const Page10: React.FC = () => {
    // 3. Memoized the scroll handler function.
    const handleScrollTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0 hidden md:block" style={{ backgroundImage: "url('/footer.jpg')", filter: "brightness(1.15) contrast(1.05)" }} />
            <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0 block md:hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559825477-6f38d6332bb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuZGVyd2F0ZXJ8ZW58MHwxfDB8fHwwg')", filter: "brightness(1.15) contrast(1.05)" }} />
            <div className="relative z-10 min-h-screen flex flex-col justify-between text-white">
                <div className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">THE BASE<br />DESTINATION</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl">WE DON'T JUST PLAN TRIPS <br className="hidden sm:block" /><span className="sm:hidden"> </span>WE CRAFT LEGENDARY EXPERIENCES FOR THE ELITE TRAVELER</p>
                </div>
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm p-4 sm:p-6 lg:p-8">
                    <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
                        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden w-full lg:w-[300px] xl:w-[320px]">
                            <img src="/10p1.jpg" alt="The Base Location" className="w-full h-32 sm:h-36 lg:h-40 object-cover" />
                            <div className="p-3 sm:p-4 bg-white text-black">
                                <h3 className="font-bold text-base sm:text-lg mb-1">The Base Location</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Assotech Business Cresterra,<br />Sec-135, Noida - 201301, India</p>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base text-gray-300">
                            <div className="order-1 sm:order-1"><LinkList title="Our Policies" links={POLICY_LINKS} onScrollClick={handleScrollTop} /></div>
                            <div className="order-2 sm:order-2"><LinkList title="Quick Links" links={QUICK_LINKS} onScrollClick={handleScrollTop} /></div>
                            <div className="order-3 sm:order-3 sm:col-span-2 lg:col-span-1">
                                <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <div>
                                        <p className="mb-1 text-xs sm:text-sm">Email</p>
                                        <a href="mailto:info@talesbydora.com" className="text-white block hover:text-gray-200 transition-colors duration-200">info@talesbydora.com</a>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-xs sm:text-sm">WhatsApp</p>
                                        <a href="https://wa.me/919019748508" target="_blank" rel="noopener noreferrer" className="text-white block mb-1 hover:text-gray-200 transition-colors duration-200">+91 9019748508</a>
                                        <a href="https://wa.me/918001888847" target="_blank" rel="noopener noreferrer" className="text-white block hover:text-gray-200 transition-colors duration-200">+91 8001888847</a>
                                    </div>
                                </div>
                                <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                                    {SOCIAL_ICONS.map(social => (
                                        <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-8 lg:h-8 rounded flex items-center justify-center transition-all duration-200 ${social.className}`} aria-label={social.label}>
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-300 text-xs sm:text-sm mt-6 sm:mt-8 border-t border-white/20 pt-3 sm:pt-4">
                        <p className="px-2">© 2024 Tales By Dora. All rights reserved. | Crafting extraordinary luxury experiences since inception.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. Wrapped component in React.memo for performance.
export default React.memo(Page10);