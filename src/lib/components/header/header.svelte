<script>
	import Nav from './nav.svelte';
	// stub data out
	const navItems = [
		{
			name: 'HOME',
			href: '/'
		}
	];
</script>

<header>
	<a href="/"><p>HEDRON hACKERSPACE</p> </a>
	<Nav {navItems} />
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		height: 34px;
		border-bottom: solid 1px var(--accent);
		color: var(--accent);
		user-select: none;
	}
</style>
