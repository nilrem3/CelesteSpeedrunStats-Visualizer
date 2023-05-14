<script>
    export let tab_name;
    export let text;
</script>

    <a href={tab_name}>{text}</a>

<style>
    a {
        height: 4em;
        width: 6em;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 5px;
        color: black;
        text-decoration: none;
    }
</style>