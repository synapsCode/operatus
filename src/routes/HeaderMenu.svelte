<script>
	export let SectionsId;
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		console.log(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
	let y = 100;
</script>

<svelte:window bind:scrollY={y} />
<div
	class="flex sm:flex-wrap items-center p-4 sm:py-8 w-full {y > 100
		? 'fixed top-0 bg-zinc-900'
		: 'relative'}"
>
	<div class="logo mr-4 md:ml-10 sm:min-w-fit">
		<img src="/Logo-BV.svg" alt="Beauro Veritas" width="95" height="121" />
	</div>
	<!-- nawifacja zamienić na tablicę obiektów -->
	<nav
		class="w-full lg:w-10/12 sm:w-9/12 max-w-[1280px] flex flex-row leading-6 font-semibold text-slate-700 m-auto justify-between"
	>
		<ul
			class="basis-2/3 sm:basis-1/2 flex flex-col md:flex-row uppercase text-white font-medium tracking-widest"
		>
			<li class="xl:mr-20 lg:mr-10 mr-5 drop-shadow-3xl min-w-fit">
				<a href="#{SectionsId.surveyors}" on:click|preventDefault={scrollIntoView}>Surveyors</a>
			</li>
			<li class="xl:mr-20 lg:mr-10 mr-5 drop-shadow-3xl min-w-fit">
				<a href="#{SectionsId.backOffice}" on:click|preventDefault={scrollIntoView}>BACK-OFFICE</a>
			</li>
			<li class="xl:mr-20 lg:mr-10 mr-5 drop-shadow-3xl min-w-fit">
				<a href="#{SectionsId.client}" on:click|preventDefault={scrollIntoView}>Client</a>
			</li>
		</ul>
		<ul
			class="flex flex-col md:flex-row basis-1/3 sm:basis-1/2 sm:space-x-8 uppercase text-white font-medium tracking-widest md:justify-end"
		>
			<li class="drop-shadow-3xl self-end">
				<a class=" w-auto" href="/">Contact</a>
			</li>
			<li class="drop-shadow-3xl self-end">
				<a class=" w-auto" href="/">ENG</a>
			</li>
		</ul>
	</nav>
</div>
