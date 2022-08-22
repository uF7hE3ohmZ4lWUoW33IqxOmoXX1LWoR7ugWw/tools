<script lang="ts">
	import { beforeUpdate } from 'svelte';

	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Credits from '$lib/guild-boss-calculator/credits.svelte';
	import Table from '$lib/guild-boss-calculator/table.svelte';
	import Form from '$lib/guild-boss-calculator/form.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	import { calculate_turn_points_for_team } from '$lib/guild-boss-calculator/calculations';
	import { generate_team } from '$lib/guild-boss-calculator/data';

	let is_phone = false;
	let is_tablet = false;
	let is_desktop = true;
	let active = 'Team 1';

	beforeUpdate(() => {
		is_phone = window.matchMedia('(max-width: 600px)').matches;
		is_tablet = window.matchMedia('(max-width: 840px)').matches;
		is_desktop = !is_phone && !is_tablet;
	});

	$: is_phone;
	$: is_tablet;
	$: is_desktop;
	$: team_1 = generate_team();
	$: team_2 = generate_team();
	$: team_1_turn_calcs = calculate_turn_points_for_team(team_1);
	$: team_2_turn_calcs = calculate_turn_points_for_team(team_2);
</script>

<svelte:head>
	<title>Guild Boss Calculator</title>
	<meta name="description" content="Awaken: Chaos Era guild boss calculator" />
</svelte:head>

<svelte:window />

<Credits />

<LayoutGrid>
	{#if is_phone}
		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
			<TabBar tabs={['Team 1', 'Team 2']} let:tab bind:active>
				<Tab {tab}>
					<Label>{tab}</Label>
				</Tab>
			</TabBar>
		</Cell>

		{#if active === 'Team 1'}
			<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
				<Form bind:team={team_1} />
			</Cell>
			<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
				<Table bind:team_turn_calcs={team_1_turn_calcs} />
			</Cell>
		{:else}
			<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
				<Form bind:team={team_2} />
			</Cell>
			<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
				<Table bind:team_turn_calcs={team_2_turn_calcs} />
			</Cell>
		{/if}
	{:else if is_tablet}
		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
			<Form bind:team={team_1} />
		</Cell>
		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
			<Form bind:team={team_2} />
		</Cell>
		<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
			<Table bind:team_turn_calcs={team_1_turn_calcs} />
		</Cell>
		<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
			<Table bind:team_turn_calcs={team_2_turn_calcs} />
		</Cell>
	{:else if is_desktop}
		<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
			<Table bind:team_turn_calcs={team_1_turn_calcs} />
		</Cell>
		<Cell spanDevices={{ desktop: 6, tablet: 8, phone: 4 }}>
			<Form bind:team={team_1} />
			<Form bind:team={team_2} />
		</Cell>
		<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
			<Table bind:team_turn_calcs={team_2_turn_calcs} />
		</Cell>
	{/if}
</LayoutGrid>
