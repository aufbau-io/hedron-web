<script>
	import '../../app.css';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<svelte:head>
	<title>HEDRON HACKERSPACE</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
</style>
