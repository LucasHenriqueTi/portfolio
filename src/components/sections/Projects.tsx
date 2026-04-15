const Projects = () => {
    return (
        <section id="projects" style={{
            padding: "8rem 4rem",
            borderTop: "1px solid var(--border)",
        }}>
            <p style={{
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent2)",
                marginBottom: "0.75rem",
            }}>Trabalhos</p>
            <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "1rem",
            }}>Projetos</h2>
            <p style={{
                color: "var(--muted)",
                maxWidth: "500px",
                marginBottom: "3rem",
            }}>Alguns projetos que desenvolvi. Em breve mais serão adicionados.</p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
            }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                        border: "2px dashed var(--border)",
                        borderRadius: "16px",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "200px",
                        textAlign: "center",
                        gap: "0.75rem",
                    }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            border: "2px dashed var(--border2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--muted2)",
                            fontSize: "1.2rem",
                        }}>+</div>
                        <p style={{
                            fontSize: "0.9rem",
                            color: "var(--muted2)",
                        }}>Projeto em breve</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;