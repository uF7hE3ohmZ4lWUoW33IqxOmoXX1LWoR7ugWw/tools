<script lang="ts">
	import Form from '$lib/gear-efficiency-calculator/form.svelte';
	import Breakdown from '$lib/gear-efficiency-calculator/breakdown.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import { calculations } from '$lib/gear-efficiency-calculator/data';
	import type { GearEfficiencyInput } from '$lib/gear-efficiency-calculator/data';

	let inputs: GearEfficiencyInput[] = new Array<GearEfficiencyInput>(4)
		.fill({
			name: '',
			value: 0,
			rolls: 0,
			id: ''
		})
		.map(({ name, value, rolls }) => ({
			name,
			value,
			rolls,
			id: uuidv4()
		}));

	$: calcs = calculations(inputs);
</script>

<svelte:head>
	<title>Gear Efficiency Calculator</title>
	<meta name="description" content="Awaken: Chaos Era gear efficiency calculator" />
</svelte:head>

<LayoutGrid>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			<Form bind:inputs />
		</InnerGrid>
	</Cell>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			<Breakdown bind:calcs />
		</InnerGrid>
	</Cell>
</LayoutGrid>
