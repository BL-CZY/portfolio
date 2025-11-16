<script lang="ts">
	const {
		name,
		technologies,
		descriptions,
		link,
		logo,
		right
	}: {
		name: string;
		technologies: string[];
		descriptions: string[];
		link: string;
		logo: string;
		right?: boolean;
	} = $props();
</script>

<div class="mx-auto flex w-full flex-col items-stretch gap-5 pb-10 md:flex-row">
	<div
		class="group relative w-full flex-4 cursor-pointer overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:-translate-y-0.5 {right
			? 'md:order-2'
			: ''}"
		aria-label="Toggle description for name"
	>
		<div class="pointer-events-none absolute inset-0"></div>
		<div class="absolute -right-150 -bottom-12 opacity-70">
			<h1
				class="bg-linear-to-r from-accent-1/40 via-transparent to-transparent bg-clip-text font-style text-[300px] text-transparent"
			>
				{logo}
			</h1>
		</div>

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

		<p class="text-text-1">{descriptions}</p>
		<a class="text-accent-1" href={link}>Learn more</a>

		<div class="aspect-square w-[50%]"></div>

		<div class="relative z-10 flex flex-wrap gap-2">
			{#each technologies as tech}
				<span
					class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/25 px-3 py-2 text-text-1 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/35 hover:text-accent-2"
					title={tech}
				>
					<span class="text-1xl leading-none drop-shadow-md">{tech}</span>
				</span>
			{/each}
		</div>
	</div>

	<div class="flex flex-5 flex-col gap-5">
		{#each descriptions as description}
			<div class="group relative">
				<!-- Gradient border container -->
				<div
					class="gradient-bg absolute -inset-0.5 rounded-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-100"
				></div>

				<!-- Content -->
				<div
					class="underline-before relative rounded-2xl bg-base-2 p-6 transition-all duration-300 ease-out"
				>
					<p class="text-xl text-text-1">{description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	p {
		font-family: var(--font-mono);
	}

	.underline-before::before {
		content: '';
		position: absolute;
		bottom: 2px;
		left: 2%;
		width: 96%;
		height: 2px;
		background: linear-gradient(
			90deg,
			var(--color-accent-1),
			var(--color-accent-3),
			var(--color-accent-4)
		);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
		border-radius: 2px;
	}

	.underline-before:hover::before {
		transform: scaleX(1);
	}

	.gradient-bg {
		background: linear-gradient(180deg, var(--color-accent-1), var(--color-accent-3), transparent);
	}
</style>
