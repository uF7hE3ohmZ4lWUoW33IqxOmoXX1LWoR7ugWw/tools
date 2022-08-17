<script lang="ts">
	import Banner, { Label, Icon } from '@smui/banner';
	import { test_sets } from './data';
	import { set_calculations, calculate_set_total_efficiency, calculate_gear_total_efficiency } from './calculations';
	import type { GearCalculations } from './__types';

	export let set_calcs: GearCalculations[][];
	export let calcs: GearCalculations[];

	$: efficiencies = calcs.map((calc) => calc.efficiency);
	$: set_efficiencies = set_calcs.map((calc) => calc.map((c) => c.efficiency));
	$: total_efficiency = calculate_gear_total_efficiency(calcs);
	$: set_total_efficiency = calculate_set_total_efficiency(set_calcs);
</script>

<Banner open mobileStacked content$style="max-width: max-content;">
	<Label slot="label">
		Current Gear || Total Efficiency: {total_efficiency}%
		<br />
		Set Gear || Total Efficiency: {set_total_efficiency}%
	</Label>
</Banner>
