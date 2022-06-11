<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Workshops | Hedron Hackerspace</title>
	<meta name="description" content="Hedron Hackerspace Workshops" />
</svelte:head>

<div class="content">
	<h1>workshops</h1>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta tempor neque. Pellentesque in condimentum enim.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		text-align: center;
	}
</style>
