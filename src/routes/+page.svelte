<script lang="ts">
	import AppBuilding from '$lib/sections/app-building.svelte';
	import PersonalProfile from '$lib/sections/personal-profile.svelte';
	import { SVG, type Svg } from '@svgdotjs/svg.js';

	function add_path(draw: Svg, line1: string, line2: string, delay: number, dur: number) {
		draw.size('100%', '100%');

		let path = draw.path(line1).fill('none').stroke({ width: 3, color: '#36363655' });

		let length = path.length();

		// @ts-ignore
		path.stroke({
			dasharray: length,
			dashoffset: length
		});

		path.animate(1000, delay).ease('<>').stroke({ dashoffset: 0 });

		// @ts-ignore
		// path.animate(dur).ease('<>').plot(line2).loop(true, true);

		return path;
	}

	$effect(() => {
		let draw = SVG().addTo('#drawing');
		add_path(
			draw,
			'M 0 300 C 573 651 722 -171 1500 211',
			'M 0 300 C 622 471 661 -33 1500 211',
			0,
			3000
		);
		add_path(
			draw,
			'M 0 591 C 676 248 731 566 1500 411',
			'M 0 591 C 600 616 731 307 1500 411',
			200,
			3500
		);
		add_path(
			draw,
			'M 0 100 C 573 651 722 -171 1471 565',
			'M 0 100 C 629 183 484 402 1471 565',
			400,
			4500
		);
	});
</script>

<div class="fixed top-0 right-0 bottom-0 left-0 z-[-2]" id="drawing"></div>
<div class="fixed top-0 right-0 bottom-0 left-0 z-[-1] filter"></div>

<PersonalProfile />
<AppBuilding />

<style>
	.filter {
		background: radial-gradient(
			circle at center,
			transparent 0%,
			var(--color-base-1) 95%,
			var(--color-base-1) 100%
		);
	}
</style>
