import { PT_Sans } from "next/font/google";
import "../css/aboutEdBroadbent.css";
import "../globals.css";
import Link from "next/link";

const ptSans = PT_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "About Ed Broadbent Page",
    description: "placeholder",
};

export default function EdBroadbent() {
    return (

        <main className={`edBroadbent ${ptSans.className}`}>
            <section className="edBroadbent__featured_image"></section>
            <section className="edBroadbent__information u-flex-column-align-center">
                <h1 className="edBroadbent__top_header">ABOUT ED BROADBENT</h1>
                <p className="u-content-width">
                    Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.
                </p>
                <div>Slider</div>
                <h2 className="u-content-width edBroadbent__h2Tags">1936 - 1966</h2>
                <p className="u-content-width edBroadbent_pTags">Ed Broadbent was born in Oshawa in 1936 and raised in our city. After graduating first in his class in philosophy at the University of Toronto in 1959, he did postgraduate studies at the London School of Economics and obtained his doctorate in political science from the University of Toronto in 1966.</p>

                <h2 className="u-content-width edBroadbent__h2Tags">1968 - 1989</h2>
                <p className="u-content-width edBroadbent_pTags">Mr. Broadbent was elected to Parliament as the NDP Member for Oshawa in 1968 and served as the MP until 1989. From 1975 to 1989, he was also Leader of the New Democratic Party.</p>

                <h2 className="u-content-width edBroadbent__h2Tags">1990 - 1996</h2>
                <p className="u-content-width edBroadbent_pTags">Between 1979 and 1990, he was Vice-President of the Socialist International. From 1990 to 1996, he was the founding President of the International Centre for Human Rights and Democratic Development in Montreal.</p>

                <h2 className="u-content-width edBroadbent__h2Tags">2023</h2>
                <p className="u-content-width edBroadbent_pTags">In June 2023, the City officially opened Ed Broadbent Waterfront Park. The naming of the Park honours the numerous contributions Mr. Broadbent made to public service, Canadians and especially his commitment and service to the residents, workers and businesses of Oshawa. <br/> <br/>
                    The Park features a Garden of Human Rights honouring Mr. Broadbent’s dedication and extensive work as a champion and advocate for human rights. <br/> <br/>
                    During his time in Ottawa, Mr. Broadbent’s focus was on Indigenous rights, women’s equality, child poverty, ethics in government, and tax equality. <br/> <br/>
                    He was invested as a Member of the Privy Council (1982), Officer of the Order of Canada (1993), and Companion of the Order of Canada (2002).</p>

                <Link href="/" passHref legacyBehavior>
                    <button className="edBroadbent__go_home">BACK TO HOME</button>
                </Link>

            </section>

        </main>
        
    );
}
