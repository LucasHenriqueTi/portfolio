"use client";

import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

interface Project {
    id: number;
    title: string;
    descriptions: {
        problem: string;
        solution: string;
        participation: string;
    };
    images: string[];
    technologies: string[];
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [fullscreenIndex, setFullscreenIndex] = useState(0);

    const projects: Project[] = [
        {
            id: 1,
            title: "Estacione",
            descriptions: {
                problem: "Diversos órgãos do estado enfrentavam problemas críticos na gestão de estacionamento: ausência de controle de entrada e saída de veículos, impossibilidade de identificação dos colaboradores e seus veículos, falta de auditoria sobre uso das vagas e dificuldade em gerar relatórios personalizados para a alta gestão.",
                solution: "Desenvolvemos uma plataforma Web/App intuitiva com controle de acesso ao estacionamento via QRCode e identificação visual por adesivos vinculados ao órgão, gestão de vagas, sistema de registro para visitantes, e dashboard com relatórios customizáveis em tempo real para auditorias e tomadas de decisão.",
                participation: "Atuei como desenvolvedor Full Stack e gestor de projeto, coordenando a equipe e executando o papel de Scrum Master para garantir entregas com qualidade e alinhadas aos objetivos do cliente.",
            },
            images: ["/projetos/estacione/login.png", "/projetos/estacione/inicio.png"],
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "TypeORM", "PostgreSQL", "Docker"],
        },
        {
            id: 2,
            title: "GDRH",
            descriptions: {
                problem: "O RH não possuía uma base centralizada de colaboradores: cada setor mantinha seus próprios controles, com múltiplas planilhas desatualizadas e incompletas. Esse cenário dificultava a manutenção dos dados dos funcionários, comprometia a consistência das informações e tornava ineficiente a geração de relatórios estratégicos para a alta gestão.",
                solution: "Desenvolvemos uma aplicação web para ciclo completo de gestão de colaboradores, incluindo cadastro, atualização, desligamento e organização de cargos, gratificações, setores, lotações, órgãos externos, perfis de acesso, logs e versões do sistema. A solução também passou a gerar relatórios avançados com parâmetros personalizados e cruzamento de dados.",
                participation: "Atuei como desenvolvedor Frontend, responsável por autenticação, implementação de regras de negócio no cliente, otimização e gerenciamento de queries, validações de inputs e definições de proteção de rotas.",
            },
            images: [
                "/projetos/rh/login.png",
                "/projetos/rh/dashboard.jpeg",
                "/projetos/rh/dashboard escuro.jpeg",
                "/projetos/rh/colaboradores.jpeg",
                "/projetos/rh/cadastro colaborador.jpeg",
                "/projetos/rh/cargos.jpeg",
                "/projetos/rh/gratificações.jpeg",
                "/projetos/rh/lotações.jpeg",
                "/projetos/rh/logs.jpeg",
                "/projetos/rh/orgões externos.jpeg",
                "/projetos/rh/perfils.jpeg",
                "/projetos/rh/setores.jpeg",
                "/projetos/rh/versões.jpeg"
            ],
            technologies: ["Vite.js", "TypeScript",  "Tailwind CSS", "Tanstack Query", "Zod", "Firebase" ],
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
            }}>Alguns projetos reais que participei do desenvolvimento.</p>

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
                                src={project.images[0]}
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
                                {project.descriptions.problem.substring(0, 100)}...
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