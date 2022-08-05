<script lang="ts">
	import links from './links';
	import Drawer, { Content, Header, Title, Subtitle, AppContent } from '@smui/drawer';
	import List, { Item, Text, Graphic } from '@smui/list';

	/**
	 * Determines if the drawer is currently open
	 */
	export let open: boolean;

	/**
	 * The currently active tab
	 */
	let active = 'Home';

	/**
	 * Sets a selected tab as active
	 *
	 * @param {string} value - The value to set as `active`
	 * @return void
	 */
	function setActive(value: string) {
		active = value;
	}
</script>

<Drawer variant="dismissible" {open}>
	<Header>
		<Title>ImBrett</Title>
		<Subtitle>Just another Dev site.</Subtitle>
	</Header>
	<Content>
		<List>
			{#each links as link (link.href)}
				<Item
					href={link.href}
					on:click={() => setActive(link.label)}
					activated={active === link.label}
				>
					<Graphic class="material-icons" aria-hidden="true">{link.icon}</Graphic>
					<Text>{link.label}</Text>
				</Item>
			{/each}
		</List>
	</Content>
</Drawer>

<AppContent>
	<slot />
</AppContent>
