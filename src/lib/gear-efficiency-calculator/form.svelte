<script lang="ts">
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';
	import Select, { Option } from '@smui/select';
	import Textfield from '@smui/textfield';
	import { stats } from './data';

	import type { GearEfficiencyInput } from './data';

	export let inputs: GearEfficiencyInput[];
</script>

{#each inputs as input, i (i)}
	<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
		<Card padded>
			<Select bind:value={inputs[i].name} label="Stat {i + 1}">
				{#each stats as stat}
					<Option value={stat}
						>{stat.replace('_', ' ').replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
							return s.toUpperCase();
						})}</Option
					>
				{/each}
			</Select>
			<Textfield bind:value={inputs[i].value} label="Value" />
			<Textfield bind:value={inputs[i].rolls} label="Rolls" />
		</Card>
	</Cell>
{/each}
