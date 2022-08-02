<script lang="ts">
	import Drawer, { Content, Header, Title, Subtitle, AppContent } from '@smui/drawer';
	import Button, { Label, Icon } from '@smui/button';
	import { Svg } from '@smui/common/elements';
	import { mdiMenu } from '@mdi/js';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
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
</script>

<div>
	<Drawer variant="dismissible" bind:open>
		<Header>
			<Title>ImBrett</Title>
			<Subtitle>Just another Dev site.</Subtitle>
		</Header>
		<Content>
			<List>
				<Item href={'#'} on:click={() => setActive('Home')} activated={active === 'Home'}>
					<Graphic class="material-icons" aria-hidden="true">home</Graphic>
					<Text>Home</Text>
				</Item>
			</List>
		</Content>
	</Drawer>

	<AppContent>
		<main>
			<Button on:click={() => (open = !open)}>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiMenu} />
				</Icon>
			</Button>
		</main>
	</AppContent>
</div>
