<script>
	import Chart from 'chart.js/auto'
	import { onMount } from 'svelte'

	export let type;
	export let data;
	let canvas;
	onMount(async () => {
		new Chart(canvas,
		{
			type:type,
			data: data
		});
	});
</script>

<div><canvas bind:this={canvas}/></div>
