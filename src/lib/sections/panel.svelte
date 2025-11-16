<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

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

	let projectCard: HTMLElement | null = $state(null);
	let projectCard_intersecting = $state(false);

	let description1: HTMLElement | null = $state(null);
	let description1_intersecting = $state(false);

	let description2: HTMLElement | null = $state(null);
	let description2_intersecting = $state(false);

	let description3: HTMLElement | null = $state(null);
	let description3_intersecting = $state(false);

	// Array to store refs for dynamic descriptions
	let descriptionRefs: (HTMLElement | null)[] = $state([]);
	let descriptionIntersecting: boolean[] = $state([]);
</script>

<div class="mx-auto flex w-full flex-col items-stretch gap-5 pb-10 md:flex-row">
	<IntersectionObserver once element={projectCard} bind:intersecting={projectCard_intersecting} />
	<div
		bind:this={projectCard}
		class="panel-card group relative w-full flex-4 cursor-pointer overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl {right
			? 'slide-from-right md:order-2'
			: 'slide-from-left'} delay-0"
		class:visible={projectCard_intersecting}
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
					class="tech-tag inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/25 px-3 py-2 text-text-1 backdrop-blur-md"
					title={tech}
				>
					<span class="text-1xl leading-none drop-shadow-md">{tech}</span>
				</span>
			{/each}
		</div>
	</div>
	<div class="flex flex-5 flex-col gap-5">
		{#each descriptions as description, i}
			<IntersectionObserver
				once
				element={descriptionRefs[i]}
				bind:intersecting={descriptionIntersecting[i]}
			/>
			<div
				class="group relative {right ? 'slide-from-left' : 'slide-from-right'} delay-0"
				bind:this={descriptionRefs[i]}
				class:visible={descriptionIntersecting[i]}
			>
				<!-- Gradient border container -->
				<div
					class="gradient-bg absolute -inset-0.5 rounded-2xl opacity-30 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<!-- Content -->
				<div
					class="underline-before relative rounded-2xl bg-base-2 p-6 transition-opacity duration-300 ease-out"
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
		color: var(--color-accent-2);
		background-color: rgba(255, 255, 255, 0.35);
	}

	.panel-card {
		transform: translateY(0px);
		transition:
			transform 0.3s ease-out,
			box-shadow 0.3s ease-out;
	}

	.panel-card:hover,
	.panel-card:focus,
	.panel-card:active {
		transform: translateY(-4px);
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
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

	/* Slide from left animations */
	.slide-from-left {
		opacity: 0;
		/* start slightly down and left, will animate to 0,0 */
		transform: translateX(-30px) translateY(12px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease,
			box-shadow 0.3s ease-out;
		display: block;
	}

	/* Slide from right animations */
	.slide-from-right {
		opacity: 0;
		/* start slightly down and right, will animate to 0,0 */
		transform: translateX(30px) translateY(12px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease,
			box-shadow 0.3s ease-out;
		display: block;
	}

	/* Visible state for all animations */
	.visible {
		opacity: 1 !important;
		/* ensure both axes reset when visible */
		transform: translate(0, 0) !important;
	}

	/* Panel card hover state - override slide animation */
	.panel-card.visible:hover,
	.panel-card.visible:focus,
	.panel-card.visible:active {
		transform: translateY(-4px) !important;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	/* Delay classes - only for slide animations */
	.slide-from-left.delay-0,
	.slide-from-right.delay-0 {
		transition-delay: 0ms;
	}
</style>
