<script lang="ts">
	import { slide } from 'svelte/transition';
	import Project from './project.svelte';

	let show_frontend_details = $state(true);
	let show_backend_details = $state(false);
	let show_deployment_details = $state(false);
</script>

<div class="m-auto max-w-7xl">
	<div class="pb-10 text-center">
		<h1 class="text-5xl text-text-1">App Development</h1>
	</div>

	<div class="pb-10 text-center">
		<h2 class="text-4xl text-text-1">Skills</h2>
	</div>

	<div class="flex flex-col gap-5 pr-10 pb-10 pl-10 md:flex-row">
		<div
			class="relative flex-4 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl"
		>
			<div
				class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
				style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
			></div>

			<div class="h-full w-full">
				<div
					class=" flex w-full translate-x-0 items-center gap-3 p-2 transition-all duration-300 hover:translate-x-1"
				>
					<h2 class="text-4xl font-bold text-white">Frontend</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_frontend_details = !show_frontend_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl transition-all duration-200 hover:border-accent-1"
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
					class="flex w-full translate-x-0 items-center gap-3 p-2 transition-all duration-300 hover:translate-x-1"
				>
					<h2 class="text-4xl font-bold text-accent-1">Backend</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_backend_details = !show_backend_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl transition-all duration-200 hover:border-accent-1"
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
					class="flex w-full translate-x-0 items-center gap-3 p-2 transition-all duration-300 hover:translate-x-1"
				>
					<h2 class="text-4xl font-bold text-white">Deploy</h2>
					<div class="flex-col justify-items-end">
						<button
							onclick={() => {
								show_deployment_details = !show_deployment_details;
							}}
							class="text-1xl rounded-2xl border-2 border-base-3 bg-base-1 p-1 text-base-3 backdrop-blur-3xl transition-all duration-200 hover:border-accent-1"
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
			<div
				class="relative flex-7 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl"
			>
				<div
					class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
					style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
				></div>

				<div class="w-full translate-y-0 transition-all duration-300 hover:-translate-y-1">
					<h2 class="p-5 text-4xl font-bold text-white">Fluent in English and Mandarin</h2>
				</div>
			</div>
			<div
				class="relative flex-10 overflow-hidden rounded-2xl border-2 border-base-3 bg-base-2 p-6 shadow-2xl backdrop-blur-3xl"
			>
				<div
					class="absolute top-full left-full -z-10 h-full w-full -translate-x-[50%] -translate-y-[50%] rounded-full opacity-70 blur-3xl"
					style="background: radial-gradient(circle, var(--color-accent-1) 0%, transparent 70%);"
				></div>

				<div class="h-full w-full translate-y-0 transition-all duration-300 hover:-translate-y-1">
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

	<div class="pb-10 text-center">
		<h2 class="text-4xl text-text-1">Projects</h2>
	</div>

	<div class="grid grid-cols-1 gap-10 pr-10 pl-10 sm:grid-cols-2 lg:grid-cols-3">
		<Project
			name="Portfolio Website"
			description="A personal portfolio website to showcase my projects and skills."
			technologies={['Svelte', 'Tailwind CSS', 'Vite']}
			link={'https://github.com/BL-CZY/portfolio'}
		/>
		<Project
			name="Portfolio Website"
			description="A personal portfolio website to showcase my projects and skills."
			technologies={['Svelte', 'Tailwind CSS', 'Vite']}
			link={'https://github.com/BL-CZY/portfolio'}
		/>
		<Project
			name="Portfolio Website"
			description="A personal portfolio website to showcase my projects and skills."
			technologies={['Svelte', 'Tailwind CSS', 'Vite']}
			link={'https://github.com/BL-CZY/portfolio'}
		/>
	</div>
	<hr class="my-8 border-accent-1/30" />
</div>

<style>
	p,
	h1,
	h2 {
		font-family: var(--font-mono);
	}
</style>
