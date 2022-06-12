<script>
	import { onMount } from 'svelte';

	import Header from '$lib/header/Header.svelte';
	import logo from '$lib/header/aufbau-logo.png';
	import '../app.css';

	let Geometry;

	onMount(async () => {
		const module = await import('$lib/geometry/Geometry.svelte');
		Geometry = module.default;
	});
</script>

<Header />

<div class="background" />

<svelte:component this={Geometry} />

<main>
	<slot />
</main>

<footer>
	<div class="corner">
		<a href="https://aufbau.io">
			<img src={logo} alt="SvelteKit" />
			aufbau<br>io.web
		</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;

		overflow: hidden;
	}

	.background {
		height: 100%;
		width: 80%;
		max-width: 75rem;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
		background: #171717ee;
		border-left: solid 1px 	var(--heading-color);
		border-right: solid 1px	var(--heading-color);
		z-index: -1;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: start;
		padding: 20px;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
		position: absolute;
	}

	.corner {
		width: 7em;
		height: 0em;
		margin: .5rem;
		opacity: .3;
	}

	.corner:hover {
		opacity: 1;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: .8rem;
		line-height: .8rem;
		color: var(--aufbau-color)
	}

	.corner img {
		width: 3em;
		height: 2.5em;
		object-fit: contain;
	}

	a:hover {
		color: var(--accent-color);
	}


	@media (min-width: 480px) {
		footer {
			padding: 53px 0;
		}
	}
</style>
