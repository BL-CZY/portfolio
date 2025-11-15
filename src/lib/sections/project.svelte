<script lang="ts">
	import { scale, fade } from 'svelte/transition';

	const {
		name,
		technologies,
		description
	}: { name: string; technologies: string[]; description: string } = $props();

	let appear = $state(false);
</script>

<div
	class="mx-auto w-full max-w-[500px] rounded-2xl border border-accent-2 bg-base-2 backdrop-blur-3xl"
>
	<button
		onclick={() => (appear = !appear)}
		class="group relative w-full cursor-pointer overflow-hidden rounded-2xl border-none p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:-translate-y-0.5"
		aria-label={`Toggle description for ${name}`}
		aria-expanded={appear}
	>
		<div class="pointer-events-none absolute inset-0"></div>

		<div class="relative z-10 mb-4 flex items-center justify-between">
			<h3 class="text-left text-2xl font-bold tracking-tight text-white">{name}</h3>
			<svg
				class="shrink-0 text-white/90 transition-transform duration-300 {appear
					? 'rotate-180'
					: ''}"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M5 7.5L10 12.5L15 7.5"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>

		<div class="relative z-10 flex flex-wrap gap-2">
			{#each technologies as tech}
				<span
					class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/25 px-3 py-2 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/35 hover:text-accent-2"
					title={tech}
				>
					<span class="text-1xl leading-none drop-shadow-md">{tech}</span>
				</span>
			{/each}
		</div>
	</button>
</div>

{#if appear}
	<div
		class="fixed inset-0 z-1000 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="relative w-full max-w-[500px] rounded-3xl bg-base-2 p-8 shadow-2xl"
			transition:scale={{ duration: 300, start: 0.9 }}
		>
			<button
				class="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-black/5 text-red-400 transition-all duration-200 hover:scale-110 hover:bg-black/10"
				onclick={() => (appear = false)}
				aria-label="Close description"
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path
						d="M18 6L6 18M6 6L18 18"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</button>
			<h4 class="mb-4 pr-10 text-3xl font-bold text-accent-1">{name}</h4>
			<p class="m-0 text-base leading-relaxed text-text-2">{description}</p>
		</div>
	</div>
{/if}
