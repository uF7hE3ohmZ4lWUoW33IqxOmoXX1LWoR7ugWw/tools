<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';
	import List, { Item, Text } from '@smui/list';
	import Select, { Option } from '@smui/select';
	import Textfield from '@smui/textfield';
	import { gear_rolls, calculations, stats } from '$lib/gear-efficiency-calculator/data';
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

	let calcs = calculations(inputs);
	const recalculate = () => (calcs = calculations(inputs));
</script>

<LayoutGrid>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			{#each inputs as input, i (i)}
				<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
					<Card padded>
						<Select bind:value={inputs[i].name} label="Stat {i}">
							{#each stats as stat}
								<Option value={stat}
									>{stat
										.replace('_', ' ')
										.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
											return s.toUpperCase();
										})}</Option
								>
							{/each}
						</Select>
						<Textfield
							bind:value={inputs[i].value}
							label="Value"
							on:blur={inputs[i].rolls && recalculate}
						/>
						<Textfield
							bind:value={inputs[i].rolls}
							label="Rolls"
							on:blur={inputs[i].value && recalculate}
						/>
					</Card>
				</Cell>
			{/each}
		</InnerGrid>
	</Cell>
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		<InnerGrid>
			{#each calcs as calc (calc.name)}
				{#if calc.value > 0}
					<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
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
		</InnerGrid>
	</Cell>
</LayoutGrid>
