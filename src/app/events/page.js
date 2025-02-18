import { PT_Sans } from "next/font/google";
import "../css/events.css";
import "../globals.css";
import Link from "next/link";

const ptSans = PT_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Events and Activities Page",
    description: "placeholder",
};

export default function Events() {
    return (

        <main className={`events ${ptSans.className}`}>
            <section className="events__featured_image"></section>
            <section className="events__information u-flex-column-align-center">
                <h1 className="events__top_header">EVENTS AND ACTIVITIES</h1>

                <Link href="/" passHref legacyBehavior>
                    <button className="events__go_home">BACK TO HOME</button>
                </Link>

            </section>

        </main>
        
    );
}
