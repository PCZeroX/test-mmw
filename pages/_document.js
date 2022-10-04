import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

export default class Mydocument extends Document {
	render() {
		return (
			<Html
				lang="en"
				className="scroll-smooth text-white bg-black/90"
			>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
