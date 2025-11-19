<script lang="ts">
	import { posts } from '$lib/posts';
	import IntersectionObserver from 'svelte-intersection-observer';
	let title: HTMLElement | null = $state(null);
	let title_intersecting = $state(false);
</script>

<div class="blog-container">
	<IntersectionObserver once element={title} bind:intersecting={title_intersecting} />
	<div
		class="slide-from-top pb-6 text-center delay-0"
		bind:this={title}
		class:visible={title_intersecting}
	>
		<h1 class="text-4xl text-text-1">Blog</h1>
		<p class="mt-2 text-text-2">Thoughts, tutorials and technical notes.</p>
	</div>

	<div class="blog-grid mt-8">
		{#each posts as post}
			<a href={`/blogs/${post.slug}`} class="block">
				<article class="blog-card">
					<h2 class="blog-title">{post.title}</h2>
					<p class="blog-excerpt">{post.date} — {post.excerpt}</p>
					<div class="blog-tags">
						{#each post.tags ?? [] as tag}
							<span class="blog-tag">{tag}</span>
						{/each}
					</div>
				</article>
			</a>
		{/each}
	</div>
</div>

<style>
	.slide-from-top {
		opacity: 0;
		transform: translateY(-20px);
		transition:
			opacity 1s ease,
			transform 1s ease;
	}

	.visible {
		opacity: 1 !important;
		transform: translate(0, 0) !important;
	}
</style>
