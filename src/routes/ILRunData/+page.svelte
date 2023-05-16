<script>
// @ts-nocheck

	import { onDestroy, onMount } from "svelte";
    import {sheet_data} from "../stores.js"
    import Chart from "../Chart.svelte"

    let selected_level = "1a";
    let level_selector;

    async function process_sheet_data(data){
        //TODO: figure out data for each chart here
    }

    const unsubscribe = sheet_data.subscribe(data => {
        process_sheet_data(data);
    });
    onDestroy(unsubscribe);

    onMount(async () => {
        level_selector.addEventListener("change", (event) => {
            selected_level = event.target.value;
        });
    });
</script>

<select bind:this={level_selector}>
    <option value="prologue">prologue</option>
    <option value="1a">1a</option>
    <option value="2a">2a</option>

    <!--TODO: Finish this selector-->
</select>

