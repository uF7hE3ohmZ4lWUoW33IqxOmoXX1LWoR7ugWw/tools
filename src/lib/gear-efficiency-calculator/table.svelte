<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Cell as GridCell } from '@smui/layout-grid';
	import type { calculate_set_total_efficiency } from './calculations';
	import type { GearCalculations } from './__types';

	export let set_calcs: GearCalculations[][];
	export let calcs: GearCalculations[];
</script>

{#each set_calcs as calc, i (i)}
	<GridCell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
		<DataTable table$aria-label="People list" style="max-width: 100%;">
			<Head>
				<Row>
					<Cell>Stat</Cell>
					<Cell numeric>Value</Cell>
					<Cell numeric>Rolls</Cell>
					<Cell numeric>Minumum</Cell>
					<Cell numeric>Maximum</Cell>
					<Cell numeric>Efficiency</Cell>
				</Row>
			</Head>
			<Body>
				{#each calcs as stat (stat.name)}
					<Row>
						<Cell
							>{stat.name
								.replace('_', ' ')
								.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
									return s.toUpperCase();
								})}</Cell
						>
						<Cell numeric>{stat.value}</Cell>
						<Cell numeric>{stat.rolls}</Cell>
						<Cell numeric>{stat.total_min}</Cell>
						<Cell numeric>{stat.total_max}</Cell>
						<Cell numeric>{stat.efficiency}</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</GridCell>
{/each}
