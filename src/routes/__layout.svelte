<script lang="ts">
	import AppHeader from '$lib/header/Header.svelte';
	import AppDrawer from '$lib/drawer/Drawer.svelte';

	/**
	 * Determines if the drawer is currently open
	 */
	let open = false;
</script>

<AppDrawer {open}>
	<AppHeader {open} on:menuButtonClick={(e) => (open = e.detail.open)}>
		<span slot="content">
			<slot />
		</span>
	</AppHeader>
</AppDrawer>
