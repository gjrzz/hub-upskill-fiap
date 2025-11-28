# Hub UpSkill – Global Solution (WebDev)

Projeto desenvolvido para a disciplina de Web Development da FIAP, utilizando React com Vite e seguindo todos os requisitos técnicos solicitados no documento oficial da Global Solution.

O objetivo do projeto é criar uma plataforma simples de cursos (Hub UpSkill), com foco em navegação, consumo de API, gerenciamento de estado, favoritos e armazenamento local. Toda a interface segue um tema escuro com detalhes em vermelho, inspirado no visual da FIAP.

## Integrantes do grupo

- Gabriel Juarez

## Deploy

A aplicação está disponível em:

https://hub-upskill-fiap.vercel.app

## Funcionalidades do projeto

- Página inicial apresentando o Hub.
- Lista de cursos consumindo dados de uma API criada no MockAPI.
- Página de detalhes do curso usando rota dinâmica.
- Sistema de favoritos utilizando localStorage.
- Página de favoritos com os cursos salvos.
- Página de perfil armazenando dados localmente.
- Componentização com props, estados e hooks personalizados.
- Rotas configuradas com React Router DOM.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- MockAPI
- localStorage
- Vercel
- GitHub

## Como rodar o projeto localmente

1. Clonar o repositório:
```
git clone https://github.com/gjrzz/hub-upskill-fiap.git
```

2. Entrar na pasta:
```
cd hub-upskill-fiap
```

3. Instalar dependências:
```
npm install
```

4. Iniciar o servidor:
```
npm run dev
```

O projeto ficará disponível em:
http://localhost:5173/

## Estrutura do projeto


src/
─ components/
  ─ CourseCard.jsx
  ─ hooks/
   ─ useFavorites.js
  ─ pages/
     ─ Home.jsx
     ─ Courses.jsx
     ─ CourseDetail.jsx
     ─ Favorites.jsx
     ─ Profile.jsx             
  ─ services/
      ─ api.js
  ─ App.jsx
  ─ main.jsx


## valeu