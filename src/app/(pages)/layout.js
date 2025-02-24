import Image from "next/image";
import Link from "next/link";

export default function InternalLayout({children}) {
    return (
        <main>
            <header className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Image 
							src="/images/svgs/icons/hamburger.svg" 
							alt="Hamburger Menu" 
							width={51} 
							height={51} 
							className="nav__image"
						/>
					</li>
					<li className="nav__item">
						<Link href="/" className="nav__link">
							<Image 
								src="/images/svgs/icons/logo.svg" 
								alt="Navigation Logo" 
								width={51} 
								height={51}
                                className="nav__image"
							/>
						</Link>
					</li>
				</ul>
			</header>
            {children}
        </main>
    );
}