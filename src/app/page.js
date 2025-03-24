// "use client";
import styles from "./page.module.css";
import State from "./State";

export default function Home() {
  return (
    <div>
      <main>
        <h1
          style={{
            backgroundColor: "lightblue",
            color: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          Welcome to Next.js!
        </h1>
        <State></State>
      </main>
      <footer></footer>
    </div>
  );
}
