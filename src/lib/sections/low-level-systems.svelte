<script>
	import Project from './project.svelte';
</script>

<div class="m-auto max-w-7xl">
	<div class="pb-10 text-center">
		<h1 class="text-5xl text-text-1">App Building</h1>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<Project
			name="Portfolio Website"
			description="A personal portfolio website to showcase my projects and skills."
			technologies={['Svelte', 'Tailwind CSS', 'Vite']}
		/>
	</div>
</div>
