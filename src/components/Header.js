import "../styles/layout/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">the creative crew</h1>
      <article>
        <h2 className="header__subtitle">who we are</h2>
        <p className="header__text">
          We are team of creatively diverse. drive. Innovative individuals
          working in various locations from de world.
        </p>
      </article>
    </header>
  );
};
export default Header;
