<div><slot /></div>

<style lang="scss">
	@use 'sass:math';

	@use '../../styles/breakpoints.scss';

	div {
		// Button group
		display: flex;

		flex-flow: column nowrap;

		@include breakpoints.tablet {
			margin: {
				left: -1em;
				top: 1em;
				bottom: 1em;
			}

			flex-flow: row wrap;
		}
	}
</style>
