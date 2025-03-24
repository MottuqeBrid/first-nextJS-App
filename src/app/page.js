"use client";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import styles from "./page.module.css";
import State from "./State";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main>
        {/* <Navbar /> */}
        <button type="button" onClick={() => router.push("/userList")}>
          Goto User List
        </button>
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
