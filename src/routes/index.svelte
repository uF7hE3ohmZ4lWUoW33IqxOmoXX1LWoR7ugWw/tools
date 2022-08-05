<script lang="ts">
	import Hero from '$lib/home/Hero.svelte';
	import PageSection from '$lib/shared/PageSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ImBrett Homepage" />
</svelte:head>

<div><Hero /></div>
<div>
	<PageSection title="test" text="test" img="https://via.placeholder.com/1600x900" flip={false} />
</div>
