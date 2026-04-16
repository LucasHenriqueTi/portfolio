# 🚀 Portfólio Lucas Henrique

Um portfólio moderno e responsivo desenvolvido com Next.js, apresentando projetos, habilidades e informações de contato de Lucas Henrique, desenvolvedor Full Stack.

![Portfolio Preview](https://portfolio-lucashenriqueti.vercel.app/)

## ✨ Tecnologias Utilizadas

### 🎯 **Frontend**
- **Next.js 16.2.3** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário

### 🎨 **UI/UX & Design**
- **CSS Custom Properties** - Variáveis CSS para theming consistente
- **Google Fonts** - Inter (corpo) e Syne (títulos)
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Tema escuro profissional

### 🛠️ **Ferramentas de Desenvolvimento**
- **ESLint** - Linting e formatação de código
- **Turbopack** - Build tool rápido do Next.js
- **Sharp** - Processamento de imagens

## 🧠 Conceitos Implementados

### 📱 **Interface e Experiência**
- **Componentização** - Reutilização de componentes modulares
- **Estado Gerenciado** - useState para interatividade
- **Eventos e Interações** - Hover effects e transições suaves
- **Acessibilidade** - Navegação por teclado e leitores de tela

### 🎭 **Modal e Carrossel**
- **Modal System** - Sistema de modais reutilizáveis
- **Carrossel de Imagens** - Navegação interativa entre imagens
- **Fullscreen Viewer** - Visualização expandida de imagens
- **Controles Touch-Friendly** - Botões otimizados para mobile

### 🎯 **Performance e Otimização**
- **Server-Side Rendering (SSR)** - Renderização no servidor
- **Static Generation** - Páginas estáticas otimizadas
- **Lazy Loading** - Carregamento sob demanda
- **Image Optimization** - Otimização automática de imagens

### 🔧 **Arquitetura e Estrutura**
- **App Router** - Roteamento moderno do Next.js
- **Component Architecture** - Separação clara de responsabilidades
- **TypeScript Interfaces** - Tipagem forte para dados
- **CSS-in-JS** - Estilização inline com objetos JavaScript

## 🚀 Como Executar

### 📋 Pré-requisitos
- Node.js 18+
- npm, yarn, pnpm ou bun

### 🏃‍♂️ Desenvolvimento
```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 🏗️ Build para Produção
```bash
# Build otimizado
npm run build

# Preview do build
npm run start
```

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── favicon.svg          # Favicon personalizado
│   └── projetos/
│       └── estacione/       # Imagens do projeto Estacione
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e variáveis
│   │   ├── layout.tsx       # Layout raiz da aplicação
│   │   ├── page.tsx         # Página inicial com overlay demo
│   │   └── portfolio/
│   │       └── page.tsx     # Página completa do portfólio
│   ├── components/
│   │   ├── Navbar.tsx       # Barra de navegação
│   │   ├── ProjectModal.tsx # Modal reutilizável para projetos
│   │   └── sections/        # Seções do portfólio
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   └── Footer.tsx
└── README.md
```

## 🎮 Funcionalidades

### 🏠 **Página Inicial**
- **Demo Interativo** - Simulador de API request (GET)
- **Transição Suave** - Overlay que revela o portfólio
- **UI Moderna** - Interface inspirada no Postman

### 👨‍💻 **Portfólio Completo**
- **Hero Section** - Apresentação com foto e descrição
- **Sobre Mim** - Informações pessoais e estatísticas
- **Habilidades** - Tecnologias e ferramentas dominadas
- **Projetos** - Showcase interativo com modal detalhado
- **Contato** - Links para redes sociais e contato

### 🖼️ **Sistema de Projetos**
- **Cards Interativos** - Hover effects e preview de imagens
- **Modal Detalhado** - Descrição completa e tecnologias
- **Carrossel de Imagens** - Navegação entre screenshots
- **Fullscreen Viewer** - Visualização expandida com controles

### 📱 **Responsividade**
- **Mobile-First** - Design otimizado para dispositivos móveis
- **Breakpoints** - Adaptação para tablets e desktops
- **Touch Controls** - Interações otimizadas para toque

## 🎨 Design System

### 🎨 **Paleta de Cores**
```css
--bg: #0a0a0f;        /* Fundo principal */
--bg2: #111118;       /* Fundo secundário */
--bg3: #18181f;       /* Fundo terciário */
--accent: #6c63ff;    /* Cor de destaque */
--text: #f0f0f5;      /* Texto principal */
--muted: #9090a8;     /* Texto secundário */
--border: rgba(255,255,255,0.07); /* Bordas */
```

### 🔤 **Tipografia**
- **Display**: Syne (títulos e destaques)
- **Body**: Inter (texto corrido)
- **Weights**: 400, 700, 800

### ✨ **Animações**
- **Fade-in** - Entrada suave de elementos
- **Hover Effects** - Interações visuais
- **Transições** - Movimentos fluidos (0.2s-0.5s)
- **Scale Effects** - Zoom em botões e imagens

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure o build command: `npm run build`
3. Deploy automático em cada push

### Outras Plataformas
Compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📞 Contato

**Lucas Henrique**
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- GitHub: [Seu GitHub](https://github.com/seu-usuario)
- Email: lucas.henrique.andrade.ti@exemplo.com

---

⭐ **Feito com 🍺 usando Next.js e TypeScript**
