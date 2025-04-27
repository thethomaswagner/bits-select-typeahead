<!--
	NOTE: Tailwind v4 does not support web container environments, so animations powered by tailwindcss-animate will not work in this environment.
-->
<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	const themes = [
		{ value: "light-monochrome", label: "Light Monochrome" },
		{ value: "dark-green", label: "Dark Green" },
		{ value: "svelte-orange", label: "Svelte Orange" },
		{ value: "punk-pink", label: "Punk Pink" },
		{ value: "ocean-blue", label: "Ocean Blue", disabled: true },
		{ value: "sunset-orange", label: "Sunset Orange" },
		{ value: "sunset-red", label: "Sunset Red" },
		{ value: "forest-green", label: "Forest Green" },
		{ value: "lavender-purple", label: "Lavender Purple", disabled: true },
		{ value: "mustard-yellow", label: "Mustard Yellow" },
		{ value: "slate-gray", label: "Slate Gray" },
		{ value: "neon-green", label: "Neon Green" },
		{ value: "coral-reef", label: "Coral Reef" },
		{ value: "midnight-blue", label: "Midnight Blue" },
		{ value: "crimson-red", label: "Crimson Red" },
		{ value: "mint-green", label: "Mint Green" },
		{ value: "pastel-pink", label: "Pastel Pink" },
		{ value: "golden-yellow", label: "Golden Yellow" },
		{ value: "deep-purple", label: "Deep Purple" },
		{ value: "turquoise-blue", label: "Turquoise Blue" },
		{ value: "burnt-orange", label: "Burnt Orange" },
	];

	let value = $state<string>("");
	const selectedLabel = $derived(
		value ? themes.find((theme) => theme.value === value)?.label : "Select a theme"
	);
</script>

<Select.Root type="single" bind:value>
	<Select.Trigger>
		{selectedLabel}
	</Select.Trigger>
	<Select.Content>
		{#each themes as item (item)}
			<Select.Item value={item.value} label={item.label}>
				{item.label}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
