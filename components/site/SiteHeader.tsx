type SiteHeaderProps = {
  context?: string;
  project?: boolean;
  hideAction?: boolean;
};

export default function SiteHeader({ context = "LONDON / NEW YORK", project = false, hideAction = false }: SiteHeaderProps) {
  return (
    <header className={`nav${project ? " project-nav" : ""}`}>
      <a className="wordmark" href="/" aria-label="Obenewa Adu, home">OBENEWA</a>
      <div className="nav__status caps">{context}</div>
      <nav aria-label="Primary navigation">
        {project ? (!hideAction && <a href="/work">ALL CASE STUDIES</a>) : <><a href="/#about">ABOUT</a><a href="/work">CASE STUDIES</a><a href="/#services">SERVICES</a><a href="/#contact">CONTACT</a></>}
      </nav>
    </header>
  );
}
