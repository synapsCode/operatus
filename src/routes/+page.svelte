<script>
	import Header from '../components/Header.svelte';
</script>

<section class="relative flex justify-center bg-lime-50 md:min-h-[700px]">
	<Header />
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
