import Link from "next/link";
import "../css/landing.css";

export default function LandingPage() {
  return (
    <main>
      <header>
        <button>Burger Menu</button>
        <button>Logo</button>
      </header>
      <section className="welcome-section">
        <h1>Welcome</h1>
        <p>Explore, navigate, and enjoy all the park has to offer with ease!</p>
        <button><Link href="/map">Go to map</Link></button>
      </section>
      <section className="nav-section">
        <h2>Explore Ed Broadbent Park</h2>
        <nav>
          <ul>
            <li><Link href="/general" >General Information</Link></li>
            <li><Link href="/aboutEdBroadbent" >About Ed Broadbent</Link></li>
            <li><Link href="/events" >Events and Activities</Link></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
