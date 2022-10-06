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
	<span class="page">
		<span class="justify-letters">
			<p class="lrg">
				we are a community hackerspace in south east Portland, currently looking for new members.
			</p>
		</span>
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
		background: var(--black);
		border-top: solid 1px var(--accent);
		border-bottom: solid 1px var(--accent);

		width: 100vw;
		padding: 10px 40px;

		color: var(--accent);
		text-transform: uppercase;
		user-select: none;

		display: flex;
		align-items: center;

		font-family: 'nb-architekt', sans-serif;
	}

	.justify-letters {
		display: inline-block;
		text-align: justify;
		text-align-last: justify;
		width: 66.7%;
		margin: 0 auto;
	}
</style>
