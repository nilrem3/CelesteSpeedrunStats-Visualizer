<script>
// @ts-nocheck

    import { onDestroy, onMount } from "svelte";
    import {sheet_data} from "../stores.js"
    import Chart from "../Chart.svelte"

    let selected_level = "1a";
    let level_selector;
    let chart_data = {};

    async function process_sheet_data(data){
        //figure out data for each chart here

        //chart for number of runs of each chapter
        let data_dict = {};
        for(const run of data){
            let val = 1 + Number(run["First Room Deaths"]);
            if(!Object.keys(data_dict).includes(run["Level"]))
            {
                data_dict[run["Level"]] = 0;
            }
            data_dict[run["Level"]] += Number(val);
        }
        chart_data = {
            labels: Object.keys(data_dict),
            datasets: [
                {
                    label: "Runs per Level",
                    data: Object.entries(data_dict).map(entry => entry[1])
                }
            ]
        };
        console.log(data_dict);
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
    <option value="prologue">Prologue</option>
    <option value="1a">Forsaken City</option>
    <option value="2a">Old Site</option>
    <option value="3a">Celestial Resort</option>
    <option value="4a">Golden Ridge</option>
    <option value="5a">Mirror Temple</option>
    <option value="6a">Reflection</option>
    <option value="7a">Summit</option>
    <option value="8a">Core</option>
    <option value="1b">Forsaken City B-Side</option>
    <option value="2b">Old Site B-Side</option>
    <option value="3b">Celestial Resort B-Side</option>
    <option value="4b">Golden Ridge B-Side</option>
    <option value="5b">Mirror Temple B-Side</option>
    <option value="6b">Reflection B-Side</option>
    <option value="7b">Summit B-Side</option>
    <option value="8b">Core B-Side</option>
    <option value="1c">Forsaken City C-Side</option>
    <option value="2c">Old Site C-Side</option>
    <option value="3c">Celestial Resort C-Side</option>
    <option value="4c">Golden Ridge C-Side</option>
    <option value="5c">Mirror Temple C-Side</option>
    <option value="6c">Reflection C-Side</option>
    <option value="7c">Summit C-Side</option>
    <option value="8c">Core C-Side</option>
    <option value="9">Farewell</option>
</select>

<Chart type="pie" data={chart_data}/>
