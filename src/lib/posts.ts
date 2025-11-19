export type Post = {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	tags?: string[];
};

export const posts: Post[] = [
	{
		title: 'Async Rust: Building fast, safe async systems',
		slug: 'async-rust',
		date: '2025-06-01',
		excerpt:
			'An introduction to asynchronous programming in Rust, covering async/await, executors, and building performant services.',
		tags: ['rust', 'async', 'systems']
	}
];
