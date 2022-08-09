<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Select, { Option } from '@smui/select';
	import List, { Item, Text } from '@smui/list';
	import Card, { Content } from '@smui/card';
	import {
		exp_level_requirements,
		charms_experience,
		gear_experience,
		calculations
	} from '$lib/gear-calculator/data';

	import type { ICalculations, ExpLevelRequirement } from '$lib/gear-calculator/data';

	let current_level = { level: 0, exp_required: 0 };
	let target_level = { level: 0, exp_required: 0 };
	let calcs: ICalculations = calculations(current_level, target_level);
	const recalculate = () => (calcs = calculations(current_level, target_level));
</script>

<svelte:head>
	<title>Gear Calculator</title>
	<meta name="description" content="Awaken: Chaos Era Gear enhancement calculator" />
</svelte:head>

<LayoutGrid>
	<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 4 }}>
		<Card padded>
			<Select
				bind:value={current_level}
				on:focusout={recalculate}
				label="Current Level"
				key={(level) => `${(level && level.level) || ''}`}
			>
				<Option value={{ level: '', exp_required: 0 }} />
				{#each exp_level_requirements as level (level.level)}
					<Option value={level}>{level.level}</Option>
				{/each}
			</Select>

			<Select
				bind:value={target_level}
				on:focusout={recalculate}
				label="Target Level"
				key={(level) => `${(level && level.level) || ''}`}
			>
				<Option value={{ level: '', exp_required: 0 }} />
				{#each exp_level_requirements as level (level.level)}
					<Option value={level}>{level.level}</Option>
				{/each}
			</Select>
		</Card>
	</Cell>

	<Cell spanDevices={{ desktop: 9, tablet: 4, phone: 4 }}>
		<Card padded>
			<h2 class="mdc-typography--headline6" style="margin: 0;">
				EXP Required: {calcs.exp_required}
			</h2>
			<h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
				Breakdown of materials needed
			</h3>
			<Content component={List}>
				{#each gear_experience as gear, i (gear.stars)}
					<Item
						>{gear.stars}* Equipment ({gear.exp_granted} exp) - {calcs.gear_required[i]} Required</Item
					>
				{/each}
				{#each charms_experience as charm, i (charm.name)}
					<Item
						>{charm.name} Charm ({charm.exp_granted} exp) - {calcs.charms_required[i]} Required</Item
					>
				{/each}
			</Content>
		</Card>
	</Cell>
</LayoutGrid>
