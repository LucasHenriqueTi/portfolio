"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
    const [descriptionDirection, setDescriptionDirection] = useState(1);
    const [imageDirection, setImageDirection] = useState(1);
    const [fullscreenDirection, setFullscreenDirection] = useState(1);

    const descriptionSlides = project
        ? [
            { label: "Problema", content: project.descriptions.problem },
            { label: "Solução", content: project.descriptions.solution },
            { label: "Minha participação", content: project.descriptions.participation },
        ]
        : [];

    const handlePrevDescription = () => {
        setDescriptionDirection(-1);
        setCurrentDescriptionIndex((prev) =>
            (prev - 1 + descriptionSlides.length) % descriptionSlides.length
        );
    };

    const handleNextDescription = () => {
        setDescriptionDirection(1);
        setCurrentDescriptionIndex((prev) => (prev + 1) % descriptionSlides.length);
    };

    const handleSelectDescription = (index: number) => {
        setDescriptionDirection(index >= currentDescriptionIndex ? 1 : -1);
        setCurrentDescriptionIndex(index);
    };

    const handlePrevImageAnimated = () => {
        setImageDirection(-1);
        onPrevImage();
    };

    const handleNextImageAnimated = () => {
        setImageDirection(1);
        onNextImage();
    };

    const handleSelectImageAnimated = (index: number) => {
        setImageDirection(index >= currentImageIndex ? 1 : -1);
        onSelectImage(index);
    };

    const handleFullscreenPrevAnimated = () => {
        setFullscreenDirection(-1);
        onFullscreenPrev();
    };

    const handleFullscreenNextAnimated = () => {
        setFullscreenDirection(1);
        onFullscreenNext();
    };

    const handleFullscreenSelectAnimated = (index: number) => {
        const activeIndex = project ? project.images.indexOf(fullscreenImage ?? "") : 0;
        setFullscreenDirection(index >= activeIndex ? 1 : -1);
        onFullscreenSelect(index);
    };

    const activeDescription = descriptionSlides[currentDescriptionIndex];

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
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem",
                        padding: "2rem",
                        overflowY: "auto",
                        alignItems: "start",
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
                                <AnimatePresence mode="wait" custom={imageDirection}>
                                    <motion.img
                                        key={`${project.id}-${currentImageIndex}`}
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                                        onClick={() => onSetFullscreenImage(project.images[currentImageIndex])}
                                        custom={imageDirection}
                                        initial={{ opacity: 0, x: imageDirection > 0 ? 36 : -36, scale: 0.98 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: imageDirection > 0 ? -36 : 36, scale: 0.98 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            position: "absolute",
                                            inset: 0,
                                        }}
                                    />
                                </AnimatePresence>
                                {/* Botões de navegação */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={handlePrevImageAnimated}
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
                                            onClick={handleNextImageAnimated}
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
                                        onClick={() => handleSelectImageAnimated(idx)}
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
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: "0.75rem",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                }}>
                                    <div style={{ minHeight: "24px" }}>
                                        <AnimatePresence mode="wait" custom={descriptionDirection}>
                                            <motion.p
                                                key={`label-${currentDescriptionIndex}`}
                                                custom={descriptionDirection}
                                                initial={{ opacity: 0, x: descriptionDirection > 0 ? 24 : -24 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: descriptionDirection > 0 ? -24 : 24 }}
                                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                                style={{
                                                    color: "var(--text)",
                                                    fontSize: "1rem",
                                                    fontWeight: 600,
                                                    margin: 0,
                                                }}
                                            >
                                                {activeDescription.label}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>

                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}>
                                        <button
                                            onClick={handlePrevDescription}
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                                border: "1px solid var(--border)",
                                                background: "var(--bg3)",
                                                color: "var(--text)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={handleNextDescription}
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                                border: "1px solid var(--border)",
                                                background: "var(--bg3)",
                                                color: "var(--text)",
                                                cursor: "pointer",
                                            }}
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <AnimatePresence mode="wait" custom={descriptionDirection}>
                                        <motion.p
                                            key={`description-${currentDescriptionIndex}`}
                                            custom={descriptionDirection}
                                            initial={{ opacity: 0, x: descriptionDirection > 0 ? 26 : -26 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: descriptionDirection > 0 ? -26 : 26 }}
                                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                            style={{
                                                color: "var(--muted)",
                                                lineHeight: 1.8,
                                                fontSize: "0.95rem",
                                                whiteSpace: "pre-wrap",
                                                margin: 0,
                                            }}
                                        >
                                            {activeDescription.content}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                                <div style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    marginTop: "0.75rem",
                                }}>
                                    {descriptionSlides.map((slide, idx) => (
                                        <button
                                            key={slide.label}
                                            onClick={() => handleSelectDescription(idx)}
                                            style={{
                                                border: idx === currentDescriptionIndex ? "1px solid var(--accent2)" : "1px solid var(--border)",
                                                background: idx === currentDescriptionIndex ? "rgba(108, 99, 255, 0.15)" : "var(--bg3)",
                                                color: idx === currentDescriptionIndex ? "var(--accent2)" : "var(--muted)",
                                                borderRadius: "999px",
                                                fontSize: "0.75rem",
                                                padding: "0.25rem 0.6rem",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {slide.label}
                                        </button>
                                    ))}
                                </div>
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
                        <AnimatePresence mode="wait" custom={fullscreenDirection}>
                            <motion.img
                                key={fullscreenImage}
                                src={fullscreenImage}
                                alt="Imagem em fullscreen"
                                custom={fullscreenDirection}
                                initial={{ opacity: 0, x: fullscreenDirection > 0 ? 40 : -40, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: fullscreenDirection > 0 ? -40 : 40, scale: 0.98 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    position: "absolute",
                                    inset: 0,
                                }}
                            />
                        </AnimatePresence>

                        {/* Botões de navegação */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={handleFullscreenPrevAnimated}
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
                                    onClick={handleFullscreenNextAnimated}
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
                                        onClick={() => handleFullscreenSelectAnimated(idx)}
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
