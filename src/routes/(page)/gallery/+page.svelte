<script>
</script>

<main>
	<span class="justify-letters">
		<div class="scroll">
			<img class="slide" src="/assets/4.jpg" alt="img" />
			<img class="slide" src="/assets/11.jpg" alt="img" />
			<img class="slide" src="/assets/2.jpg" alt="img" />
			<img class="slide" src="/assets/3.jpg" alt="img" />
			<img class="slide" src="/assets/5.jpg" alt="img" />
			<img class="slide" src="/assets/6.jpg" alt="img" />
			<img class="slide" src="/assets/7.jpg" alt="img" />
			<img class="slide" src="/assets/8.jpg" alt="img" />
			<img class="slide" src="/assets/9.jpg" alt="img" />
			<img class="slide" src="/assets/10.jpg" alt="img" />
			<img class="slide" src="/assets/1.jpg" alt="img" />
		</div>
	</span>
</main>

<style>
	main {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);

		border-top: solid 1px var(--accent);
		border-bottom: solid 1px var(--accent);

		width: 100vw;
		height: 100%;
		padding: 0 0;

		color: var(--accent);
		text-transform: uppercase;
		user-select: none;

		display: flex;
		align-items: center;

		font-family: 'nb-architekt', sans-serif;
	}

	.scroll {
		width: 100%;
		height: 100%;
		padding-top: 50px;
		padding-bottom: 100px;
		border: solid 1px var(--accent);
		overflow-y: auto;
	}

	.scroll img {
		width: inherit;
	}

	.justify-letters {
		display: inline-block;
		text-align: justify;
		text-align-last: justify;
		width: 66.7%;
		height: 100%;
		margin: 0 auto;
		overflow: auto;
	}

	@media only screen and (max-width: 1080px) {
		.scroll {
			padding-bottom: 120px;
		}
	}

	@media only screen and (max-width: 768px) {
		.justify-letters {
			width: 100%;
		}

		.scroll {
			padding-top: 70px;
			padding-bottom: 50px;
			border-left: none;
			border-right: none;
		}
	}
</style>
