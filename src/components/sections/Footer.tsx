const Footer = () => {
    return (
        <footer style={{
            padding: "2rem 4rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.82rem",
            color: "var(--muted2)",
        }}>
            <span>© 2025 Lucas Henrique. Todos os direitos reservados.</span>
            <span>Built with 💜</span>
        </footer>
    );
};

export default Footer;