import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="bg-gray-900 ">
			<div className="h-14 flex justify-center items-center drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)] md:mx-auto mx-4">
				<p className="text-center text-xs md:text-base">
					All Rights Reserved MetalMania ©
					{` ${new Date().getFullYear()}`}
				</p>

				<span className="mx-4 md:mx-8">|</span>

				<ul className="flex gap-4 items-center">
					<li>
						<a
							href="https://es-la.facebook.com/profile.php?id=100054525247624"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookF className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>

					<li>
						<a
							href="https://twitter.com/MetalmaniaWorks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>

					<li>
						<a
							href="https://instagram.com/metalmaniaworks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="h-6 w-6 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>
				</ul>

				<span className="mx-4 md:mx-8">|</span>

				<a
					className="text-center text-xs md:text-base"
					href="https://github.com/PCZeroX"
					target="_blank"
					rel="noopener noreferrer"
				>
					Designed by pczerox
				</a>
			</div>
		</footer>
	);
};

export default Footer;
