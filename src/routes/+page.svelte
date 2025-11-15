<script lang="ts">
	import { SVG, type Svg } from '@svgdotjs/svg.js';

	function add_path(draw: Svg, line1: string, line2: string, delay: number, dur: number) {
		draw.size('100%', '100%');

		let path = draw.path(line1).fill('none').stroke({ width: 3, color: '#363636' });

		let length = path.length();

		// @ts-ignore
		path.stroke({
			dasharray: length,
			dashoffset: length
		});

		path.animate(1000, delay).ease('<>').stroke({ dashoffset: 0 });

		// @ts-ignore
		path.animate(dur).ease('<>').plot(line2).loop(true, true);

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

<div class="fixed top-0 right-0 bottom-0 left-0" id="drawing"></div>
