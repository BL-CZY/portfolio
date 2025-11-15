<script lang="ts">
	const {
		name,
		technologies,
		description,
		link
	}: { name: string; technologies: string[]; description: string; link: string } = $props();

	let appear = $state(false);
</script>

<div
	class="mx-auto w-full max-w-[500px] rounded-2xl border-2 border-base-3 bg-base-2 shadow-2xl backdrop-blur-3xl"
>
	<div
		class="group relative w-full cursor-pointer overflow-hidden rounded-2xl border-none p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:-translate-y-0.5"
		aria-label={`Toggle description for ${name}`}
		aria-expanded={appear}
	>
		<div class="pointer-events-none absolute inset-0"></div>
		<div
			class="absolute top-full left-full -z-10 h-[200%] w-[200%] -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
			style="background: radial-gradient(circle, var(--color-accent-3) 0%, transparent 70%);"
		></div>

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

		<p class="text-text-1">{description}</p>
		<a class="text-accent-1" href={link}>Learn more</a>

		<div class="aspect-square w-[50%]"></div>

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
	</div>
</div>
