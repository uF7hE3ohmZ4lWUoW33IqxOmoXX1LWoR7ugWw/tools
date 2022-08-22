<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Cell as GridCell } from '@smui/layout-grid';
	import type { calculate_set_total_efficiency } from './calculations';
	import type { GearCalculations } from './__types';

	export let set_calcs: GearCalculations[][];
</script>

{#each set_calcs as calc, i (i)}
	{#if calc.map((c) => c).length > 0}
		<GridCell spanDevices={{ desktop: 4, tablet: 4, phone: 4 }}>
			<DataTable table$aria-label="Gear Calculations" style="max-width: 100%;">
				<Head>
					<Row>
						<Cell>Stat</Cell>
						<Cell>Value</Cell>
						<Cell>Rolls</Cell>
						<Cell>Minumum</Cell>
						<Cell>Maximum</Cell>
						<Cell>Efficiency</Cell>
					</Row>
				</Head>
				<Body>
					{#each calc as stat (stat.name)}
						<Row>
							<Cell
								>{stat.name
									.replace('_', ' ')
									.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => {
										return s.toUpperCase();
									})}</Cell
							>
							<Cell>{stat.value}</Cell>
							<Cell>{stat.rolls}</Cell>
							<Cell>{stat.total_min}</Cell>
							<Cell>{stat.total_max}</Cell>
							<Cell>{stat.efficiency}%</Cell>
						</Row>
					{/each}
				</Body>
			</DataTable>
		</GridCell>
	{/if}
{/each}
