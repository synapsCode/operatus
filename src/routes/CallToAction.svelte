<script>
	import Title from '../components/Title.svelte';
	import Button from '../components/Button.svelte';
</script>

<section class="px-5 py-10 lg:p-20">
	<div class="max-w-[1200px] w-full mx-auto sm:flex items-center">
		<div class="basis-1/2">
			<Title text="Terms of use" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div class="basis-1/2 sm:py-0 py-8 justify-center flex">
			<Button title="Lorem ipsum" href="/regulamin_operatus_saas.pdf" />
		</div>
	</div>
</section>
