<script lang="ts">
	import { InnerGrid, Cell } from '@smui/layout-grid';
	import Card, { Actions } from '@smui/card';
	import Switch from '@smui/switch';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import FormField from '@smui/form-field';
	import type { Team } from './__types';

	export let team: Team;
</script>

<Card padded style="margin-bottom: 1rem;">
	<InnerGrid>
		<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
			<Textfield type="number" bind:value={team.turn_meter} label="Turn Meter">
				<svelte:fragment slot="helper">
					<HelperText>
						Calculated by the sum of all heroes that took a turn since the last bonus turn, then
						subtracting 100 for each one
					</HelperText>
				</svelte:fragment>
			</Textfield>
		</Cell>
		{#each team.heroes as hero (hero.id)}
			<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
				<Card>
					<Textfield bind:value={hero.name} label="Name" />
					<Textfield type="number" bind:value={hero.speed} label="Speed" />
				</Card>
			</Cell>
		{/each}
	</InnerGrid>
	<Actions>
		<FormField>
			<Switch bind:checked={team.has_speed_debuff} />
			<span slot="label">Has Speed Debuff</span>
		</FormField>
	</Actions>
</Card>
