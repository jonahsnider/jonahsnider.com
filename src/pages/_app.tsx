import App from 'next/app';
import React from 'react';

export default class MyApp extends App {
	componentDidMount(): void {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.remove();
		}
	}

	render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return <Component {...pageProps} />;
	}
}
