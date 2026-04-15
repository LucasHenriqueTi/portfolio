"use client";

import { useEffect, useState } from "react";

const links = [
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0,
                zIndex: 100,
                transition: "all 0.3s ease",
                background: scrolled ? "rgba(8,11,15,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            }}
        >
            <div style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "0 2rem",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>

                {/* Logo */}
                <a href="#" style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--text)",
                    textDecoration: "none",
                    letterSpacing: "-0.03em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                }}>
                    LH
                    <span style={{
                        width: "6px", height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                        marginBottom: "2px",
                    }} />
                </a>

                <nav style={{ display: "flex", gap: "2rem" }}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setActive(link.href)}
                            style={{
                                fontSize: "0.82rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                color: active === link.href ? "var(--accent)" : "var(--muted)",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = active === link.href ? "var(--accent)" : "var(--muted)"; }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    style={{
                        fontSize: "0.82rem",
                        padding: "0.45rem 1.1rem",
                        borderRadius: "6px",
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.color = "#080b0f";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--accent)";
                    }}
                >
                    Hire me
                </a>

            </div>
        </header>
    );
};

export default Navbar;