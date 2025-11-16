<script>
	import Panel from './panel.svelte';
</script>

<div class="relative m-auto max-w-7xl p-10">
	<div class="pb-10 text-center">
		<h1 class="text-5xl text-text-1">System & Cybersecurity enthusiast</h1>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>
	<Panel
		name="Foo"
		technologies={['Bar', 'Bar', 'Bar']}
		descriptions={['a', 'a', 'a', 'a', 'a']}
		link=""
		logo="HYPED"
	/>
	<Panel
		name="Foo"
		technologies={['Bar', 'Bar', 'Bar']}
		descriptions={['a', 'a', 'a', 'a', 'a']}
		link=""
		logo="HYPED"
		right
	/>
	<Panel
		name="Foo"
		technologies={['Bar', 'Bar', 'Bar']}
		descriptions={['a', 'a', 'a', 'a', 'a']}
		link=""
		logo="HYPED"
	/>
</div>

<style>
	h1 {
		font-family: var(--font-mono);
	}
</style>
