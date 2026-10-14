import article from "@/content/article.json";

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Além do Agora — início">
          <span className="brand-mark" aria-hidden="true">A.</span>
          <span className="brand-name">além do agora<span>.</span></span>
        </a>
        <span className="header-note">Ideias sobre carreira e vida real</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> UM ARTIGO SOBRE PROCESSO, NÃO PERFEIÇÃO</p>\n          <div className="project-badge"><img src="/dio-campus-expert.webp" alt="DIO Campus Expert 17" /><span>Uma reflexão sobre carreira e aprendizado</span></div>
          <h1><span>#AlémDoAgora</span><br />O lado da carreira que as redes sociais não mostram</h1>
          <p className="hero-description">
            Entre trabalho, faculdade e planos para o futuro, existe uma parte da trajetória
            que quase nunca aparece na tela: o caminho que ainda estamos construindo.
          </p>
          <div className="byline">
            <div className="avatar">A</div>
            <div>
              <strong>{article.author}</strong>
              <span>{article.publishedLabel} · {article.readingTime}</span>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de caminhos em construção" role="img">
          <div className="art-sun" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-path path-one" />
          <div className="art-path path-two" />
          <div className="art-label label-top">em processo</div>
          <div className="art-label label-bottom">um passo de cada vez ↗</div>
          <div className="art-dot dot-one" />
          <div className="art-dot dot-two" />
          <div className="art-dot dot-three" />
        </div>
      </section>

      <div className="article-shell">
        <aside className="article-aside">
          <div className="aside-sticky">
            <p className="aside-label">NESTE ARTIGO</p>
            <nav aria-label="Navegação do artigo">
              {article.sections.map((section) => (
                <a key={section.heading} href={`#${slugify(section.heading)}`}>{section.heading}</a>
              ))}
            </nav>
            <div className="aside-quote">
              <span className="quote-mark">“</span>
              <p>Você não precisa ter todas as respostas para continuar construindo seu caminho.</p>
            </div>
          </div>
        </aside>

        <article className="article-content">
          <div className="article-intro">
            <p className="article-kicker">{article.category}</p>
            <p className="article-deck">{article.subtitle}</p>
          </div>
          {article.sections.map((section, index) => (
            <section className="article-section" id={slugify(section.heading)} key={section.heading}>
              <div className="section-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="section-body">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={`${section.heading}-${pIndex}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
          <div className="closing-note">
            <span className="closing-star">✳</span>
            <p>Talvez você ainda esteja descobrindo seu caminho. Tudo bem. O importante é continuar construindo — sem esquecer de reconhecer o que já trouxe você até aqui.</p>
            <span className="closing-tag">#AlémDoAgora</span>
          </div>
          <div className="article-footer">
            <span>Escrito por <strong>{article.author}</strong></span>
            <a href="#top">Voltar ao início ↑</a>
          </div>
        </article>
      </div>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark" aria-hidden="true">A.</span>
          <span className="brand-name">além do agora<span>.</span></span>
        </a>
        <p>Carreira, tecnologia e tudo o que acontece no caminho.</p>
        <span className="footer-small">© {new Date().getFullYear()} · Feito para compartilhar ideias.</span>
      </footer>
    </main>
  );
}
