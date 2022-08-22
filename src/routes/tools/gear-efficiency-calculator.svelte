<script lang="ts">
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import Form from '$lib/gear-efficiency-calculator/form.svelte';
	import Banner from '$lib/gear-efficiency-calculator/banner.svelte';
	import Table from '$lib/gear-efficiency-calculator/table.svelte';
	import Fab, { Icon } from '@smui/fab';
	import { Svg } from '@smui/common/elements';
	import { mdiPlus } from '@mdi/js';
	import { generate_initial_stats } from '$lib/gear-efficiency-calculator/data';
	import {
		gear_calculations,
		set_calculations
	} from '$lib/gear-efficiency-calculator/calculations';
	
	let stats = generate_initial_stats();
	let sets = Array([]);
	$: calcs = gear_calculations(stats);
	$: set_calcs = set_calculations(sets);
	
	const add_gear = (): void => {
		sets = [...sets.concat([stats])];
		stats = generate_initial_stats();
	};
</script>

<svelte:head>
	<title>Gear Efficiency Calculator</title>
	<meta name="description" content="Awaken: Chaos Era gear efficiency calculator" />
</svelte:head>

<Banner bind:calcs bind:set_calcs />

<LayoutGrid>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			<Form bind:stats />
		</InnerGrid>
	</Cell>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			<Table bind:set_calcs />
		</InnerGrid>
	</Cell>
	<Fab color="primary" on:click={add_gear} style="position: fixed; right: 20; bottom: 20;">
		<Icon component={Svg} viewBox="2 2 20 20">
			<path fill="currentColor" d={mdiPlus} />
		</Icon>
	</Fab>
</LayoutGrid>
