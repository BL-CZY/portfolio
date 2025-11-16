<script>
	let isScrolled = $state(false);
</script>

<nav
	class="fixed z-10 transition-all duration-100"
	class:floating-blur={isScrolled}
	class:fixed-noblur={!isScrolled}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<!-- Logo/Brand -->
			<div class="flex items-center">
				<a href="/" class="flex shrink-0 items-center">
					<span class="font-style text-2xl font-bold text-accent-1">D. H.</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="flex items-center space-x-8">
				<a
					href="/about"
					class="hover-underline font-monno px-3 py-2 text-sm font-medium text-text-1 transition-colors"
				>
					About
				</a>
				<a
					href="/blogs"
					class="hover-underline px-3 py-2 font-mono text-sm font-medium text-text-1 transition-colors"
				>
					Blogs
				</a>
			</div>
		</div>
	</div>
</nav>

<div class="h-10"></div>

<svelte:window
	onscroll={() => {
		if (window.scrollY > 0) {
			isScrolled = true;
		} else {
			isScrolled = false;
		}
	}}
/>

<style>
	.hover-underline {
		position: relative;
	}

	.hover-underline::before {
		content: '';
		width: 100%;
		height: 2px;
		background-color: var(--color-accent-2);
		position: absolute;
		bottom: 0;
		left: 0;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}
	.hover-underline:hover::before {
		transform: scaleX(1);
	}

	.floating-blur {
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		left: 2%;
		right: 2%;
		top: 1%;
		border: 1px solid var(--color-accent-2);
		border-radius: 10px;
		transition: all 0.3s ease;
	}

	.fixed-noblur {
		backdrop-filter: none;
		box-shadow: none;
		left: 0;
		right: 0;
		top: 0;
		border: 0px solid #00000000;
		border-radius: 10px;
		transition: all 0.3s ease;
	}
</style>
