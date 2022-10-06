<script>
	import Nav from './nav.svelte';
	// stub data out
	const navItems = [
		{
			name: 'HOME',
			href: '/'
		},
		{
			name: 'MEMBERSHIP',
			href: '/membership'
		},
		{
			name: 'GALLERY',
			href: '/gallery'
		}
	];
</script>

<header>
	<a href="/"><h6>HEDRON hACKERSPACE</h6> </a>
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
		background: var(--black);
		padding: 10px 20px;

		display: flex;
		gap: 10px;
		flex-flow: row wrap;

		border-bottom: solid 1px var(--accent);
		color: var(--accent);
		user-select: none;
	}

	@media only screen and (max-width: 768px) {
		a {
			width: 100vh;
		}
	}
</style>
