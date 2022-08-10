<script lang="ts">
	import Card, { Content } from '@smui/card';
	import List, { Item, Text } from '@smui/list';
	import { charms_experience, gear_experience } from './data';
	import type { ICalculations } from './data';

	export let calcs: ICalculations;
</script>

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
			<Item>{charm.name} Charm ({charm.exp_granted} exp) - {calcs.charms_required[i]} Required</Item
			>
		{/each}
	</Content>
</Card>
