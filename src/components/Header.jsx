import "./Header.jsx";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/img/dc-logo.png" alt="DC logo" className="logo" />

        <nav>
          <ul className="nav">
            <li>CHARACTERS</li>
            <li>COMICS</li>
            <li>MOVIES</li>
            <li>TV</li>
            <li>GAMES</li>
            <li>COLLICTIBLES</li>
            <li>VIDEOS</li>
            <li>FANS</li>
            <li>NEWS</li>
            <li>SHOP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
