<script>
</script>

<main>
	<span class="justify-letters">
		<p class="lrg">membership</p>
	</span>
</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);

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

	@media only screen and (max-width: 768px) {
		.justify-letters {
			width: 100%;
		}
	}
</style>
