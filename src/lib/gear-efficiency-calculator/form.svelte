<script lang="ts">
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';
	import Select, { Option } from '@smui/select';
	import Textfield from '@smui/textfield';
	import { stat_names } from './data';
	import type { SubStatInput } from './__types';
	import { gear_calculations } from '$lib/gear-efficiency-calculator/calculations'
	import Breakdown from './breakdown.svelte'

	export let stats: SubStatInput[];
</script>

{#each stats as stat, i (stat.id)}
	<Cell spanDevices={{ desktop: 3, tablet: 2, phone: 2 }}>
		<Card padded>
			<Select bind:value={stats[i].name} label="Stat {i + 1}">
				{#each stat_names as sub_stat}
					<Option value={sub_stat}
						>{sub_stat.replace('_', ' ').replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
							return s.toUpperCase();
						})}</Option
					>
				{/each}
			</Select>
			<Textfield bind:value={stats[i].value} label="Value" />
			<Textfield bind:value={stats[i].rolls} label="Rolls" />
		</Card>
	</Cell>
{/each}
