<script lang="ts">
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';
	import List, { Item, Text } from '@smui/list';

	import type { Calculations } from './data';

	export let calcs: Calculations[];
</script>

{#each calcs as calc (calc.name)}
	{#if calc.value > 0}
		<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 4 }}>
			<Card>
				<Content component={List}>
					<Item class="mdc-typography--headline4">
						<Text
							>{calc.name
								.replace('_', ' ')
								.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
									return s.toUpperCase();
								})}</Text
						>
					</Item>
					<Item>
						<Text>Current Value: {calc.value}</Text>
					</Item>
					<Item>
						<Text>Total Rolls: {calc.rolls}</Text>
					</Item>
					<Item>
						<Text>Minimum Value: {calc.total_min}</Text>
					</Item>
					<Item>
						<Text>Maximum Value: {calc.total_max}</Text>
					</Item>
					<Item>
						<Text>Total efficiency: {calc.efficiency}%</Text>
					</Item>
				</Content>
			</Card>
		</Cell>
	{/if}
{/each}
