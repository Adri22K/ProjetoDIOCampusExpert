# #AlémDoAgora — Blog

Um blog pessoal criado para compartilhar reflexões sobre carreira, tecnologia, aprendizado e os desafios que fazem parte da trajetória profissional — inclusive aqueles que nem sempre aparecem nas redes sociais.

O projeto apresenta o artigo **“#AlémDoAgora: O lado da carreira que as redes sociais não mostram”**, com uma página responsiva e identidade visual inspirada nos tons de azul, roxo e rosa do DIO Campus Expert.

## ✨ Funcionalidades

- Página de leitura responsiva para desktop e dispositivos móveis.
- Artigo dividido em seções, com navegação pelo conteúdo.
- Identidade visual própria, com cores e elementos gráficos personalizados.
- Metadados da página configurados para compartilhamento e identificação do site.
- Conteúdo do artigo separado da estrutura da página, facilitando futuras edições.
- Preparado para publicação na Vercel.

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- CSS
- [Vercel](https://vercel.com/) para hospedagem

## 🚀 Executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20.9 ou superior
- npm (incluído na instalação do Node.js)
- Git, caso queira versionar o projeto

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU-USUARIO/alem-do-agora-blog.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd alem-do-agora-blog
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

> Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub. Se você baixou o projeto em ZIP, extraia o arquivo e abra a pasta do projeto antes de executar os comandos a partir do passo 3.

## ✍️ Como editar o artigo

O conteúdo fica em `content/article.json`. Nesse arquivo, você pode alterar:

- `title`: título do artigo;
- `subtitle`: subtítulo;
- `author`: nome da autora exibido na página;
- `sections`: seções que compõem o artigo.

Cada seção contém um `heading` (título) e uma lista `paragraphs` (parágrafos). Para incluir uma nova seção, siga a mesma estrutura das demais.

A aparência do site pode ser ajustada em `app/globals.css`.

## 📁 Estrutura do projeto

```text
alem-do-agora-blog/
├── app/
│   ├── globals.css       # Estilos, cores e responsividade
│   ├── layout.tsx        # Layout geral e metadados
│   └── page.tsx          # Página principal do blog
├── content/
│   └── article.json      # Conteúdo do artigo
├── public/
│   ├── dio-campus-expert.webp
│   └── marca.png         # Imagens utilizadas no site
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## ☁️ Publicar na Vercel

1. Envie este projeto para um repositório no GitHub.
2. Entre em [vercel.com](https://vercel.com/) e conecte sua conta do GitHub.
3. Selecione **Add New → Project** e importe o repositório.
4. Confira se o framework foi identificado como **Next.js** e mantenha a pasta raiz como `./`.
5. Clique em **Deploy**.

Depois da primeira publicação, a Vercel poderá gerar novas versões automaticamente quando você enviar alterações para o repositório conectado.

## 📌 Escopo atual

Esta versão é uma página estática de artigo: não possui painel administrativo, autenticação ou banco de dados. Para alterar o texto, edite `content/article.json` e envie as mudanças para o GitHub.

## 👩‍💻 Autoria

Projeto pessoal desenvolvido por **Adri**, como espaço para compartilhar aprendizados e reflexões sobre carreira e tecnologia.

---

**#AlémDoAgora** — a carreira também é feita do que acontece entre uma conquista e outra.
