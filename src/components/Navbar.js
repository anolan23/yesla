import styles from '../sass/components/Navbar.module.scss';

function Navbar() {
  return (
    <header className={styles['navbar']}>
      <div className={styles['navbar__logo']}>
        <img
          src="/logo.svg"
          alt="logo"
          className={styles['navbar__logo__image']}
        />
      </div>
      <ol className={styles['navbar__models']}>
        <li className={styles['item']}>
          <a href="/">
            <span>Model S</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Model 3</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Model X</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Model Y</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Solar Roof</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Solar Panels</span>
          </a>
        </li>
      </ol>
      <ol className={styles['navbar__actions']}>
        <li className={styles['item']}>
          <a href="/">
            <span>Shop</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Account</span>
          </a>
        </li>
        <li className={styles['item']}>
          <a href="/">
            <span>Menu</span>
          </a>
        </li>
      </ol>
    </header>
  );
}
export default Navbar;
