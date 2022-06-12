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
	<title>Contact | Hedron Hackerspace</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>h.h Contact</h1>

	<div class="box">
		<p>
		 Address:
		 <br><br>
		 2020 SE Bush St
		 Portland, OR 97202
		</p>
		<p>
			Phone:
			<br><br>
			(971) 248-0034
		</p>
		 <p>
			Email:
			<br><br>
			hedron.hackerspace@gmail.com
		 </p>
		 <p>
			Hours:
			<br><br>
			Open Most Days<br> - Please call ahead to<br> see if anyone is around.
		 </p>
		 <a href="https://www.paypal.com/biz/fund?id=5DN2LXUAM638Q">
			Donate
		 </a>
		 <a href="https://hhacker.space/subscribe.htm">
			Monthly Subscription
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

	.box p, .box a {
		flex-grow: 1;
		margin: 1rem;
		padding: 0 1rem;
		height: 11.8rem;
		border: solid 1px var(--heading-color);
		background: var(--primary-color);
		font-size: 1rem;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box a {
		background: var(--muted-heading-color);
		border: solid 7px var(--primary-color);
		color: var(--primary-color);
		border-style: double;
		cursor: pointer;
	}
</style>
