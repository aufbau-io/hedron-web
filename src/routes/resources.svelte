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
	<title>Resources | Hedron Hackerspace</title>
	<meta name="description" content="Hedron Hackerspace Workshops" />
</svelte:head>

<div class="content">
	<h1>h.h Resources</h1>

	<div class="box">
		<a class="full" href="https://hhacker.space/wiki/">
		 Hedron Hackerspace Wiki
		</a>
		<a href="https://docs.google.com/document/d/1l3CDsCe_zyb_0C0pht6DiqpAUETnxGl8E7gCGvtW7kc/edit?usp=sharing">
			Membership<br>Info.
		</a>
		 <a href="https://discord.gg/ZSknb6pw5c">
			Join us on Discord
		 </a>
		 <a href="https://trello.com/b/it8auoJj/hedron-hackerspace">
			Volunteering<br>and Wishlist
		 </a>
		 <a href="https://docs.google.com/spreadsheets/d/1ek1TD5_b3T5c9AKcOt6cdKx2wKrkv_jVnbovPsvvtsY/edit?usp=sharing">
			Prices
		 </a>
		 <a href="https://www.etsy.com/shop/HedronHackerspace">
			Support us<br>on Etsy.com
		 </a>
		 <a href="https://drive.google.com/open?id=11TBfFzgVBX-4quV9uxHzIntFrgItW8HP">
			Docs and Info.
		 </a>
	</div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		text-align: center;
	}

	.box {
		display: flex;
		flex-wrap: wrap;
	}

	.box a {
		flex-grow: 1;
		width: calc(100% / 5);
		margin: 1rem;
		padding: 0 1rem;
		height: 12rem;
		border: solid 1px var(--heading-color);
		background: var(--primary-color);

		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.box a.full {
		flex-grow: 3;
		width: 100%;
	}

	.box a:hover {
		background: var(--muted-heading-color);
		color: var(--primary-color);
	}

</style>
