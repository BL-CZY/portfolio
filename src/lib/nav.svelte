<script>
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="bg-white shadow-lg">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<!-- Logo/Brand -->
			<div class="flex items-center">
				<a href="/" class="flex flex-shrink-0 items-center">
					<span class="text-2xl font-bold text-blue-600">Logo</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				<a
					href="/"
					class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
				>
					Home
				</a>
				<a
					href="/about"
					class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
				>
					About
				</a>
				<a
					href="/services"
					class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
				>
					Services
				</a>
				<a
					href="/contact"
					class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
				>
					Contact
				</a>
				<a
					href="/login"
					class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
				>
					Login
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMobileMenu}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					{#if !mobileMenuOpen}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{:else}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				<a
					href="/"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
				>
					Home
				</a>
				<a
					href="/about"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
				>
					About
				</a>
				<a
					href="/services"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
				>
					Services
				</a>
				<a
					href="/contact"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
				>
					Contact
				</a>
				<a
					href="/login"
					class="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
				>
					Login
				</a>
			</div>
		</div>
	{/if}
</nav>
