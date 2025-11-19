<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let titleRef: HTMLElement | null = $state(null);
	let titleIntersecting = $state(false);

	let panelRefs: (HTMLElement | null)[] = $state([]);
	let panelIntersecting: boolean[] = $state([]);

	const aboutPanels = [
		{
			title: 'Background',
			icon: '📚',
			content:
				"I'm a Computer Science student at the University of Edinburgh with a passion for building elegant solutions to complex problems. My journey in tech started with curiosity and has evolved into a commitment to continuous learning and innovation."
		},
		{
			title: 'Full Stack Development',
			icon: '💻',
			content:
				'Experienced in crafting complete web applications from frontend to backend. I specialize in modern frameworks like Svelte and React, and I build robust backends with technologies like Node.js and Python.'
		},
		{
			title: 'Low-Level Systems',
			icon: '⚙️',
			content:
				'Passionate about understanding how systems work under the hood. I explore systems programming, cybersecurity principles, and performance optimization to build efficient and secure applications.'
		},
		{
			title: 'Open Source & Community',
			icon: '🤝',
			content:
				'I believe in the power of open source and contributing back to the community. I actively share my work on GitHub and collaborate with other developers to improve the software ecosystem.'
		},
		{
			title: 'Problem Solving',
			icon: '🧩',
			content:
				'I approach every challenge as an opportunity to learn and innovate. With strong analytical skills and a methodical approach, I break down complex problems into manageable solutions.'
		},
		{
			title: 'Lifelong Learner',
			icon: '🚀',
			content:
				"The tech industry evolves rapidly, and I'm committed to staying ahead. I constantly explore new technologies, best practices, and methodologies to deliver cutting-edge solutions."
		}
	];
</script>

<div class="relative m-auto max-w-7xl pt-10 pr-10 pl-10">
	<!-- Title Section -->
	<IntersectionObserver once element={titleRef} bind:intersecting={titleIntersecting} />
	<div
		bind:this={titleRef}
		class="slide-from-top pb-16 text-center delay-0"
		class:visible={titleIntersecting}
	>
		<h1 class="mb-4 font-style text-5xl text-accent-1">About Me</h1>
		<p class="mx-auto max-w-2xl font-mono text-text-1">
			Passionate developer, systems enthusiast, and lifelong learner. I create innovative solutions
			and explore the depths of software engineering.
		</p>
	</div>

	<!-- About Panels Grid -->
	<div class="grid gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
		{#each aboutPanels as panel, i}
			<IntersectionObserver once element={panelRefs[i]} bind:intersecting={panelIntersecting[i]} />
			<div
				bind:this={panelRefs[i]}
				class="about-card slide-from-bottom"
				class:visible={panelIntersecting[i]}
				style="--delay: {i * 100}ms"
			>
				<div
					class="relative h-full overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6"
				>
					<!-- Gradient glow effect -->
					<div
						class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-40 blur-2xl"
						style="background: radial-gradient(circle, var(--color-accent-3) 0%, transparent 70%);"
					></div>

					<div class="relative z-10">
						<div class="mb-4 text-4xl">{panel.icon}</div>
						<h2 class="mb-3 font-mono text-xl font-bold text-accent-1">{panel.title}</h2>
						<p class="font-mono text-sm leading-relaxed text-text-2">{panel.content}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<hr class="my-8 border-accent-1/30" />
</div>

<style>
	.slide-from-top {
		opacity: 0;
		transform: translateY(-30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	.slide-from-bottom {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	.visible {
		opacity: 1 !important;
		transform: translateY(0) !important;
		transition-delay: var(--delay, 0ms);
	}

	.about-card {
		transition:
			transform 0.3s ease-out,
			box-shadow 0.3s ease-out;
	}

	.about-card:hover,
	.about-card:focus-within {
		transform: translateY(-8px);
		box-shadow:
			0 10px 25px -5px rgba(30, 223, 149, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.1);
	}

	p {
		font-family: var(--font-mono);
	}

	h1 {
		font-family: var(--font-style);
	}
</style>
