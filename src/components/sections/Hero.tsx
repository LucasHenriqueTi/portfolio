"use client";

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "flex-start",
            padding: "0 4rem",
            paddingTop: "5rem",
            position: "relative",
            zIndex: 1,
        }}>
            {/* GLOW BLOB */}
            <div style={{
                position: "absolute",
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
                top: "10%",
                right: "-100px",
                pointerEvents: "none",
            }} />

            <div style={{
                maxWidth: "900px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                }}>
                    <div style={{
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 30px 80px rgba(0, 0, 0, 0.25)",
                        background: "linear-gradient(135deg, rgba(108,99,255,0.12), transparent)",
                    }}>
                        <img
                            src="/1774219385256.jpg"
                            alt="Foto de Lucas Henrique"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                </div>

                <h1 className="fade-in" style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3rem, 7vw, 6rem)",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    marginBottom: "1.5rem",
                    color: "var(--text)",
                }}>
                    Lucas<br />
                    <span style={{
                        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}>Henrique.</span>
                </h1>

                <p className="fade-in" style={{
                    fontSize: "1.1rem",
                    color: "var(--muted)",
                    maxWidth: "560px",
                    marginBottom: "2.5rem",
                    lineHeight: 1.75,
                }}>
                    Full Stack Developer apaixonado por construir aplicações robustas e escaláveis — do backend ao frontend, com tecnologias modernas e código de qualidade.
                </p>

                <div className="fade-in" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <a href="#projects" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.8rem 1.75rem",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        background: "var(--accent)",
                        color: "#fff",
                        border: "1px solid var(--accent)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(108, 99, 255, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                    }}>
                        Ver projetos
                    </a>
                    <a href="#contact" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.8rem 1.75rem",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        background: "transparent",
                        color: "var(--text)",
                        border: "1px solid var(--border2)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent2)";
                        e.currentTarget.style.color = "var(--accent2)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border2)";
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}>
                        Entrar em contato
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;