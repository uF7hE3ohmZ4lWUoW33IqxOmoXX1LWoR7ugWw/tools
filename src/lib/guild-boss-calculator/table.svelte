<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	import type { Team } from './__types';

	export let team_turn_calcs: Team;
</script>

<DataTable table$aria-label="Team Turn Calculations" style="min-width: 100%; max-height: 90vh;">
	<Head>
		<Row>
			<Cell>Hero</Cell>
			<Cell>Speed</Cell>
			<Cell>Turn Meter</Cell>
		</Row>
	</Head>
	<Body>
		{#each team_turn_calcs as hero, j}
			{#if j % 4 === 0}
				<Row>
					<Cell />
					<Cell>Round {j / 4 + 1}</Cell>
					<Cell />
				</Row>
			{/if}
			<Row style={hero.points >= 100 ? 'background-color: green' : ''}>
				<Cell>{hero.name}</Cell>
				<Cell>{hero.speed}</Cell>
				<Cell>{hero.points}%</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
