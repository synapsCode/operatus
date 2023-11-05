<script>
	import HeaderMenu from './HeaderMenu.svelte';
</script>

<header class="relative flex flex-col max-w-[1300px] w-full">
	<HeaderMenu />
	<div class="relative max-w-3xl mx-auto pt-20 sm:pt-24 lg:pt-32">
		<h2
			class="text-slate-900 font-semibold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center dark:text-white"
		>
			Operantus
		</h2>
		<h4 class="mt-12 text-3xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
			Comprehensive Solution For Inspection Bodies
		</h4>
		<div class="mt-6 sm:mt-20 flex justify-center space-x-6 text-sm">
			<a
				href="/"
				class="text-xs tracking-widest uppercase font-semibold h-12 px-12 rounded-full flex items-center justify-center sm:w-aut bg-white w-auto text-slate-800"
				>Register</a
			>
			<a
				href="/"
				class="text-xs tracking-widest uppercase font-semibold h-12 px-12 rounded-full flex items-center justify-center sm:w-aut bg-red-700 w-auto text-slate-50"
				>Log in</a
			>
		</div>
	</div>
</header>
