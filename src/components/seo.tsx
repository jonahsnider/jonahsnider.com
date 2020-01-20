import React from 'react';
import {Theme} from '@material-ui/core';
import siteMetadata from '../config/site-metadata';

/**
 * A collection of SEO tags that use values from a site-wide or page specific config.
 */
export default function Seo(props: {theme: Theme}): JSX.Element {
	return (
		<>
			{['mobile-web-app-capable', 'apple-mobile-web-app-capable'].map(name => (
				<meta key={name} name={name} content='yes' />
			))}

			<meta name='msapplication-starturl' content='/' />
			<link rel='manifest' href={`/manifests/${props.theme.palette.type}.webmanifest`} />

			<link
				rel='icon'
				href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/favicon.ico`}
				type='image/x-icon'
			/>

			<meta property='og:image' content={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`} />
			<meta
				property='og:image:secure_url'
				content={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`}
			/>
			<meta property='og:image:type' content='image/png' />
			<meta property='og:image:width' content='512' />
			<meta property='og:image:height' content='512' />

			{/* A bunch of icons. */}
			{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
				<link
					key={`icon-${dimension}`}
					rel='icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-${dimension}.png`}
				/>,
				<link
					key={`apple-touch-icon-${dimension}`}
					rel='apple-touch-icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-${dimension}.png`}
				/>
			])}

			<link
				rel='apple-touch-startup-image'
				href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`}
			/>

			<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

			<meta key='openGraphSiteName' name='title' content={siteMetadata.title} />
			<meta name='application-name' content={siteMetadata.title} />
			<meta name='apple-mobile-web-app-title' content={siteMetadata.title} />
			<meta key='twitterTitle' name='twitter:title' content={siteMetadata.title} />
			<meta key='openGraphTitle' property='og:title' content={siteMetadata.title} />

			<meta key='openGraphURL' property='og:url' content={siteMetadata.url} />

			<meta key='language' name='language' content={siteMetadata.i18n.language} />

			<meta key='openGraphLocale' property='og:locale' content={siteMetadata.i18n.locale} />

			<meta key='description' name='description' content={siteMetadata.description} />
			<meta key='twitterDescription' name='twitter:description' content={siteMetadata.description} />
			<meta key='openGraphDescription' property='og:description' content={siteMetadata.description} />

			<meta property='og:type' content='website' />

			<meta name='twitter:card' content='summary' />

			<meta key='props.themeColor' name='props.theme-color' content={props.theme.palette.primary.main} />
			<meta name='msapplication-navbutton-color' content={props.theme.palette.primary.main} />

			<meta key='keywords' name='keywords' content={siteMetadata.keywords.join(', ')} />
		</>
	);
}
