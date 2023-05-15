<script>
// @ts-nocheck

	import { onDestroy } from "svelte";
    import {sheet_data} from "../stores.js"

    let ils = []

    const unsubscribe = sheet_data.subscribe(data => {
        let ils_object = {};
        for(const run of data){
            console.log(JSON.stringify(run));
            if(run.Level in ils_object){
                ils_object[run.Level] += 1;
            }else{
                ils_object[run.Level] = 1;
            }
        }

        ils = Object.entries(ils_object);
    });
    onDestroy(unsubscribe);
</script>

{#each ils as il}
    {il[0]} was played {il[1]} times. <br>
{/each}
