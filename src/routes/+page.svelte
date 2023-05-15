<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
// @ts-nocheck

	import {sheet_data} from "./stores.js"

	async function getData(sheet_id){
		const response = await fetch('/api/' + sheet_id);
		if(response.status == 200){
			const json = await response.json();
			return json;
		}else{
			return "Error";
		}
	}

	let sheet_id = ""
	let display_text = ""

	$: if(sheet_id != ""){
		display_text = "loading..."
		getData(sheet_id).then(value => {
			if(value != "Error"){
				sheet_data.set(JSON.stringify(value.data));
				display_text = "Successfully Loaded Sheet!";
			}else{
				display_text = "There was an error loading the sheet."
			}
		});
	}
</script>

<input bind:value={sheet_id} placeholder="sheet id">

{display_text}