import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          CoinScan
        </p>
        
      </div>

      

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Live tracking <span>-&gt;</span>
          </h2>
          <p>Easily access the latest prices</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            News <span>-&gt;</span>
          </h2>
          <p>Stay informed with the latest news</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
