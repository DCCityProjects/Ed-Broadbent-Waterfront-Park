import { PT_Sans } from "next/font/google";
import "../css/general.css";
import "../globals.css";
import Link from "next/link";

const ptSans = PT_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "General Information Page",
    description: "placeholder",
};

export default function General() {
    return (

        <main className={`general ${ptSans.className}`}>
            <section className="general__featured_image"></section>
            <section className="general__information u-flex-column-align-center">
                <h1 className="general__top_header">GENERAL INFORMATION</h1>
                <p className="u-content-width">
                    Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, 
                    the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system.
                </p>
                <div>Slider</div>
                <p className="u-content-width">
                    The park is connected to the picturesque Joseph Kolodzie Oshawa Creek Bike Path, 
                    the Waterfront Trail, and Lakeview Park. The park offers a great vantage point of the 
                    vibrant Port of Oshawa. The Park features an expansive Garden of Human Rights, a network 
                    of concrete and asphalt pathways, as well as a stage with amphitheatre seating.
                </p>

                <div className="u-content-width general__amenties">
                    <h2 className="general__amentiesH2">Park Amenities:</h2>
                    <ul className="general__amentiesUl">
                        <li>
                            <i 
                            className="amenity-icon" 
                            style={{ backgroundImage: 'url("/images/accessibility-icon.svg")' }}
                            ></i>
                            Accessible
                        </li>
                        <li>
                            <i 
                            className="amenity-icon" 
                            style={{ backgroundImage: 'url("/images/bike-track-icon.svg")' }}
                            ></i>
                            Bike rack
                        </li>
                        <li>
                            <i 
                            className="amenity-icon" 
                            style={{ backgroundImage: 'url("/images/garden-icon.svg")' }}
                            ></i>
                            Garden
                        </li>
                        <li>
                            <i 
                            className="amenity-icon" 
                            style={{ backgroundImage: 'url("/images/parking-icon.svg")' }}
                            ></i>
                            Parking
                        </li>
                        <li>
                            <i 
                            className="amenity-icon" 
                            style={{ backgroundImage: 'url("/images/recreational-trail-icon.svg")' }}
                            ></i>
                            Recreational trail
                        </li>
                    </ul>
                </div>

                <div className="u-content-width">
                    <h2 className="general__didYouKnowH2">Did you know?</h2>
                    <ul className="general__didYouKnowUl">
                        <li>
                            Ed Broadbent Waterfront Park is a two-phase redevelopment project. Phase one of the project develops the western half of the site along Simcoe Street South.
                        </li>
                        <li>
                            Elements of the old marina infrastructure are still present on the eastern half of the project site. Redevelopment of this half will require an extensive process including an environmental assessment for any shoreline rehabilitation.
                        </li>
                        <li>
                            The western site was home to historical industrial uses, which resulted in poor soil conditions. Since the City acquired the land, extensive environmental remediation efforts have been taken to ensure the site meets Federal requirements for passive recreation use. Capped lands and the floodplain present unique limitations to the park's development.
                        </li>
                        <li>
                            To improve the environmental condition of the site, there are mass plantings of native shrubs as well as riparian vegetation planting along the banks of Oshawa Creek.
                        </li>
                        <li>
                            Both deciduous and coniferous trees are planted throughout the park for shade, shelter, and noise control.
                        </li>
                    </ul>
                </div>

                <Link href="/" passHref legacyBehavior>
                    <button className="general__go_home">BACK TO HOME</button>
                </Link>

            </section>

        </main>
        
    );
}
