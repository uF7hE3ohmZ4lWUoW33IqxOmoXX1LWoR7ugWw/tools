<script lang="ts">
	import { enhance } from '$lib/form';
	import NotchedOutline from '@smui/notched-outline';
	import FloatingLabel from '@smui/floating-label';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Card, { Content, Actions } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import Checkbox from '@smui/checkbox';
	import Textfield, { Input } from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	import type { FloatingLabelComponentDev } from '@smui/floating-label';
	import type { LineRippleComponentDev } from '@smui/line-ripple';
	import type { NotchedOutlineComponentDev } from '@smui/notched-outline';
	import type { InputComponentDev } from '@smui/textfield';

	type Todo = {
		uid: string;
		created_at: Date;
		text: string;
		done: boolean;
		pending_delete: boolean;
	};

	export let todos: Todo[];

	let input: InputComponentDev;
	let notchedOutline: NotchedOutlineComponentDev;
	let floatingLabel: FloatingLabelComponentDev;
	let input_edit: InputComponentDev;
	let notchedOutline_edit: NotchedOutlineComponentDev;

	let text = '';
	let editting = false;
</script>

<svelte:head>
	<title>Todos</title>
	<meta name="description" content="A todo list app" />
</svelte:head>

<LayoutGrid>
	<Cell span={12}>
		<h3 class="mdc-typography--headline3">Todos</h3>
		<form
			action="/todos"
			method="post"
			use:enhance={{
				result: async ({ form }) => {
					form.reset();
				}
			}}
		>
			<Textfield bind:input bind:notchedOutline bind:floatingLabel variant="outlined">
				<NotchedOutline bind:this={notchedOutline} slot="label">
					<FloatingLabel bind:this={floatingLabel} for="todo_text">Add Todo</FloatingLabel>
				</NotchedOutline>
				<Icon class="material-icons" slot="leadingIcon">add</Icon>
				<Input bind:this={input} bind:value={text} id="todo_text" name="text" />
			</Textfield>
		</form>
	</Cell>

	{#each todos as todo (todo.uid)}
		<Cell spanDevices={{ desktop: 6, tablet: 8, phone: 4 }}>
			<Card>
				<Content>
					<form
						action="/todos?_method=PATCH"
						method="post"
						use:enhance={{
							pending: ({ data }) => {
								todo.done = !!data.get('done');
							}
						}}
					>
						<input type="hidden" name="uid" value={todo.uid} />
						<input type="hidden" name="done" value={todo.done ? 'true' : ''} />
						<Button type="submit">
							<Checkbox checked={todo.done} />
						</Button>
					</form>

					{#if editting}
						<form
							class="text"
							action="/todos?_method=PATCH"
							method="post"
							use:enhance={{ pending: () => (editting = false) }}
						>
							<input type="hidden" name="uid" value={todo.uid} />
							<Textfield
								variant="outlined"
								bind:input={input_edit}
								bind:notchedOutline={notchedOutline_edit}
							>
								<NotchedOutline bind:this={notchedOutline_edit} />
								<Icon class="material-icons" slot="leadingIcon">edit</Icon>
								<Input bind:this={input_edit} value={todo.text} id="todo_edit_text" name="text" />
								<Button slot="trailingIcon" on:click={() => (editting = false)}>
									<Icon class="material-icons">cancel</Icon>
								</Button>
							</Textfield>
							<Button type="submit">
								<Label>Save Todo</Label>
							</Button>
						</form>
					{:else}
						<div class="mdc-typography--body1">{todo.text}</div>
					{/if}
				</Content>
				<Actions>
					<form
						action="/todos?_method=DELETE"
						method="post"
						use:enhance={{
							pending: () => (todo.pending_delete = true)
						}}
					>
						<input type="hidden" name="uid" value={todo.uid} />
						<Button type="submit" disabled={todo.pending_delete}>
							<Label>Delete</Label>
						</Button>
					</form>
					<Button
						on:click={() => (editting = true)}
						disabled={todo.pending_delete}
						color="secondary"
					>
						<Label>Edit</Label>
					</Button>
				</Actions>
			</Card>
		</Cell>
	{/each}
</LayoutGrid>
