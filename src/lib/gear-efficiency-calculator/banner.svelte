<script lang="ts">
	import Banner, { Label, Icon } from '@smui/banner';
	import { test_sets } from './data';
	import { set_calculations, calculate_set_total_efficiency } from './calculations';
	import type { GearCalculations } from './__types';

	export let set_calcs: GearCalculations[][];
	export let calcs: GearCalculations[];
	const efficiencies = calcs.map((calc) => calc.efficiency);
	const set_efficiencies = set_calcs.map((calc) => calc.map((c) => c.efficiency));
	let total_efficiency = 0;
	let set_total_efficiency = 0;

	if (efficiencies.length > 0) {
		total_efficiency =
			efficiencies.reduce((a, b) => a + b) / calcs.filter((calc) => calc.value > 0).length;
	}

	if (set_efficiencies[0].length > 0) {
		set_total_efficiency = calculate_set_total_efficiency(set_calcs);
	}
</script>

<Banner open mobileStacked content$style="max-width: max-content;">
	<Label slot="label">
		Current Gear || Total Efficiency: {total_efficiency}
		{#each calcs as calc (calc.name)}
			|| {calc.name.replace('_', ' ').replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
				return s.toUpperCase();
			})}:{calc.efficiency}
		{/each}
		<br />
		Set Gear || Total Efficiency: {set_total_efficiency}
	</Label>
</Banner>
