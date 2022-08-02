<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import ImageList, { Item, ImageAspectContainer, Image } from '@smui/image-list';

	export let title: string;
	export let img: string;
	export let text: string;
	export let flip: boolean;
</script>

<LayoutGrid>
	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<h3 class="mdc-typography--headline3">{title}</h3>
		<p class="mdc-typography--body1">{text}</p>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<ImageList>
			<Item>
				<ImageAspectContainer>
					<Image src={img} alt="placeholder" />
				</ImageAspectContainer>
			</Item>
		</ImageList>
	</Cell>
</LayoutGrid>
