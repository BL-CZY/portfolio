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
			'Implemented a logging system for real-time data monitoring',
			'Project lead in the sensors team',
			'Improved the reliability of the Low Power BMS driver',
			'Hands-on experience with embedded systems testing and development'
		]}
		link="https://teamhyped.co.uk/"
		logo="HYPED"
	/>
	<Panel
		name="Operating System Development"
		technologies={['Qemu', 'x86-64', 'Rust', 'Assembly']}
		descriptions={[
			'Developed a custome operating system kernel in Rust and assembly',
			'Implemented a multicore scheduler and async runtime with program loading and context switching',
			'Wrote a driver for the GPT partition table, ext2 filesystem, and AHCI-SATA drives',
			'Utilized concepts and specifications such as the UEFI, ACPI, APIC, GDT, IDT, and paging',
			'Included algorithms such as CRC32 and RNG'
		]}
		link="https://github.com/BL-CZY/dvida_oxide"
		logo="OSSSSS"
		right
	/>
	<Panel
		name="Cybersecurity Enthusiast"
		technologies={['Python', 'Binary Ninja', 'Burp Suite', 'Pwntools']}
		descriptions={[
			'Currently a committee member of the University of Edinburgh’s cybersecurity SIG under COMPSOC, SIGINT; participated in CTFs such as HackTheBox University CTF',
			'Well-equiped with knowledge on how to develop software that is secure and resistant to common vulnerabilities such as enforcing CSP and CORS policies',
			'Explored binary exploitation techniques such as FSOP and ROP',
			'Studied web security vulnerabilities such as CSRF, XSS, file upload vulnerabilities, SQL injection, etc.',
			'Familiar with common tools such as Binary Ninja, Burp Suite, GDB, and Pwntools'
		]}
		link="https://sigint.mx/"
		logo="SIGINT"
	/>
</div>

<style>
	h1 {
		font-family: var(--font-main);
	}
</style>
