<script>
	import HeaderMenu from './HeaderMenu.svelte';
	import Button from '../components/Button.svelte';
</script>

<section class="relative flex justify-center bg-lime-50 lg:min-h-[700px] bg-bottom" id="header">
	<header class="p-5 relative flex flex-col max-w-[1300px] w-full text-slate-50">
		<HeaderMenu />
		<div class="relative max-w-3xl mx-auto md:pt-2 sm:pt-24 lg:pt-32 text-slate-50">
			<figure class="p-8">
				<img src="/operatus.png" alt="Operatus" class="m-auto" />
			</figure>
			<h2 class="sm:mt-12 text-3xl drop-shadow-3xl text-center max-w-3xl mx-auto">
				Comprehensive Solution For Inspection Bodies
			</h2>
			<div class="mb-10 mt-6 sm:mt-20 flex justify-center space-x-6 text-sm">
				<Button title="Register" classes="bg-red bg-white text-slate-800" />
				<Button title="Login" classes="bg-red-700 w-auto text-slate-50" />
			</div>
		</div>
	</header>
</section>

<style>
	#header {
		background-image: url('/header-photo.jpg');
		background-size: cover;
	}
</style>
