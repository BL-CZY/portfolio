<script>
	import Panel from './panel.svelte';
</script>

<div class="relative m-auto max-w-7xl pt-10 pr-10 pl-10">
	<div class="pb-10 text-center">
		<h1 class="text-5xl text-text-1">System & Cybersecurity enthusiast</h1>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>
	<Panel
		name="HYPED Project Lead"
		technologies={['Rust', 'Async', 'Embedded']}
		descriptions={[
			'Participated in Hyperloop Edinburgh society',
			'Project lead in the sensors team',
			'Working on embedded systems for high-speed pod',
			'Using Rust for safety and performance',
			'Implemented a logging system for real-time data monitoring'
		]}
		link=""
		logo="HYPED"
	/>
	<Panel
		name="Foo"
		technologies={['Bar', 'Bar', 'Bar']}
		descriptions={['a', 'a', 'a', 'a', 'a']}
		link=""
		logo="OSSSSS"
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
		font-family: var(--font-main);
	}
</style>
