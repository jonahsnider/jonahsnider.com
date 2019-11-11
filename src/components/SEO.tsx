import React from 'react';
import SiteMetadata from '../../types/site-metadata';
import {getPageTitle} from '../util/util';

/**
 * A collection of SEO tags that use values from a site-wide or page specific config.
 */
export default function SEO(props: {siteMetadata: SiteMetadata}): JSX.Element {
	const pageTitle = getPageTitle(props.siteMetadata);

	return (
		<>
			<link rel='manifest' href='/manifest.webmanifest' />

			<meta name='mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-capable' content='yes' />

			<meta name='msapplication-starturl' content='/' />

			{props.siteMetadata.icon && (
				<>
					{/* Icon in the highest resolution we need it for */}
					<link rel='icon' sizes='192x192' href={props.siteMetadata.icon} />

					{/* Reuse same icon for Safari */}
					<link rel='apple-touch-icon' href={props.siteMetadata.icon} />
					<link
						rel='apple-touch-startup-image'
						href={props.siteMetadata.icon}
					/>
				</>
			)}

			<meta
				name='apple-mobile-web-app-status-bar-style'
				content='black-translucent'
			/>

			{pageTitle && (
				<meta key='twitterTitle' name='twitter:title' content={pageTitle} />
			)}

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
				</>
			)}
			{(props.siteMetadata.page?.title ?? props.siteMetadata.title) && (
				<meta
					key='openGraphTitle'
					property='og:title'
					content={props.siteMetadata.page?.title ?? props.siteMetadata.title}
				/>
			)}

			{(props.siteMetadata.url ?? props.siteMetadata.page?.url) && (
				<>
					<meta
						key='openGraphURL'
						property='og:url'
						content={props.siteMetadata.page?.url ?? props.siteMetadata.url}
					/>
					<link
						key='canonicalURL'
						rel='canonical'
						href={props.siteMetadata.page?.url ?? props.siteMetadata.url}
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

			{(props.siteMetadata.page?.description ??
				props.siteMetadata.description) && (
				<>
					<meta
						key='description'
						name='description'
						content={
							props.siteMetadata.page?.description ??
							props.siteMetadata.description
						}
					/>
					<meta
						key='twitterDescription'
						name='twitter:description'
						content={
							props.siteMetadata.page?.description ??
							props.siteMetadata.description
						}
					/>
					<meta
						key='openGraphDescription'
						property='og:description'
						content={
							props.siteMetadata.page?.description ??
							props.siteMetadata.description
						}
					/>
				</>
			)}

			<meta property='og:type' content='website' />

			<meta name='twitter:card' content='summary' />

			{props.siteMetadata.page?.themeColor ||
				(props.siteMetadata.themeColor && (
					<>
						<meta
							key='themeColor'
							name='theme-color'
							content={
								props.siteMetadata.page?.themeColor ??
								props.siteMetadata.themeColor
							}
						/>
						<meta
							name='msapplication-navbutton-color'
							content={props.siteMetadata.themeColor}
						/>
					</>
				))}

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
