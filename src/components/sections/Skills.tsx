const Skills = () => {
    return (
        <section id="skills" style={{
            padding: "8rem 4rem",
            borderTop: "1px solid var(--border)",
            background: "var(--bg2)",
        }}>
            <p style={{
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent2)",
                marginBottom: "0.75rem",
            }}>Stack técnica</p>
            <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "1rem",
            }}>Tecnologias</h2>
            <p style={{
                color: "var(--muted)",
                maxWidth: "500px",
                marginBottom: "3rem",
            }}>Ferramentas e linguagens que uso no dia a dia para construir produtos sólidos.</p>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
            }}>
                {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "NestJS",
                    "TypeScript",
                    "MySQL",
                    "PostgreSQL",
                    "TypeORM",
                    "Prisma",
                    "Docker",
                ].map((skill) => (
                    <div key={skill} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        padding: "0.6rem 1.2rem",
                        fontSize: "0.9rem",
                        color: "var(--text)",
                        transition: "all 0.2s",
                    }}>
                        <div style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "var(--accent2)",
                            opacity: 0.6,
                        }} />
                        {skill}
                    </div>
                ))}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "var(--bg3)",
                    border: "1px dashed var(--border)",
                    borderRadius: "8px",
                    padding: "0.6rem 1.2rem",
                    fontSize: "0.9rem",
                    color: "var(--muted2)",
                    transition: "all 0.2s",
                }}>
                    <div style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "var(--accent2)",
                        opacity: 0.6,
                    }} />
                    + mais em breve
                </div>
            </div>
        </section>
    );
};

export default Skills;