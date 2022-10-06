<script>
	import '../../app.css';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import { onMount } from 'svelte';

	let Geometry;

	onMount(async () => {
		const module = await import('$lib/components/geometry/geometry.svelte');
		Geometry = module.default;
	});
</script>

<svelte:head>
	<title>HEDRON HACKERSPACE</title>
</svelte:head>

<svelte:component this={Geometry} />

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		max-width: 100vw;
	}
</style>
