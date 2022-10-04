import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [prevScrollPosY, setPrevScrollPosY] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScrollY = () => {
		const currentScrollPosY = window.scrollY;

		if (currentScrollPosY <= 0) {
			setPrevScrollPosY(0);
		}

		if (currentScrollPosY > prevScrollPosY) {
			// console.log("we are going down");
			setVisible(false);
		}

		if (currentScrollPosY < prevScrollPosY) {
			// console.log("we are going up");
			setVisible(true);
		}

		setPrevScrollPosY(currentScrollPosY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollY);

		return () =>
			window.removeEventListener("scroll", handleScrollY);
	}, [prevScrollPosY]);

	return (
		<header
			className={`fixed w-full top-0 left-0 z-50 duration-500 transition
			 ${
					prevScrollPosY
						? visible
							? "translate-y-0 bg-gray-900 bg-opacity-100 drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)]"
							: "-translate-y-full"
						: "bg-opacity-0 translate-y-0"
				}
			`}
		>
			<div className="max-w-7xl mx-auto">
				<nav
					className={`flex justify-between items-center h-14 mx-4 `}
				>
					<Link href="/">
						<a className="font-semibold text-2xl">
							MetalMania
						</a>
					</Link>

					<Link href="/">
						<a>
							<img
								src="/img/react.svg"
								alt="React"
								className="h-8"
							/>
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
