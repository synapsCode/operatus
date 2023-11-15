<script>
	import HeaderMenu from './HeaderMenu.svelte';
	import Button from '../components/Button.svelte';
	export let SectionsId;
</script>

<section class="justify-center lg:min-h-[750px] bg-bottom" id="header">
	<HeaderMenu {SectionsId} />
	<header class="p-5 flex flex-col w-full">
		<div class="max-w-[1280px] mx-auto md:pt-2 sm:pt-24 lg:pt-20">
			<figure class="p-8">
				<img src="/logo-operatus.svg" alt="Operatus" class="m-auto" width="508" height="106" />
			</figure>
			<div class="mb-10 mt-3 sm:mt-10 flex justify-center space-x-6 text-sm">
				<Button title="Register" bgWhite />
				<Button title="Log in" classes="w-auto" />
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
