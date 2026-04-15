const About = () => {
    return (
        <section id="about" style={{
            padding: "8rem 4rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
            borderTop: "1px solid var(--border)",
        }}>
            <div>
                <p style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--accent2)",
                    marginBottom: "0.75rem",
                }}>Sobre mim</p>
                <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    color: "var(--text)",
                    marginBottom: "1rem",
                }}>Código limpo,<br />resultados reais.</h2>
                <p style={{
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: "1rem",
                }}>
                    Desenvolvedor Full Stack com experiência em construir APIs robustas e interfaces modernas. Trabalho com o ecossistema JavaScript/TypeScript de ponta a ponta, integrando tecnologias como Next.js, NestJS, e bancos de dados relacionais.
                </p>
                <p style={{
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: "1rem",
                }}>
                    Tenho familiaridade com ambientes containerizados usando Docker e foco em escrever código manutenível, bem estruturado e performático.
                </p>
                <div style={{ marginTop: "2rem" }}>
                    <a href="#contact" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.8rem 1.75rem",
                        borderRadius: "8px",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        cursor: "pointer",
                        background: "transparent",
                        color: "var(--text)",
                        border: "1px solid var(--border2)",
                    }}>
                        Fale comigo →
                    </a>
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
            }}>
                <div style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    transition: "border-color 0.2s",
                }}>
                    <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--accent2)",
                        marginBottom: "0.25rem",
                    }}>Full</div>
                    <div style={{
                        fontSize: "0.85rem",
                        color: "var(--muted2)",
                    }}>Stack Developer</div>
                </div>
                <div style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    transition: "border-color 0.2s",
                }}>
                    <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--accent2)",
                        marginBottom: "0.25rem",
                    }}>9+</div>
                    <div style={{
                        fontSize: "0.85rem",
                        color: "var(--muted2)",
                    }}>Tecnologias dominadas</div>
                </div>
                <div style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    transition: "border-color 0.2s",
                }}>
                    <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--accent2)",
                        marginBottom: "0.25rem",
                    }}>DB</div>
                    <div style={{
                        fontSize: "0.85rem",
                        color: "var(--muted2)",
                    }}>MySQL & PostgreSQL</div>
                </div>
                <div style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    transition: "border-color 0.2s",
                }}>
                    <div style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "var(--accent2)",
                        marginBottom: "0.25rem",
                    }}>ORM</div>
                    <div style={{
                        fontSize: "0.85rem",
                        color: "var(--muted2)",
                    }}>TypeORM & Prisma</div>
                </div>
            </div>
        </section>
    );
};

export default About;