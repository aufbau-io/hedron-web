<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { screenType } from '$lib/store/store';

	onMount(async () => {
		// ---------------------------------------------------------------------------
		// SCREEN
		// ---------------------------------------------------------------------------
		const ua = navigator.userAgent;
		if (window.location !== window.parent.location) {
			// The page is in an iframe
			// default to phone on iframe
			screenType.set(1);
		} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// The page is not in an iframe
			// tablet
			screenType.set(2);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			// darkMode.set(false);
			// document.querySelector(':root').classList.toggle('dark-mode');
			screenType.set(1);
		} else {
			//laptop
			screenType.set(3);
		}
	});
</script>

<slot />
