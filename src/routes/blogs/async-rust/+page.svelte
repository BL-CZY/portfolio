<script lang="ts">
	import img1 from '$lib/assets/async-rust/image.png';

	const snippet1 = `pub trait Future {
    // the type that this future will produce on completion
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}`;
</script>

<div class="blog-post util-content-auto util-contain-intrinsic">
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
	<pre class="code-block"><code>{snippet1}</code></pre>
	<p>
		As a result, any struct that implements this trait is able to be used with the ".await" syntax
	</p>
	<h3>What is this??</h3>
	<p>The poll function seems a bit intimidating, so let's break down everything in it.</p>
	<p>
		The poll function requires that <span class="inline-code">Self</span> must be a mutable
		reference wrapped in a
		<span class="inline-code">Pin</span>, which, according to the
		<a href="https://doc.rust-lang.org/core/pin/index.html">Rust documentation</a>, is:
		<i>
			"We say that a value has been pinned when it has been put into a state where it is guaranteed
			to remain located at the same place in memory from the time it is pinned until its <span
				class="inline-code">drop</span
			> is called."
		</i>
		Here, the <span class="inline-code">drop</span> function refers to the destructor of the struct,
		which can happen when the program goes out of scope or when
		<span class="inline-code">drop</span>
		is called on the struct. You can find more information about this concept in RAII (Resource Acquisition
		Is Initialization)
		<a href="https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization">here</a>. The
		poll function also takes in a <span class="inline-code">Context</span>, which we will cover
		later.
	</p>
	<p>
		The <span class="inline-code">poll</span> function will return the specified
		<span class="inline-code">Output</span>
		in a
		<span class="inline-code">Poll</span> enum, which contains two variants:
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
		The <span class="inline-code">poll</span> function also takes in a
		<span class="inline-code">Context</span>, which contains a field of type
		<span class="inline-code">Waker</span>. A <span class="inline-code">Waker</span> has two
		functions <span class="inline-code">wake(self)</span> and
		<span class="inline-code">wake_by_ref(&self)</span>. As a result, the
		<span class="inline-code">poll</span> function can pass this waker to other places that may
		complete the future, and then the future is completed, it can call
		<span class="inline-code">waker.wake()</span> to notify the executor. The implementation of a waker
		is up to the executor, so this allows significant volatility for the executor.
	</p>

	<h2>The executor</h2>
	<p>
		The simplest executor is a single-threaded event loop that polls futures in a loop. It will
		generally contain a queue of tasks, which contain futures to poll. After it calls <span
			class="inline-code">poll</span
		>, it will check the result and continue polling until all futures are complete. Take an example
		in a bare-metal environment where we depend on interrupts to read data from a sensor. We then
		create a <span class="inline-code">Future</span> that will be completed when the interrupt is
		triggered. The executor will poll this future, and when the interrupt is triggered, it will call
		<span class="inline-code">waker.wake()</span> to notify the executor that the future is complete,
		which is normally done by putting the task back to the executor's task queue, and then the executor
		can continue to poll other futures.
	</p>

	<p>
		Of course, there are more complex executors that can run on multiple threads and use
		work-stealing to balance the load across threads. However, the core concept of polling futures
		and using wakers to notify the executor remains the same. There are several design choices that
		can be made. For example, some executors may prefer keeping a task in the same thread for the
		sake of less context switching and better cpu cache performance.
	</p>

	<h2>What are async functions?</h2>
	<p>
		Now that we can create <span class="inline-code">structs</span> that have
		<span class="inline-code">impl Future</span>, we would like to use them in actual async
		functions. However, a function packs more data than a simple future, such as the function's
		stack frame. As a result, <span class="inline-code">async fn</span> is essentially a syntax
		sugar for a function that returns an <span class="inline-code">impl Future</span>. The compiler
		will transform the function body into a state machine, where each state corresponds to a point
		in the function where it can yield control (such as an .await point). The state machine will
		implement the <span class="inline-code">Future</span> trait, and the
		<span class="inline-code">poll</span> function will execute the state machine until it reaches a
		yield point or completes.
	</p>

	<h2>Conclusion</h2>
	<p>
		With this system, one can basically construct any types of async operations with executors
		tailored to their needs. It is also worth noting that the entire system of wakers and futures
		does not require a heap allocator, and each individual thread does not require an actual thread
		that has its own stack. This allows a near-zero cost async system that can be used in all
		environments, from embedded systems to high-performance servers. I am still learning about async
		Rust while developing an async runtime for my custom operating system kernel, so if you have any
		suggestions or corrections, please let me know!
	</p>
</div>
