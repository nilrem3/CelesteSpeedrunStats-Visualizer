<script>
	import TabButton from "./TabButton.svelte"
</script>

<div>
	<TabButton text="Home" tab_name = "/"/>
	<TabButton text="IL Run Data" tab_name="ILRunData"/>
	<TabButton text="Full Game Run Data" tab_name="FullRunData"/>
	<TabButton text="Compare Session Data" tab_name="Compare"/>
	<TabButton text="Runner Data" tab_name="RunnerData"/>
	<TabButton text="By Machliah and Nilrem" tab_name="About"/>
</div>

<style>
	div {
		display:flex;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>

