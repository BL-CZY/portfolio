<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/nav.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	interface Circle {
		id: number;
		x: number;
		y: number;
		targetY: number;
		size: number;
		opacity: number;
		color: number;
		floatOffset: number;
		floatIntensity: number;
		inc: number;
		progress: number; // 0 to 1 for ease-out animation
	}

	let circles = $state<Circle[]>([]);
	let nextId = 0;

	onMount(() => {
		// Spawn initial circles
		for (let i = 0; i < 100; i++) {
			setTimeout(() => spawnCircle(), i * 50);
		}

		// Animation loop for floating movement
		const animate = () => {
			circles = circles.map((circle) => {
				if (circle.progress < 1) {
					// Rising phase with ease-out
					circle.progress += 0.015;
					if (circle.progress > 1) circle.progress = 1;

					// Ease-out function: 1 - (1-t)^3
					const eased = 1 - Math.pow(1 - circle.progress, 3);
					circle.y = 100 - (100 - circle.targetY) * eased;
				} else {
					// Always update float offset for smooth transition
					circle.floatOffset += circle.inc;
				}

				return circle;
			});
			requestAnimationFrame(animate);
		};
		animate();
	});

	function spawnCircle() {
		const newCircle: Circle = {
			id: nextId++,
			x: Math.random() * 100, // percentage
			y: 100, // start at bottom
			targetY: Math.random() * 80 + 10, // target position (10-90%)
			size: 4, // 8-23px (smaller)
			opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
			color: Math.trunc(Math.random() * 5 + 1),
			floatOffset: Math.PI * Math.trunc(Math.random() * 10 - 5),
			floatIntensity: (Math.random() * 2 - 1) / 0.5,
			inc: (Math.random() - 0.5) / 50,
			progress: 0
		};
		circles = [...circles, newCircle];
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<div class="circles-container">
		{#each circles as circle (circle.id)}
			{@const floatX = Math.sin(circle.floatOffset) * 20 * circle.floatIntensity}
			{@const floatY = Math.cos(circle.floatOffset + Math.PI / 2) * 15 * circle.floatIntensity}
			<div
				class="circle"
				style="
					left: calc({circle.x}% + {floatX}px);
					top: calc({circle.y}% + {floatY}px);
					width: {circle.size}px;
					height: {circle.size}px;
					opacity: {circle.opacity};
					background: var(--color-accent-{circle.color});
				"
			></div>
		{/each}
	</div>

	<Nav />
	{@render children()}
</div>

<style>
	.layout {
		position: relative;
		min-height: 100vh;
	}

	.circles-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.circle {
		position: absolute;
		border-radius: 50%;
		transition: opacity 0.3s ease;
	}
</style>
