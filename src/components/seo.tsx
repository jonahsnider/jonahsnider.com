import React from 'react';
import SiteMetadata from '../../types/site-metadata';

/**
 * A collection of SEO tags that use values from a site-wide or page specific config.
 */
export default function SEO(props: {siteMetadata: SiteMetadata}): JSX.Element {
	return (
		<>
			<link rel='manifest' href='/manifest.webmanifest' />

			{['mobile-web-app-capable', 'apple-mobile-web-app-capable'].map(name => (
				<meta name={name} content='yes' key={name} />
			))}

			<meta name='msapplication-starturl' content='/' />

			<link rel='icon' href='/images/js/favicon.ico' type='image/x-icon' />

			{/* A bunch of icons. */}
			{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
				<link
					rel='icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`/images/js/icon-${dimension}.png`}
				/>,
				<link
					rel='apple-touch-icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`/images/js/icon-${dimension}.png`}
				/>
			])}

			<link rel='apple-touch-startup-image' href={props.siteMetadata.icon} />

			<meta
				name='apple-mobile-web-app-status-bar-style'
				content='black-translucent'
			/>

			{props.siteMetadata.title && (
				<>
					<meta
						key='openGraphSiteName'
						name='title'
						content={props.siteMetadata.title}
					/>
					<meta name='application-name' content={props.siteMetadata.title} />
					<meta
						name='apple-mobile-web-app-title'
						content={props.siteMetadata.title}
					/>
					<meta key='twitterTitle' name='twitter:title' content={props.siteMetadata.title} />
				</>
			)}
			{props.siteMetadata.title && (
				<meta
					key='openGraphTitle'
					property='og:title'
					content={props.siteMetadata.title}
				/>
			)}

			{props.siteMetadata.url && (
				<>
					<meta
						key='openGraphURL'
						property='og:url'
						content={props.siteMetadata.url}
					/>
					<link
						key='canonicalURL'
						rel='canonical'
						href={props.siteMetadata.url}
					/>
				</>
			)}

			{props.siteMetadata.i18n?.language && (
				<meta
					key='language'
					name='language'
					content={props.siteMetadata.i18n.language}
				/>
			)}
			{props.siteMetadata.i18n?.locale && (
				<meta
					key='openGraphLocale'
					property='og:locale'
					content={props.siteMetadata.i18n.locale}
				/>
			)}

			{props.siteMetadata.description && (
				<>
					<meta
						key='description'
						name='description'
						content={props.siteMetadata.description}
					/>
					<meta
						key='twitterDescription'
						name='twitter:description'
						content={props.siteMetadata.description}
					/>
					<meta
						key='openGraphDescription'
						property='og:description'
						content={props.siteMetadata.description}
					/>
				</>
			)}

			<meta property='og:type' content='website' />

			<meta name='twitter:card' content='summary' />

			<meta
				name='debugging'
				content={`theme color for the whole site: ${props.siteMetadata.themeColor}`}
			/>
			<meta
				key='themeColor'
				name='theme-color'
				content={props.siteMetadata.themeColor}
			/>
			<meta
				name='msapplication-navbutton-color'
				content={props.siteMetadata.themeColor}
			/>
			{props.siteMetadata.themeColor && (
				<>
					<meta
						key='themeColor'
						name='theme-color'
						content={props.siteMetadata.themeColor}
					/>
					<meta
						name='msapplication-navbutton-color'
						content={props.siteMetadata.themeColor}
					/>
				</>
			)}

			{props.siteMetadata.keywords && (
				<meta
					key='keywords'
					name='keywords'
					content={props.siteMetadata.keywords.join(', ')}
				/>
			)}
		</>
	);
}
