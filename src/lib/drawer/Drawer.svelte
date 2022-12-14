<script lang="ts">
	import links from './links';
	import Drawer, { Content, Header, Title, Subtitle, AppContent, Scrim } from '@smui/drawer';
	import List, { Item, Text, Graphic } from '@smui/list';
	import IconButton, { Icon } from '@smui/icon-button';
	import Accordion, {
		Panel,
		Header as PanelHeader,
		Content as PanelContent
	} from '@smui-extra/accordion';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

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
		dispatch('childButtonClick', { open: !open });
	}
</script>

<Drawer variant="modal" {open} style="min-width: 320px;">
	<Header>
		<Title>ACE Helper</Title>
		<Subtitle>Helpful tools</Subtitle>
	</Header>
	<Content>
		<List>
			{#each links as link (link.href)}
				{#if link.children}
					<Accordion>
						<Panel>
							<PanelHeader on:click={() => (link.open = !link.open)}>
								{link.label}
								<IconButton slot="icon">
									<Icon class="material-icons">
										{link.open ? 'expand_less' : 'expand_more'}
									</Icon>
								</IconButton>
							</PanelHeader>
							<PanelContent>
								{#each link.children as child (child.href)}
									<Item
										href={child.href}
										on:click={() => setActive(child.label)}
										activated={active === child.label}
									>
										<Text>{child.label}</Text>
									</Item>
								{/each}
							</PanelContent>
						</Panel>
					</Accordion>
				{:else}
					<Item
						href={link.href}
						on:click={() => setActive(link.label)}
						activated={active === link.label}
					>
						<Graphic class="material-icons" aria-hidden="true">
							{link.icon}
						</Graphic>
						<Text>{link.label}</Text>
					</Item>
				{/if}
			{/each}
		</List>
	</Content>
</Drawer>

<Scrim />
<AppContent>
	<slot />
</AppContent>
