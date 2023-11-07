<script>
	import HeaderMenu from './HeaderMenu.svelte';
</script>

<section class="relative flex justify-center bg-lime-50 md:min-h-[700px] bg-bottom" id="header">
	<header class="relative flex flex-col max-w-[1300px] w-full text-slate-50">
		<HeaderMenu />
		<div class="relative max-w-3xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-slate-50">
			<figure>
				<img src="/operatus.png" alt="Operatus" class="m-auto" />
			</figure>
			<h2 class="mt-12 text-3xl drop-shadow-3xl text-center max-w-3xl mx-auto">
				Comprehensive Solution For Inspection Bodies
			</h2>
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
</section>

<style>
	#header {
		background-image: url('header-photo.jpg');
		background-size: cover;
	}
</style>
