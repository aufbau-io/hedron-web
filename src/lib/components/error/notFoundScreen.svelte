<script>
</script>

<svelte:head>
	<title>404 not found</title>
</svelte:head>
<section>
	<h2>404 error.</h2>
</section>

<style>
	section {
		display: flex;
		height: 100vh;
		align-items: center;
		justify-content: center;
	}

	section div {
		height: 100vh;
		align-items: center;
	}

	.message {
		margin: auto auto;
		height: auto;
		width: auto;
	}

	section .message h2 {
		font-weight: 300;
	}

	section .message p {
		font-weight: 300;
		line-height: 150%;
		padding-top: 1em;
	}

	@media only screen and (max-width: 976px) {
		section {
			flex-direction: column;
			height: 100vh;
		}

		section div {
			height: auto;
		}
	}

	@media only screen and (max-width: 768px) {
		.message {
			margin: auto auto;
			padding: 0 2rem;
		}

		.message h2 {
			font-size: 33px;
		}
	}
</style>
