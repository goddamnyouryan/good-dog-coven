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

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap' rel='stylesheet' />
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
                <a href='mailto:ltknutti@gmail.com'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className='container'>
          <img src='/hero.png' className={styles.heroImage} />
          <h2 className={styles.tagline}>A mystical retreat for your goodest dog</h2>
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}
