import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Dog Coven</title>
        <meta name='description' content='Good Dog Coven - A mystical retreat for your goodest dog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='mailto:ltknutti@gmail.com?subject=Good Dog Coven'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className={`container ${styles.hero}`}>
          <img src='/hero.png' className={styles.heroImage} />
          <h2 className={styles.tagline}>A mystical retreat for your goodest dog</h2>
        </div>

        <a name='services'></a>
        <div className={styles.services}>
          <div className='container'>
            <ul className={styles.servicesList}>
              <li>
                <img src='/services/the-walk.png' />
              </li>
              <li>
                <img src='/services/the-ball.png' />
              </li>
              <li>
                <img src='/services/the-nap.png' />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.cta}>
          <div className='container'>
            <h3 className={styles.subhead}>The most metaphysical-iest dog-boarder in all of Glassell Park</h3>
            <a className={styles.button} href='mailto:ltknutti@gmail.com?subject=Good Dog Coven'>Board my Pup</a>
          </div>
        </div>
      </main>

      <footer>
        <div className='container'>
           <div className='copyright'>&copy;{new Date().getFullYear()} Good Dog Coven LLC</div>
           <a href='mailto:ltknutti@gmail.com?subject=Good Dog Coven'>Contact Us</a>
        </div>
      </footer>
    </>
  )
}
