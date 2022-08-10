<script lang="ts">
	import Credits from '$lib/gear-enhancement-calculator/credits.svelte';
	import Form from '$lib/gear-enhancement-calculator/form.svelte';
	import Breakdown from '$lib/gear-enhancement-calculator/breakdown.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { calculations } from '$lib/gear-enhancement-calculator/data';

	let current_level = { level: 0, exp_required: 0 };
	let target_level = { level: 0, exp_required: 0 };
	$: calcs = calculations(current_level, target_level);
</script>

<svelte:head>
	<title>Gear Enhancement Calculator</title>
	<meta name="description" content="Awaken: Chaos Era Gear enhancement calculator" />
</svelte:head>

<Credits />

<LayoutGrid>
	<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 4 }}>
		<Form bind:current_level bind:target_level />
	</Cell>

	<Cell spanDevices={{ desktop: 9, tablet: 4, phone: 4 }}>
		<Breakdown bind:calcs />
	</Cell>
</LayoutGrid>
