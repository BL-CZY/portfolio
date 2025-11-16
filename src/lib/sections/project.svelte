<script lang="ts">
	const {
		name,
		technologies,
		description,
		link
	}: { name: string; technologies: string[]; description: string; link: string } = $props();
</script>

<div
	class="project-card mx-auto w-full max-w-[500px] rounded-2xl border-2 border-base-3 bg-base-2 shadow-2xl backdrop-blur-3xl"
>
	<div
		class="group relative w-full cursor-pointer overflow-hidden rounded-2xl border-none p-6 shadow-md"
		aria-label={`Toggle description for ${name}`}
	>
		<div class="pointer-events-none absolute inset-0"></div>
		<div
			class="absolute top-full left-full -z-10 h-[200%] w-[200%] -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
			style="background: radial-gradient(circle, var(--color-accent-3) 0%, transparent 70%);"
		></div>

		<div class="relative z-10 mb-4 flex items-center justify-between">
			<h3 class="text-left text-2xl font-bold tracking-tight text-white">{name}</h3>
			<svg
				class="shrink-0 text-white/90 transition-transform duration-300"
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
					class="tech-tag inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/25 px-3 py-2 text-text-1 backdrop-blur-md"
					title={tech}
				>
					<span class="text-1xl leading-none drop-shadow-md">{tech}</span>
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	p {
		font-family: var(--font-mono);
	}

	.project-card {
		transform: translateY(0px);
		transition:
			transform 0.3s ease-out,
			box-shadow 0.3s ease-out;
	}

	.project-card:hover,
	.project-card:focus,
	.project-card:active {
		transform: translateY(-4px);
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s ease-out,
			box-shadow 0.3s ease-out;
	}

	.tech-tag {
		transition:
			transform 0.2s ease,
			color 0.2s ease,
			background-color 0.2s ease;
	}

	.tech-tag:hover,
	.tech-tag:focus,
	.tech-tag:active {
		transform: scale(1.1);
		background-color: rgba(255, 255, 255, 0.35);
		color: var(--color-accent-2);
	}
</style>
