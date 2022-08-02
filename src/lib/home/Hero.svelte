<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Button, { Label, Icon } from '@smui/button';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub, mdiLinkedin } from '@mdi/js';
	import PageSection from '../shared/PageSection.svelte';
</script>

<LayoutGrid>
	<Cell span={12}>
		<div style="text-align: center; margin: 0 auto; max-width: 720px;">
			<h1 class="mdc-typography--headline1">Hi, I'm Brett</h1>
			<h4 class="mdc-typography--headline4">
				I am a full-stack developer that develops and designs beautiful web solutions to help solve
				everyday business problems.
			</h4>
			<Button variant="raised">
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiLinkedin} />
				</Icon>
				<Label>Connect with me</Label>
			</Button>
			<Button variant="raised" color="secondary" href="https://github.com/imbrett" target="_blank">
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiGithub} />
				</Icon>
				<Label>View My Work</Label>
			</Button>
		</div>
	</Cell>
</LayoutGrid>
