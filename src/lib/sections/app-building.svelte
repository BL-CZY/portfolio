<script lang="ts">
	import { slide } from 'svelte/transition';
	import Project from './project.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let show_frontend_details = $state(true);
	let show_backend_details = $state(false);
	let show_deployment_details = $state(false);

	let title: HTMLElement | null = $state(null);
	let title_intersecting = $state(false);

	let skillsTitle: HTMLElement | null = $state(null);
	let skillsTitle_intersecting = $state(false);

	let skillsCard: HTMLElement | null = $state(null);
	let skillsCard_intersecting = $state(false);

	let languageCard: HTMLElement | null = $state(null);
	let languageCard_intersecting = $state(false);

	let motivatedCard: HTMLElement | null = $state(null);
	let motivatedCard_intersecting = $state(false);

	let projectsTitle: HTMLElement | null = $state(null);
	let projectsTitle_intersecting = $state(false);

	let project1: HTMLElement | null = $state(null);
	let project1_intersecting = $state(false);

	let project2: HTMLElement | null = $state(null);
	let project2_intersecting = $state(false);

	let project3: HTMLElement | null = $state(null);
	let project3_intersecting = $state(false);
</script>

<div class="m-auto max-w-7xl">
	<IntersectionObserver once element={title} bind:intersecting={title_intersecting} />
	<div
		class="slide-from-top pb-10 text-center delay-0"
		bind:this={title}
		class:visible={title_intersecting}
	>
		<h1 class="text-5xl text-text-1">App Development</h1>
	</div>

	<IntersectionObserver once element={skillsTitle} bind:intersecting={skillsTitle_intersecting} />
	<div
		class="slide-from-top pb-10 text-center delay-150"
		bind:this={skillsTitle}
		class:visible={skillsTitle_intersecting}
	>
		<h2 class="text-4xl text-text-1">Skills</h2>
	</div>

	<div class="flex flex-col gap-5 pr-10 pb-10 pl-10 md:flex-row">
		<IntersectionObserver once element={skillsCard} bind:intersecting={skillsCard_intersecting} />
		<div
			class="slide-from-left relative flex-4 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl delay-0"
			bind:this={skillsCard}
			class:visible={skillsCard_intersecting}
		>
			<div
				class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
				style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
			></div>

			<div class="h-full w-full">
				<div
					class=" flex w-full translate-x-0 items-center gap-3 p-2 transition-transform duration-300 hover:translate-x-1"
				>
					<h2 class="text-4xl font-bold text-white">Frontend</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_frontend_details = !show_frontend_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl duration-200 hover:border-accent-1"
							style="transition: border-color 200ms"
							>{show_frontend_details ? 'See less' : 'See more'}</button
						>
					</div>
				</div>
				{#if show_frontend_details}
					<div transition:slide class="pl-5">
						<p class="text-text-1">
							I am profficient in Sveltekit and familiar with React and Next.js, as well as tailwind
							and vanilla html, css, and javascript.
						</p>
					</div>
				{/if}

				<div
					class="flex w-full translate-x-0 items-center gap-3 p-2 duration-300 hover:translate-x-1"
					style="transition: transform 300ms"
				>
					<h2 class="text-4xl font-bold text-accent-1">Backend</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_backend_details = !show_backend_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl duration-200 hover:border-accent-1"
							style="transition: border-color 200ms"
							>{show_backend_details ? 'See less' : 'See more'}</button
						>
					</div>
				</div>
				{#if show_backend_details}
					<div transition:slide class="pl-5">
						<p class=" text-text-1">
							I am familiar with various backend technologies for database and authentication,
							system programming for high performance applications, and cybersecurity principles to
							ensure secure application development.
						</p>
					</div>
				{/if}

				<div
					class="flex w-full translate-x-0 items-center gap-3 p-2 duration-300 hover:translate-x-1"
					style="transition: transform 300ms"
				>
					<h2 class="text-4xl font-bold text-white">Deploy</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_deployment_details = !show_deployment_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl duration-200 hover:border-accent-1"
							style="transition: border-color 200ms"
							>{show_deployment_details ? 'See less' : 'See more'}</button
						>
					</div>
				</div>
				{#if show_deployment_details}
					<div transition:slide class="pl-5">
						<p class=" text-text-1">
							With my extensive experience with linux, I have deployed multiple applications with
							AWS EC2 and hosted domain names with AWS Route 53.
						</p>
					</div>
				{/if}
			</div>
		</div>
		<div class="flex flex-3 flex-col gap-5">
			<IntersectionObserver
				once
				element={languageCard}
				bind:intersecting={languageCard_intersecting}
			/>
			<div
				class="slide-from-right relative flex-7 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl delay-0"
				bind:this={languageCard}
				class:visible={languageCard_intersecting}
			>
				<div
					class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
					style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
				></div>

				<div class="w-full translate-y-0 transition-transform duration-300 hover:-translate-y-1">
					<h2 class="p-5 text-4xl font-bold text-white">Fluent in English and Mandarin</h2>
				</div>
			</div>
			<IntersectionObserver
				once
				element={motivatedCard}
				bind:intersecting={motivatedCard_intersecting}
			/>
			<div
				class="slide-from-right relative flex-10 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl delay-150"
				bind:this={motivatedCard}
				class:visible={motivatedCard_intersecting}
			>
				<div
					class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
					style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
				></div>

				<div
					class="h-full w-full translate-y-0 transition-transform duration-300 hover:-translate-y-1"
				>
					<h2 class="text-4xl font-bold text-white">Self-motivated</h2>

					<div class="pt-2 pl-5">
						<p class=" text-text-1">
							I have learned multiple programming languages and frameworks on my own through online
							resources and documentation.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<IntersectionObserver
		once
		element={projectsTitle}
		bind:intersecting={projectsTitle_intersecting}
	/>
	<div
		class="slide-from-top pb-10 text-center delay-0"
		bind:this={projectsTitle}
		class:visible={projectsTitle_intersecting}
	>
		<h2 class="text-4xl text-text-1">Projects</h2>
	</div>

	<div class="grid grid-cols-1 gap-10 pr-10 pl-10 sm:grid-cols-2 lg:grid-cols-3">
		<IntersectionObserver once element={project1} bind:intersecting={project1_intersecting} />
		<div
			class="slide-from-bottom delay-0"
			bind:this={project1}
			class:visible={project1_intersecting}
		>
			<Project
				name="Portfolio Website"
				description="A personal portfolio website to showcase my projects and skills."
				technologies={['Svelte', 'Tailwind CSS', 'Vite']}
				link={'https://github.com/BL-CZY/portfolio'}
			/>
		</div>

		<IntersectionObserver once element={project2} bind:intersecting={project2_intersecting} />
		<div
			class="slide-from-bottom delay-150"
			bind:this={project2}
			class:visible={project2_intersecting}
		>
			<Project
				name="Portfolio Website"
				description="A personal portfolio website to showcase my projects and skills."
				technologies={['Svelte', 'Tailwind CSS', 'Vite']}
				link={'https://github.com/BL-CZY/portfolio'}
			/>
		</div>

		<IntersectionObserver once element={project3} bind:intersecting={project3_intersecting} />
		<div
			class="slide-from-bottom delay-300"
			bind:this={project3}
			class:visible={project3_intersecting}
		>
			<Project
				name="Portfolio Website"
				description="A personal portfolio website to showcase my projects and skills."
				technologies={['Svelte', 'Tailwind CSS', 'Vite']}
				link={'https://github.com/BL-CZY/portfolio'}
			/>
		</div>
	</div>
	<hr class="my-8 border-accent-1/30" />
</div>

<style>
	p {
		font-family: var(--font-mono);
	}

	h1,
	h2 {
		font-family: var(--font-main);
	}

	/* Slide from left animations */
	.slide-from-left {
		opacity: 0;
		transform: translateX(-30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	/* Slide from right animations */
	.slide-from-right {
		opacity: 0;
		transform: translateX(30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	/* Slide from top animations */
	.slide-from-top {
		opacity: 0;
		transform: translateY(-30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	/* Slide from bottom animations */
	.slide-from-bottom {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
		display: block;
	}

	/* Visible state for all animations */
	.visible {
		opacity: 1 !important;
		transform: translate(0, 0) !important;
	}

	/* Delay classes */
	.delay-0 {
		transition-delay: 0ms;
	}

	.delay-150 {
		transition-delay: 150ms;
	}

	.delay-300 {
		transition-delay: 300ms;
	}
</style>
