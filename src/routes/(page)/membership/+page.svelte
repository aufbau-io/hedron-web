<script>
</script>

<main>
	<span class="justify-letters">
		<div class="table">
			<a href="https://hhacker.space/subscribe.htm" class="highlight no-top">
				Buy a Monthly Subscription
			</a>
			<a
				href="https://docs.google.com/document/d/1l3CDsCe_zyb_0C0pht6DiqpAUETnxGl8E7gCGvtW7kc/edit?usp=sharing"
				class="no-top"
			>
				Membership Info
			</a>
			<a href="https://trello.com/b/it8auoJj/hedron-hackerspace"> Volunteering and Wishlist </a>
			<a
				href="https://docs.google.com/spreadsheets/d/1ek1TD5_b3T5c9AKcOt6cdKx2wKrkv_jVnbovPsvvtsY/edit?usp=sharing"
			>
				Prices
			</a>
			<a href="https://www.etsy.com/shop/HedronHackerspace"> Support us on Etsy </a>
			<a href="https://drive.google.com/open?id=11TBfFzgVBX-4quV9uxHzIntFrgItW8HP">
				Docs and Info
			</a>
			<a href="https://www.paypal.com/biz/fund?id=5DN2LXUAM638Q"> Donate </a>
		</div>
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
		padding: 0px 40px;

		color: var(--accent);
		text-transform: uppercase;
		user-select: none;

		display: flex;
		align-items: center;

		font-family: 'nb-architekt', sans-serif;
	}

	.justify-letters {
		width: 50%;
		min-width: 800px;
		margin: 0 auto;
	}

	.table {
		display: flex;
		flex-flow: row wrap;
	}

	a {
		padding: 40px 60px;
		border: solid 1px var(--accent);

		border-bottom: none;
		text-align: center;
		flex-basis: auto;
		flex-grow: 1;
	}

	a.highlight,
	a.highlight {
		text-decoration: underline;
		text-underline-offset: 10px;
	}

	a:hover {
		background: var(--accent);
		color: var(--black);
	}

	a.no-top {
		border-top: none;
	}

	@media only screen and (max-width: 768px) {
		.justify-letters {
			width: 80vw;
		}
	}
</style>
