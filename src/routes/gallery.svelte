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
	<title>Gallery | Hedron Hackerspace</title>
	<meta name="description" content="Meet your Maker(s)" />
</svelte:head>

<div class="content">
	<h1>h.h Gallery</h1>

	<div class="box"></div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		text-align: center;
	}
	
	.box {
		flex-grow: 1;
		width: calc(100% - 4rem);
		margin: 3rem 1rem;
		padding: 0 1rem;
		height: 40.3rem;
		border: solid 1px var(--heading-color);
		background: var(--primary-color);

	}
</style>
