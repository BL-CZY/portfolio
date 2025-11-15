<script lang="ts">
	import img1 from '$lib/assets/async-rust/image.png';

	const snippet1 = `pub trait Future {
    // the type that this future will produce on completion
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}`;
</script>

<div>
	<h1>How does Rust async - behind the magic</h1>

	<h2>Prefix</h2>
	<p>
		Sometimes when we are programming, we tend to perform some actions that require "waiting", such
		as waiting for an HTTP response.
	</p>
	<img src={img1} alt="Sync waiting" />
	<p>
		But in reality, we don't want to stop the entire program from running. We want our program to do
		something else while it is waiting on this one task to complete. As a result, Rust provides a
		flexible and extensive framework for async. Hence, in our previous for loop, we can just add an
		async and await pattern <code>receive_request().await;</code>
	</p>
	<code> async fn </code>
	<p>
		There are a lot of resources on how to use async Rust, like the one in <a
			href="https://tokio.rs/tokio/tutorial">Tokio-rs</a
		>. As a result, in this blog post, I would like to talk about how async Rust works behind the
		scenes.
	</p>

	<h2>What is a Future</h2>
	<p>
		In Rust, an async function will return a Future. A Future in Rust is essentially a trait like
		so(taken from Rust core):
	</p>
	<code>{snippet1}</code>
	<p>
		As a result, any struct that implements this trait is able to be used with the ".await" syntax
	</p>
	<h3>What is this??</h3>
	<p>The poll function seems a bit intimidating, so let's break down everything in it.</p>
	<p>
		The poll function requires that <span>Self</span> must be a mutable reference wrapped in a
		<span>Pin</span>, which, according to the
		<a href="https://doc.rust-lang.org/core/pin/index.html">Rust documentation</a>, is:
		<i
			>"We say that a value has been pinned when it has been put into a state where it is guaranteed
			to remain located at the same place in memory from the time it is pinned until its <span
				>drop</span
			> is called."</i
		>
		Here, the <span>drop</span> function refers to the destructor of the struct, which can happen
		when the program goes out of scope or when <span>drop</span> is called on the struct. You can
		find more information about this concept in RAII (Resource Acquisition Is Initialization)
		<a href="https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization">here</a>. The
		poll function also takes in a <span>Context</span>, which we will cover later.
	</p>
	<p>
		The <span>poll</span> function will return the specified <span>Output</span> in a
		<span>Poll</span> enum, which contains two variants:
	</p>
	<li>
		<ul>
			<p>
				Poll::Ready(T) - indicates that the future has completed and produced a value of type T.
			</p>
		</ul>
		<ul>
			<p>
				Poll::Pending - indicates that the future is not yet complete and needs to be polled again
				later.
			</p>
		</ul>
	</li>
	<h3>Now we talk about Context and Waker</h3>
	<p>
		The <span>poll</span> function also takes in a <span>Context</span>, which contains a field of
		type <span>Waker</span>. A <span>Waker</span> has two functions <span>wake(self)</span> and
		<span>wake_by_ref(&self)</span>. As a result, the <span>poll</span> function can pass this waker
		to other places that may complete the future, and then the future is completed, it can call waker.wake()
		to notify the executor. The implementation of a waker is up to the executor, so this allows significant
		volatility for the executor.
	</p>
	<h2>The executor</h2>
</div>
