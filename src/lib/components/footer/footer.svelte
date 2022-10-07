<script>
	import { screenType } from '$lib/store/store';
	let showFooter = false;
	let toggleShowFooter = () => {
		showFooter = !showFooter;
	};

	$: contactText = showFooter ? 'HIDE CONACT' : 'CONTACT';
</script>

<footer>
	{#if showFooter == true || $screenType == 3}
		<section>
			<div class="base highlight">
				<a href="https://discord.gg/X84tscW" class="discord"><h5>Join us on Discord</h5></a>
				<a href="https://hhacker.space/wiki/" class="wiki"><h5>Visit our Wiki</h5></a>
			</div>
			<div class="base">
				<p>address: 2020 SE Bush St Portland, OR 97202</p>
				<p>phone: (971) 248-0034</p>
				<p>email: hedron.hackerspace@gmail.com</p>
				<p>hours: Open Most Days, Please call ahead</p>
				<a class="sml" href="https://aufbau.io" target="_blank">ein aufbau ding</a>
			</div>
		</section>
	{/if}
	{#if $screenType == 1 || $screenType == 2}
		<h4 on:click={() => toggleShowFooter()}>{contactText}</h4>
	{/if}
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		padding: 10px 20px;
		width: 100vw;
		border-top: solid 1px var(--accent);
		background: var(--black);
		color: var(--accent);
	}

	p,
	a {
		margin: 5px 0px;
	}

	.base {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		height: auto;
	}

	@media only screen and (max-width: 768px) {
		footer {
			background: var(--accent);
			color: var(--black);
		}
		section {
			height: calc(50vh + 2px);
		}

		h5 {
			font-size: 22px;
			font-weight: 700;
		}

		p,
		a {
			font-size: 16px;
			font-weight: 700;
		}
	}
</style>
