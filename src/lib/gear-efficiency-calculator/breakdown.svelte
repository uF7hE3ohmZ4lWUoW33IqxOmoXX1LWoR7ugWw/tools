<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { Icon } from '@smui/common';
	import List, { Item, Separator, Text } from '@smui/list';
	import Tooltip, { Wrapper, Title, Content } from '@smui/tooltip';

	import type { GearCalculations } from './__types';

	export let calc: GearCalculations = {};
</script>

<Wrapper rich>
	<IconButton><Icon class="material-icons">info</Icon></IconButton>
	<Tooltip persistent xPos="end" yPos="above">
		<Title>Breakdown</Title>
		{#if calc}
		<Content>
		<List>
			<Item><Text>Minimum: {calc.total_min}</Text></Item>
			<Item><Text>Maximum: {calc.total_max}</Text></Item>
			<Item><Text>Efficiency: {calc.efficiency}</Text></Item>
		</List>
		</Content>
		{/if}
	</Tooltip>
</Wrapper>
