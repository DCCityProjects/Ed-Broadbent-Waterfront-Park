import Link from "next/link";
import "../css/landing.css";


export default function LandingPage() {
  return (
    <main>
      <header className="">
        <button>Burger Menu</button>
        <button>Logo</button>
      </header>
      <section className="welcome-section u-flex-column-justify-align-center">
        <h1 className="welcome-section__title">Welcome</h1>
        <p className="welcome-section__description">Explore, navigate, and enjoy all the park has to offer with ease!</p>
        <button><Link href="/map" className="welcome-section__button">GO TO MAP</Link></button>
      </section>
      <section className="home-nav-section">
        <h2 className="home-nav-section__title">Explore Ed Broadbent Park</h2>
        <nav className="home-nav">
          <ul className="home-nav__list">
            <li><Link href="/general" className="home-nav__link">General Information</Link></li>
            <li><Link href="/aboutEdBroadbent" className="home-nav__link">About Ed Broadbent</Link></li>
            <li><Link href="/events" className="home-nav__link">Events and Activities</Link></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
