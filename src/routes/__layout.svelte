<script lang="ts">
	import Button from '@smui/button';
	import FormField from '@smui/form-field';
	import Switch from '@smui/switch';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Label, Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiCog, mdiMenu } from '@mdi/js';
	import Drawer, { Content, Header, Subtitle, AppContent } from '@smui/drawer';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import { H6 } from '@smui/common/elements';

	/**
	 * Determines if the drawer is currently open
	 */
	let open = false;

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

	/**
	 * The app bar instance
	 */
	let topAppBar: TopAppBarComponentDev;

	/**
	 * The settings menu instance
	 */
	let settingsMenu: MenuComponentDev;

	/**
	 * Determines if the user is using a light theme on their browser
	 */
	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;

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

<Drawer variant="dismissible" bind:open>
	<Header>
		<Title>ImBrett</Title>
		<Subtitle>Just another Dev site.</Subtitle>
	</Header>
	<Content>
		<List>
			<Item href="/" on:click={() => setActive('Home')} activated={active === 'Home'}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>Home</Text>
			</Item>
			<Item href="/about" on:click={() => setActive('About')} activated={active === 'About'}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>About</Text>
			</Item>
			<Item href="/todos" on:click={() => setActive('Todos')} activated={active === 'Todos'}>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>Todos</Text>
			</Item>
		</List>
	</Content>
</Drawer>

<AppContent>
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				<Button on:click={() => (open = !open)}>
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiMenu} />
					</Icon>
				</Button>
				<Title>ImBrett</Title>
			</Section>
			<Section align="end" toolbar>
				<Button on:click={() => settingsMenu.setOpen(true)}>
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiCog} />
					</Icon>
				</Button>
			</Section>
		</Row>
	</TopAppBar>

	<AutoAdjust {topAppBar}>
		<div>
			<slot />
			<!-- <Menu bind:this={settingsMenu}>
				<List>
					<Item>
						<Switch on:click={switchTheme} />
						<Text>{lightTheme ? 'Lights off' : 'Lights on'}</Text>
					</Item>
				</List>
			</Menu> -->
		</div>
	</AutoAdjust>
</AppContent>
