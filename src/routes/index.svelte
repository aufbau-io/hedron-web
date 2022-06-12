<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>About | Hedron Hackerspace</title>
	<meta name="description" content="DIY space in SE portland - looking for new members!" />
</svelte:head>

<section>
	<h1>
		Hedron Hackerspace
	</h1>

	<div class="box">
		<h2>
			DIY space in SE portland 
			<br>
			 - looking for new members -
		</h2>
		<p>
			We’re an inclusive bunch of makers, hackers and artists, sharing space and equipment. 
			<br><br>
			h.h exists to foster community and creativity, with the accessibility of some modern tools such as 3D printers, laser cutters, welders, etc.. 
			<br><br>
			We’re a do-ocracy where members and volunteers are encouraged to put forth their energy wherever they see fit.  
			<br><br>
			Join our discord, or come by during business hours for a tour!
		</p>
	</div>


</section>

<style>
	section {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		text-align: center;
	}

	section .box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	section .box {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}

	section h2 {
		padding-bottom: 2rem;
	}
	
	.box p {
		flex-grow: 1;
		margin: 1rem;
		width: calc(100% - 4rem);
		padding: 0 4rem;
		height: 31.3rem;
		border: solid 1px var(--heading-color);
		background: var(--primary-color);
		font-size: 1rem;

		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
