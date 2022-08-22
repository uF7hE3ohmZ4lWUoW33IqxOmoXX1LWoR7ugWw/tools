<script lang="ts">
	import Select, { Option } from '@smui/select';
	import Card from '@smui/card';
	import { exp_level_requirements } from './data';

	import type { ExpLevelRequirement } from './data';

	export let current_level: ExpLevelRequirement;
	export let target_level: ExpLevelRequirement;
</script>

<Card padded>
	<Select
		bind:value={current_level}
		label="Current Level"
		key={(level) => `${(level && level.level) || ''}`}
	>
		<Option value={{ level: '', exp_required: 0 }} />
		{#each exp_level_requirements as level (level.level)}
			<Option value={level}>{level.level}</Option>
		{/each}
	</Select>

	<Select
		bind:value={target_level}
		label="Target Level"
		key={(level) => `${(level && level.level) || ''}`}
	>
		<Option value={{ level: '', exp_required: 0 }} />
		{#each exp_level_requirements as level (level.level)}
			<Option value={level}>{level.level}</Option>
		{/each}
	</Select>
</Card>
