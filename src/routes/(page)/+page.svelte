<script>
	import { onMount } from 'svelte';
	let Geometry;

	onMount(async () => {
		const module = await import('$lib/components/geometry/geometry.svelte');
		Geometry = module.default;
	});
</script>

<main>
	<svelte:component this={Geometry} />
	<span class="page justify-letters">
		we are a community hackerspace in SE Portland, currently looking for new members.
	</span>
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		overflow: hidden;
		display: flex;
	}

	.page {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		background: #0b0b0b88;

		width: 100vw;
		padding: 40px 40px;
		font-size: 4.6vw;
		color: var(--accent);
		text-transform: uppercase;
		user-select: none;

		display: flex;
		align-items: center;

		font-family: 'nb-television-3d', sans-serif;
		text-shadow: -3px 2px var(--black);
	}

	.justify-letters {
		display: inline-block;
		text-align: justify;
		text-align-last: justify;
	}
</style>
