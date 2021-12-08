import Navbar from './components/Navbar';
import styles from './sass/pages/App.module.scss';
function App() {
  return (
    <div className={styles['app']}>
      <Navbar />
      <main className={styles['main']}>
        <div className={styles['main__parallax']}>
          <section className={styles['main__parallax__copy']}>
            <div className={styles['main__parallax__copy__text']}>
              <h1 className={styles['main__parallax__copy__text--main']}>
                Model S
              </h1>
              <h2 className={styles['main__parallax__copy__text--sub']}>
                Order online for Touchless Delivery
              </h2>
            </div>
            <div className={styles['main__parallax__copy__actions']}>
              <a
                className={styles['main__parallax__copy__actions__action']}
                href="/"
              >
                <span>custom order</span>
              </a>
              <a
                className={`${styles['main__parallax__copy__actions__action']} ${styles['main__parallax__copy__actions__action--white']}`}
                href="/"
              >
                <span>existing inventory</span>
              </a>
            </div>
          </section>
          <div className={styles['sections']}>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/red.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/red.jpg"
                  alt="red tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/blue.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/blue.jpg"
                  alt="blue tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/red3.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/red3.jpg"
                  alt="red3 tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/white.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/white.jpg"
                  alt="white tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/panels.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/panels.jpg"
                  alt="panels tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/roof.avif" type="image/avif" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/roof.jpg"
                  alt="roof tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
            <section className={styles['sections__section']}>
              <picture>
                <source srcSet="/accessories.webp" type="image/webp" />
                <img
                  decoding="async"
                  loading="lazy"
                  src="/accessories.jpg"
                  alt="accessories tesla accelerating on elevated highway"
                  className={styles['sections__section__image']}
                />
              </picture>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
