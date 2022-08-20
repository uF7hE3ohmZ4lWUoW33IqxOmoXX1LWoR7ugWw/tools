<script lang="ts">
	import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import Credits from '$lib/guild-boss-calculator/credits.svelte';
	import Table from '$lib/guild-boss-calculator/table.svelte';

	import { calculate_points_for_heroes, calculate_turn_points } from '$lib/guild-boss-calculator/calculations'
	import { test_speeds } from '$lib/guild-boss-calculator/data'

	let active = 'Team 1';

	$: calcs = calculate_points_for_heroes(test_speeds);
	$: team_turn_calcs = calculate_turn_points(test_speeds);
</script>

<svelte:head>
	<title>Guild Boss Calculator</title>
	<meta name="description" content="Awaken: Chaos Era guild boss calculator" />
</svelte:head>

<Credits />

<LayoutGrid>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<TabBar tabs={['Team 1', 'Team 2']} let:tab bind:active>
			<Tab {tab}>
				<Label>{tab}</Label>
			</Tab>
		</TabBar>

		{#if active === 'Team 1'}
			<Table {team_turn_calcs} />
		{:else if active === 'Team 2'}
			other tab
		{/if}
	</Cell>
</LayoutGrid>
