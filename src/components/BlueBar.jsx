import "./BlueBar.css";
function BlueBar() {
  return (
    <section className="blue-bar">
      <ul className="blue-bar-list">
        <li>
          <img
            src="public/img/buy-comics-digital-comics.png"
            alt="Digital Comics"
          />
          <span>DIGITAL COMICS</span>
        </li>
        <li>
          <img src="/img/buy-comics-merchandise.png" alt="Merchandise" />
          <span>DC MERCHANDISE</span>
        </li>
        <li>
          <img src="/img/buy-comics-shop-locator.png" alt="Shop Locator" />
          <span>SHOP LOCATOR</span>
        </li>
        <li>
          <img src="/img/buy-comics-subscriptions.png" alt="Subscriptions" />
          <span>SUBSCRIPTIONS</span>
        </li>
        <li>
          <img src="/img/buy-dc-power-visa.svg" alt="Power Visa" />
          <span>POWER VISA</span>
        </li>
      </ul>
    </section>
  );
}
export default BlueBar;
