<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import List, { Item, Text } from '@smui/list';
	import MenuSurface from '@smui/menu-surface';
	import IconButton from '@smui/icon-button';

	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import type { MenuSurfaceComponentDev } from '@smui/menu-surface';

	export let open: boolean;
	let topAppBar: TopAppBarComponentDev;

	/**
	 * The settings menu instance
	 */
	let settingsMenu: MenuSurfaceComponentDev;

	const dispatch = createEventDispatcher();
	const onMenuButtonClick = () => {
		dispatch('menuButtonClick', { open: !open });
	};

	/**
	 * Determines if the user is using a light theme on their browser
	 */
	let lightTheme =
		typeof window === 'undefined' || !window.matchMedia('(prefers-color-scheme: dark)').matches;

	/**
	 * Toggles the theme from light to dark
	 */
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton on:click={onMenuButtonClick} class="material-icons">menu</IconButton>
			<Title>ImBrett</Title>
		</Section>
		<Section align="end" toolbar>
			<slot name="header-icons" />
			<IconButton on:click={() => settingsMenu.setOpen(true)} class="material-icons">
				settings
				<MenuSurface bind:this={settingsMenu} anchorCorner="BOTTOM_START">
					<List>
						<Item on:click={switchTheme}>
							<Text>Switch to {lightTheme ? 'dark' : 'light'} mode</Text>
						</Item>
					</List>
				</MenuSurface>
			</IconButton>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<slot name="content" />
</AutoAdjust>
