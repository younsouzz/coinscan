import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          CoinScan
        </p>
        
      </div>

      

      <div className={styles.grid}>
        <Link
          href='/cryptos.js'
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Live tracking <span>-&gt;</span>
          </h2>
          <p>Easily access the latest prices</p>
        </Link>

        <Link
          href="/news.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            News <span>-&gt;</span>
          </h2>
          <p>Stay informed with the latest news</p>
        </Link>

        <a
          href="/favorites.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Favorites <span>-&gt;</span>
          </h2>
          <p>Add your favorites cryptocurrencies to your watchlist</p>
        </a>

      
      </div>
    </main>
  );
}
