"use client";

import { useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
}

interface ProjectModalProps {
    project: Project | null;
    currentImageIndex: number;
    onClose: () => void;
    onPrevImage: () => void;
    onNextImage: () => void;
    onSelectImage: (index: number) => void;
    fullscreenImage: string | null;
    onSetFullscreenImage: (image: string | null) => void;
    onFullscreenPrev: () => void;
    onFullscreenNext: () => void;
    onFullscreenSelect: (index: number) => void;
}

const ProjectModal = ({
    project,
    currentImageIndex,
    onClose,
    onPrevImage,
    onNextImage,
    onSelectImage,
    fullscreenImage,
    onSetFullscreenImage,
    onFullscreenPrev,
    onFullscreenNext,
    onFullscreenSelect,
}: ProjectModalProps) => {

    if (!project) return null;

    return (
        <>
            {/* Modal Principal */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    padding: "1rem",
                    backdropFilter: "blur(4px)",
                }}
                onClick={onClose}
            >
                <div
                    style={{
                        backgroundColor: "var(--bg2)",
                        borderRadius: "16px",
                        border: "1px solid var(--border)",
                        maxWidth: "1200px",
                        width: "100%",
                        maxHeight: "90vh",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "2rem",
                        borderBottom: "1px solid var(--border)",
                    }}>
                        <h2 style={{
                            fontSize: "1.8rem",
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            color: "var(--text)",
                        }}>
                            {project.title}
                        </h2>
                        <button
                            onClick={onClose}
                            style={{
                                background: "none",
                                border: "none",
                                fontSize: "1.5rem",
                                color: "var(--muted)",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "var(--text)"}
                            onMouseLeave={(e) => (e.target as HTMLElement).style.color = "var(--muted)"}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Conteúdo */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 0.7fr",
                        gap: "2rem",
                        padding: "2rem",
                        overflowY: "auto",
                    }}>
                        {/* Carrocel */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}>
                            <div style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16/9",
                                overflow: "hidden",
                                borderRadius: "12px",
                                border: "1px solid var(--border)",
                            }}>
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                                    onClick={() => onSetFullscreenImage(project.images[currentImageIndex])}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                        transition: "transform 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.transform = "scale(1.02)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.transform = "scale(1)";
                                    }}
                                />
                                {/* Botões de navegação */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={onPrevImage}
                                            style={{
                                                position: "absolute",
                                                left: "1rem",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                border: "none",
                                                color: "var(--text)",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                                fontSize: "1.2rem",
                                                transition: "all 0.2s",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.target as HTMLElement).style.backgroundColor = "rgba(108, 99, 255, 0.7)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.target as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                            }}
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={onNextImage}
                                            style={{
                                                position: "absolute",
                                                right: "1rem",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                border: "none",
                                                color: "var(--text)",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                                fontSize: "1.2rem",
                                                transition: "all 0.2s",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.target as HTMLElement).style.backgroundColor = "rgba(108, 99, 255, 0.7)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.target as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                            }}
                                        >
                                            →
                                        </button>
                                    </>
                                )}
                            </div>
                            {/* Indicador de imagens */}
                            <div style={{
                                display: "flex",
                                gap: "0.5rem",
                                justifyContent: "center",
                            }}>
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => onSelectImage(idx)}
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            backgroundColor: idx === currentImageIndex ? "var(--accent)" : "var(--border2)",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.target as HTMLElement).style.backgroundColor = "var(--accent)";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (idx !== currentImageIndex) {
                                                (e.target as HTMLElement).style.backgroundColor = "var(--border2)";
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Descrição e Detalhes */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: "0.9rem",
                                    color: "var(--accent2)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    marginBottom: "0.5rem",
                                    fontWeight: 600,
                                }}>
                                    Descrição
                                </h3>
                                <p style={{
                                    color: "var(--muted)",
                                    lineHeight: 1.8,
                                    fontSize: "0.95rem",
                                    whiteSpace: "pre-wrap",
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h3 style={{
                                    fontSize: "0.9rem",
                                    color: "var(--accent2)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    marginBottom: "0.75rem",
                                    fontWeight: 600,
                                }}>
                                    Tecnologias
                                </h3>
                                <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.75rem",
                                }}>
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: "0.5rem 1rem",
                                                backgroundColor: "rgba(108, 99, 255, 0.1)",
                                                border: "1px solid var(--accent2)",
                                                borderRadius: "8px",
                                                color: "var(--accent2)",
                                                fontSize: "0.85rem",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Fullscreen da Imagem */}
            {fullscreenImage && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 99999,
                        cursor: "pointer",
                    }}
                    onClick={() => onSetFullscreenImage(null)}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "90%",
                            height: "90%",
                            maxWidth: "1400px",
                            maxHeight: "900px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={fullscreenImage}
                            alt="Imagem em fullscreen"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />

                        {/* Botões de navegação */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={onFullscreenPrev}
                                    style={{
                                        position: "absolute",
                                        left: "1rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        border: "none",
                                        color: "var(--text)",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        fontSize: "1.5rem",
                                        transition: "all 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = "rgba(108, 99, 255, 0.7)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    }}
                                >
                                    ←
                                </button>
                                <button
                                    onClick={onFullscreenNext}
                                    style={{
                                        position: "absolute",
                                        right: "1rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        border: "none",
                                        color: "var(--text)",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        fontSize: "1.5rem",
                                        transition: "all 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = "rgba(108, 99, 255, 0.7)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    }}
                                >
                                    →
                                </button>
                            </>
                        )}

                        {/* Indicadores */}
                        {project.images.length > 1 && (
                            <div style={{
                                position: "absolute",
                                bottom: "2rem",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                gap: "0.75rem",
                            }}>
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => onFullscreenSelect(idx)}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            backgroundColor: idx === project.images.indexOf(fullscreenImage) ? "var(--accent)" : "rgba(255, 255, 255, 0.5)",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.target as HTMLElement).style.backgroundColor = "var(--accent)";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (idx !== project.images.indexOf(fullscreenImage)) {
                                                (e.target as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectModal;
