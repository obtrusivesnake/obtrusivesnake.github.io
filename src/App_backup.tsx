import { useState } from "react";
import {
    DoorOpen,
    Users,
    Moon,
    DollarSign,
    Repeat,
    CalendarDays,
    GraduationCap,
    Sparkles,
    Gift,
    ArrowRight,
} from "lucide-react";

/* -------------------------------------------------- */
/*  Utility Components                                 */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/*  App                                                */
/* -------------------------------------------------- */

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .font-body    { font-family: 'Inter', system-ui, sans-serif; }

        .text-highlight {
          background-color: rgba(12, 10, 9, 0.82);
          padding: 0.08em 0.45em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .text-highlight-sm {
          background-color: rgba(12, 10, 9, 0.68);
          padding: 0.15em 0.55em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
      `}</style>

            <div className="min-h-screen bg-stone-950 text-stone-300 antialiased font-body">
                {/* ============================================= */}
                {/* NAVIGATION                                    */}
                {/* ============================================= */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-xl border-b border-white/[0.06]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo lock-up */}
                            <a href="#" className="flex items-center gap-3">
                                <img
                                    src="/fatcat.png"
                                    className="w-10 h-10"
                                    alt="Fatcat Ballroom"
                                />
                                <div className="hidden sm:block leading-tight">
                                    <span className="font-display text-white text-sm font-medium tracking-wide">
                                        Fatcat Ballroom
                                    </span>
                                    <span className="block text-stone-500 text-[10px] uppercase tracking-[0.25em] mt-0.5">
                                        &amp; Dance Company
                                    </span>
                                </div>
                            </a>

                            {/* Desktop nav links */}
                            <div className="hidden md:flex items-center gap-8">
                                {[
                                    { label: "Calendar", href: "#calendar " },
                                    { label: "Classes", href: "#classes" },
                                    {
                                        label: "Private Lessons",
                                        href: "#private-lessons",
                                    },
                                    { label: "Events", href: "#community" },
                                    { label: "About", href: "#about" },
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-[13px] text-stone-400 hover:text-white transition-colors duration-300 tracking-widest uppercase"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            {/* Desktop CTAs */}
                            <div className="hidden md:flex items-center gap-6">
                                <a
                                    href="tel:6023247119"
                                    className="text-sm text-stone-500 hover:text-white transition-colors"
                                >
                                    (602) 324-7119
                                </a>
                                <a
                                    href="#book"
                                    className="text-[13px] font-semibold tracking-wide px-6 py-2.5 rounded bg-[#c9a96e] hover:bg-[#d4b87d] text-stone-950 transition-colors"
                                >
                                    Book Online
                                </a>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                className="md:hidden p-2 -mr-2 text-stone-400 hover:text-white transition"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile dropdown */}
                    {menuOpen && (
                        <div className="md:hidden bg-stone-900 border-t border-white/[0.06] px-6 pb-6 pt-4 space-y-1">
                            {[
                                { label: "Classes", href: "#classes" },
                                {
                                    label: "Private Lessons",
                                    href: "#private-lessons",
                                },
                                { label: "Events", href: "#community" },
                                { label: "About", href: "#about" },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="block text-stone-300 hover:text-white py-3 text-base tracking-wide"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <hr className="border-white/[0.06] !my-4" />
                            <a
                                href="tel:6023247119"
                                className="block text-stone-400 py-3 text-base"
                            >
                                (602) 324-7119
                            </a>
                            <a
                                href="#book"
                                className="block text-center font-semibold py-3.5 rounded tracking-wide mt-2 bg-[#c9a96e] text-stone-950"
                                onClick={() => setMenuOpen(false)}
                            >
                                Book Online
                            </a>
                        </div>
                    )}
                </nav>

                {/* ============================================= */}
                {/* HERO                                          */}
                {/* ============================================= */}
                <section className="relative min-h-screen flex items-center justify-center">
                    <img
                        src="/hero.jpg"
                        alt="Ballroom hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto pt-20">
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-normal mb-8">
                            <span className="text-highlight">
                                Learn any kind of partner dance, no matter your
                                skill level.
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto tracking-wide">
                            <span className="text-highlight-sm">
                                Phoenix's home for social dancing for over 17
                                years
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#book"
                                className="w-full sm:w-auto bg-[#c9a96e] hover:bg-[#d4b87d] text-stone-950 font-semibold text-base px-10 py-4 rounded transition-colors tracking-wide"
                            >
                                Book Online
                            </a>
                            <a
                                href="tel:6023247119"
                                className="w-full sm:w-auto border border-white/25 bg-stone-950/50 backdrop-blur-sm hover:bg-stone-950/70 text-white font-medium text-base px-10 py-4 rounded transition-all tracking-wide"
                            >
                                Call (602) 324-7119
                            </a>
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                        <svg
                            className="w-5 h-5 text-white/30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                </section>

                {/* ============================================= */}
                {/* TRUST STRIP                                   */}
                {/* ============================================= */}
                <section className="border-y border-white/[0.06]">
                    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
                        {[
                            {
                                icon: DoorOpen,
                                title: "Walk in anytime",
                                desc: "No signup or registration required to enjoy our lessons",
                            },
                            {
                                icon: Users,
                                title: "No partner needed",
                                desc: "Everyone rotates partners in class, so you'll never be left alone",
                            },
                            {
                                icon: Moon,
                                title: "Classes every night",
                                desc: "For everyone, from beginners to professionals",
                            },
                            {
                                icon: DollarSign,
                                title: "Affordable pricing",
                                desc: "Our group classes are either $10 or $15",
                            },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <item.icon
                                    className="w-7 h-7 mx-auto mb-3 text-[#c9a96e]"
                                    strokeWidth={1.5}
                                />
                                <div className="text-white text-sm sm:text-base font-medium tracking-wide">
                                    {item.title}
                                </div>
                                <div className="text-stone-500 text-xs sm:text-sm mt-1.5">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============================================= */}
                {/* WELCOME BLURB                                 */}
                {/* ============================================= */}
                <section className="py-20 sm:py-28 px-4" id="about">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-8" />
                        <h2 className="font-display text-3xl sm:text-4xl text-white mb-8 font-normal leading-snug">
                            Welcome to Fatcat Ballroom &amp; Dance Company
                        </h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            We're an inclusive, community-centered dance studio
                            that offers group dancing, private lessons, and
                            social events every day, all week, every week.
                            Founded 17 years ago by Terry Schmoyer, three-time
                            Argentine Tango World Champion, we offer a wide
                            variety of dance lessons taught by professional
                            instructors. Walk in tonight and start dancing, no
                            experience or registration required.
                        </p>
                    </div>
                </section>

                {/* ============================================= */}
                {/* SECTION: No Partner? No Problem.              */}
                {/* ============================================= */}
                <section
                    className="py-20 md:py-28 bg-stone-900/50"
                    id="classes"
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/npnp.jpg"
                                    alt="Dancing partners"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <Repeat
                                    className="w-12 h-12 text-[#c9a96e] mb-5"
                                    strokeWidth={1}
                                />
                                <h2 className="font-display text-3xl sm:text-4xl text-white mb-5 font-normal leading-snug">
                                    No Partner? No Problem.
                                </h2>
                                <p className="text-stone-400 text-lg leading-relaxed mb-6">
                                    The most common question we get is "What if
                                    I don't have a dance partner?" In our group
                                    classes, everyone rotates partners
                                    throughout the lesson. You'll get to dance
                                    with multiple people, and you won't ever be
                                    left out. Whether you show up in a pair or
                                    by yourself, you'll be dancing in no time.
                                </p>
                                <a
                                    href="#schedule"
                                    className="inline-flex items-center text-[#c9a96e] hover:text-[#d4b87d] font-medium text-base transition-colors group tracking-wide"
                                >
                                    View tonight's classes
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* SECTION: Walk Right In                        */}
                {/* ============================================= */}
                <section className="py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/classes.jpg"
                                    alt="Dance classes"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <CalendarDays
                                    className="w-12 h-12 text-[#c9a96e] mb-5"
                                    strokeWidth={1}
                                />
                                <h2 className="font-display text-3xl sm:text-4xl text-white mb-5 font-normal leading-snug">
                                    Classes every night, no registration
                                    required
                                </h2>
                                <p className="text-stone-400 text-lg leading-relaxed mb-6">
                                    At Fatcat, we don't lock you into long-term
                                    commitments. Simply check tonight's schedule
                                    and walk right in. We offer classes in
                                    Salsa, Bachata, West Coast and East Coast
                                    Swing, Argentine Tango, American and
                                    International Ballroom, Line Dancing, and
                                    Arizona Two-Step. Our classes are for
                                    everyone, whether you're a complete beginner
                                    or an experienced dancer.
                                </p>
                                <a
                                    href="#schedule"
                                    className="inline-flex items-center text-[#c9a96e] hover:text-[#d4b87d] font-medium text-base transition-colors group tracking-wide"
                                >
                                    See full schedule
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* SECTION: Private Lessons                      */}
                {/* ============================================= */}
                <section
                    className="py-20 md:py-28 bg-stone-900/50"
                    id="private-lessons"
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/private.jpg"
                                    alt="Private dance lesson"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <GraduationCap
                                    className="w-12 h-12 text-[#c9a96e] mb-5"
                                    strokeWidth={1}
                                />
                                <h2 className="font-display text-3xl sm:text-4xl text-white mb-5 font-normal leading-snug">
                                    Private lessons for singles or couples
                                </h2>
                                <p className="text-stone-400 text-lg leading-relaxed mb-4">
                                    Whether you're preparing for a wedding
                                    dance, training for a big competition, or
                                    simply want to benefit from one-on-one time
                                    with our expert instructors, our private
                                    lessons will help you become the dancer you
                                    most want to be.
                                </p>
                                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                                    We'll match you with the right instructor
                                    for your goals, from Latin styles like
                                    Bachata and Salsa to classic Ballroom and
                                    everything in between.
                                </p>
                                <a
                                    href="#book"
                                    className="inline-flex items-center bg-[#c9a96e] hover:bg-[#d4b87d] text-stone-950 font-semibold px-7 py-3.5 rounded transition-colors tracking-wide"
                                >
                                    Book a Private Lesson
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* SECTION: What to Expect                       */}
                {/* ============================================= */}
                <section className="py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/firstnight.jpg"
                                    alt="First night"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <Sparkles
                                    className="w-12 h-12 text-[#c9a96e] mb-5"
                                    strokeWidth={1}
                                />
                                <h2 className="font-display text-3xl sm:text-4xl text-white mb-6 font-normal leading-snug">
                                    What happens on my first night?
                                </h2>
                                <p className="text-stone-400 text-lg leading-relaxed mb-6">
                                    It's only natural to be nervous your first
                                    time dancing. Simply wear comfortable
                                    clothing and shoes; you don't need a special
                                    outfit. Show up a few minutes before your
                                    lesson starts, so our warm and friendly
                                    front desk team can help get you taken care
                                    of. You'll join the group, and the
                                    instructor will guide everyone through the
                                    lesson. You'll rotate partners with everyone
                                    in the group, so you'll never sit on the
                                    sidelines. Afterwards, it's optional open
                                    social dancing, where you can join your new
                                    friends as you laugh and enjoy each other's
                                    conversation on the dance floor.
                                </p>
                                <a
                                    href="tel:6023247119"
                                    className="inline-flex items-center text-[#c9a96e] hover:text-[#d4b87d] font-medium text-base transition-colors group tracking-wide"
                                >
                                    Questions? Call (602) 324-7119
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* GIFT CERTIFICATE                              */}
                {/* ============================================= */}
                <section className="py-16 sm:py-20 border-y border-white/[0.06]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
                        <div className="flex items-center gap-5 flex-col sm:flex-row">
                            <Gift
                                className="w-8 h-8 text-[#c9a96e] flex-shrink-0"
                                strokeWidth={1.5}
                            />
                            <div>
                                <h3 className="font-display text-2xl text-white mb-1 font-normal">
                                    Give the gift of dance
                                </h3>
                                <p className="text-stone-500">
                                    Perfect for weddings, birthdays,
                                    anniversaries, and holidays.
                                </p>
                            </div>
                        </div>
                        <a
                            href="#gift"
                            className="flex-shrink-0 font-semibold px-7 py-3.5 rounded border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-stone-950 transition-colors tracking-wide"
                        >
                            Buy a Gift Certificate
                        </a>
                    </div>
                </section>

                {/* ============================================= */}
                {/* FOOTER                                        */}
                {/* ============================================= */}
                <footer className="pt-20 pb-32 md:pb-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Col 1: Brand */}
                            <div className="sm:col-span-2 lg:col-span-1">
                                <div className="mb-4">
                                    <span className="font-display text-white text-lg font-medium">
                                        Fatcat Ballroom
                                    </span>
                                    <span className="block text-stone-600 text-[10px] uppercase tracking-[0.25em] mt-1">
                                        &amp; Dance Company
                                    </span>
                                </div>
                                <p className="text-sm leading-relaxed text-stone-500 mb-5">
                                    Phoenix's home for social dancing for over
                                    17 years
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-stone-600 hover:text-white transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-stone-600 hover:text-white transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Col 2: Location */}
                            <div>
                                <h5 className="text-stone-400 font-medium mb-4 text-xs uppercase tracking-[0.2em]">
                                    Location
                                </h5>
                                <p className="text-sm leading-relaxed text-stone-400 mb-2">
                                    3131 E Thunderbird Road #33
                                    <br />
                                    Phoenix, Arizona 85032
                                </p>
                                <p className="text-xs text-stone-600 leading-relaxed">
                                    SW corner of 32nd St &amp; Thunderbird Rd,
                                    between Dollar Tree and VASA Fitness
                                </p>
                                <a
                                    href="https://maps.google.com/?q=3131+E+Thunderbird+Road+33+Phoenix+AZ+85032"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-[#c9a96e] hover:text-[#d4b87d] text-sm transition-colors"
                                >
                                    Get directions →
                                </a>
                            </div>

                            {/* Col 3: Hours */}
                            <div>
                                <h5 className="text-stone-400 font-medium mb-4 text-xs uppercase tracking-[0.2em]">
                                    Hours
                                </h5>
                                <div className="text-sm space-y-2">
                                    <div className="flex justify-between gap-4">
                                        <span className="text-stone-400">
                                            Sunday
                                        </span>
                                        <span className="text-stone-600">
                                            9 am – 9 pm
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-stone-400">
                                            Mon – Thu
                                        </span>
                                        <span className="text-stone-600">
                                            9 am – 10 pm
                                        </span>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <span className="text-stone-400">
                                            Fri – Sat
                                        </span>
                                        <span className="text-stone-600">
                                            9 am – 11 pm
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Col 4: Links */}
                            <div>
                                <h5 className="text-stone-400 font-medium mb-4 text-xs uppercase tracking-[0.2em]">
                                    Quick Links
                                </h5>
                                <ul className="space-y-2.5 text-sm">
                                    {[
                                        "Class Schedule",
                                        "Private Lessons",
                                        "Gift Certificates",
                                        "FAQ",
                                        "About Us",
                                        "Dance Etiquette",
                                    ].map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-stone-500 hover:text-white transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-stone-500">
                                <a
                                    href="tel:6023247119"
                                    className="hover:text-white transition-colors"
                                >
                                    (602) 324-7119
                                </a>
                                <span className="hidden sm:inline text-stone-800">
                                    ·
                                </span>
                                <a
                                    href="mailto:hello@fatcatballroom.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hello@fatcatballroom.com
                                </a>
                            </div>
                            <p className="text-xs text-stone-700">
                                © {new Date().getFullYear()} Fatcat Ballroom
                                &amp; Dance Company. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>

                {/* ============================================= */}
                {/* MOBILE STICKY CTA BAR                         */}
                {/* ============================================= */}
                <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-stone-950/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3 flex gap-3">
                    <a
                        href="#book"
                        className="flex-1 bg-[#c9a96e] hover:bg-[#d4b87d] text-stone-950 text-center font-semibold py-3 rounded text-sm transition-colors tracking-wide"
                    >
                        Book Online
                    </a>
                    <a
                        href="tel:6023247119"
                        className="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-center font-medium py-3 rounded text-sm transition-colors tracking-wide"
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
