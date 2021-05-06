import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Rubik:wght@700&display=swap'
						rel='stylesheet'
					/>

					<meta name='color-scheme' content='light dark' />
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* Cloudflare Web Analytics */}
					<script
						defer
						src='https://static.cloudflareinsights.com/beacon.min.js'
						data-cf-beacon='{"token": "1c4767bb9b5e4c17b8eea06329b3553c"}'
					/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
