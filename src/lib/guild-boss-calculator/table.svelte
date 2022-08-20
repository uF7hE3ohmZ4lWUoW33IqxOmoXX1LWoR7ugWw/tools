<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { Cell as GridCell } from '@smui/layout-grid';
	import type { calculate_set_total_efficiency } from './calculations';
	import type { GearCalculations } from './__types';

	export let team_turn_calcs: number[];
</script>

  <DataTable table$aria-label="Team Turn Calculations" style="max-width: 100%;">
    <Head>
      <Row>
        <Cell>Hero</Cell>
        <Cell>Speed</Cell>
        <Cell>Turn Meter</Cell>
      </Row>
    </Head>
    <Body>
      {#each new Array(15) as i}
        {#each team_turn_calcs as calc, j}
          {#if j % 4 === 0 && i%4 === 0}
            <Row>
              <Cell></Cell>
              <Cell>Round {j/4 + 1}</Cell>
              <Cell></Cell>
            </Row>
          {/if}
          <Row>
            <Cell>Hero Name</Cell>
            <Cell>Hero Speed</Cell>
            <Cell>{calc}</Cell>
          </Row>
        {/each}
      {/each}
    </Body>
  </DataTable>
