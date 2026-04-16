"use client";

import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [fullscreenIndex, setFullscreenIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Estacione",
            description: "Sistema de gestão e controle de estacionamento. Desenvolvido para o Governo de Pernambuco, permitindo o gerenciamento de órgãos, usuários, adesivos e espaços de estacionamento. Interface intuitiva seguindo os padrões de design do Governo de Pernambuco, com dashboard administrativo e geração de relatórios para monitoramento em tempo real.\n\nAtuei ativamente como desenvolvedor Full Stack e gestor de projeto, gerenciando a equipe e atuando como SCRUM master, garantindo a entrega de qualidade e o cumprimento dos objetivos do projeto.",
            images: ["/projetos/estacione/inicio.png", "/projetos/estacione/login.png"],
            technologies: ["Next.js", "Tailwind CSS", "Nest.js", "TypeORM", "PostgreSQL", "Docker"],
        },
    ];

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setFullscreenImage(null);
        setFullscreenIndex(0);
    };

    const handlePrevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex(
                (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
            );
        }
    };

    const handleNextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const handleSelectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleSetFullscreenImage = (image: string | null) => {
        if (image && selectedProject) {
            setFullscreenImage(image);
            setFullscreenIndex(selectedProject.images.indexOf(image));
        } else {
            setFullscreenImage(null);
        }
    };

    const handleFullscreenPrev = () => {
        if (selectedProject) {
            const newIndex = (fullscreenIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
            setFullscreenIndex(newIndex);
            setFullscreenImage(selectedProject.images[newIndex]);
        }
    };

    const handleFullscreenNext = () => {
        if (selectedProject) {
            const newIndex = (fullscreenIndex + 1) % selectedProject.images.length;
            setFullscreenIndex(newIndex);
            setFullscreenImage(selectedProject.images[newIndex]);
        }
    };

    const handleFullscreenSelect = (index: number) => {
        if (selectedProject) {
            setFullscreenIndex(index);
            setFullscreenImage(selectedProject.images[index]);
        }
    };

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
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleProjectClick(project)}
                        style={{
                            border: "2px solid var(--border)",
                            borderRadius: "16px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.2s",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent2)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.backgroundColor = "rgba(108, 99, 255, 0.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        {/* Imagem de preview */}
                        <div style={{
                            width: "100%",
                            height: "200px",
                            overflow: "hidden",
                            backgroundColor: "var(--bg3)",
                        }}>
                            <img
                                src={project.images[1]}
                                alt={`${project.title} preview`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.transform = "scale(1)";
                                }}
                            />
                        </div>

                        {/* Conteúdo */}
                        <div style={{ padding: "2rem" }}>
                            <h3 style={{
                                fontSize: "1.3rem",
                                fontWeight: 700,
                                color: "var(--text)",
                                fontFamily: "var(--font-display)",
                                marginBottom: "0.5rem",
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontSize: "0.9rem",
                                color: "var(--muted)",
                                lineHeight: 1.6,
                                marginBottom: "1rem",
                            }}>
                                {project.description.substring(0, 100)}...
                            </p>
                            <div style={{
                                display: "flex",
                                gap: "0.5rem",
                                flexWrap: "wrap",
                            }}>
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            fontSize: "0.75rem",
                                            padding: "0.25rem 0.75rem",
                                            backgroundColor: "var(--bg3)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "6px",
                                            color: "var(--muted)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Placeholders para futuros projetos */}
                {[1, 2].map((i) => (
                    <div key={`placeholder-${i}`} style={{
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
                        transition: "all 0.2s",
                        cursor: "pointer",
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent2)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.transform = "translateY(0)";
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

            {/* ProjectModal Component */}
            <ProjectModal
                project={selectedProject}
                currentImageIndex={currentImageIndex}
                onClose={() => setSelectedProject(null)}
                onPrevImage={handlePrevImage}
                onNextImage={handleNextImage}
                onSelectImage={handleSelectImage}
                fullscreenImage={fullscreenImage}
                onSetFullscreenImage={handleSetFullscreenImage}
                onFullscreenPrev={handleFullscreenPrev}
                onFullscreenNext={handleFullscreenNext}
                onFullscreenSelect={handleFullscreenSelect}
            />
        </section>
    );
};

export default Projects;