<script>
	import Card from '../components/Card.svelte';
	const cards = [
		{
			title: 'Sampling',
			icon: '/icon-bottles.svg',
			description:
				'Full monitoring of each and every sample from its scheduling up to the expiry date. This also embraces sample delivery process (together with integration with courier system).'
		},
		{
			title: 'Analyses',
			icon: '/icon-tubes.svg',
			description:
				'The entire analysis process in one place. Full register of samples, methods, tests, results, equipment and reagents '
		},
		{
			title: 'Weighing',
			icon: '/icon-waitscales.svg',
			description:
				'Manual registration of weighing results or direct (automatic) transfer from the weighing facility. The chart is linked to the registers of scales (and their expiry dates), warehouses, vessels, holds, compartments,lots.'
		}
	];
</script>

<section class=" lg:min-h-[700px] flex sm:p-0" id="surveyors">
	<div
		class="hidden sm:block xl:basis-1/3 basis-1/2 bg-no-repeat bg-top-right bg-image bg-cover bg-center"
		id=""
	/>
	<div class="lg:p-20 sm:basis-1/2 px-5 py-10">
		<h2 class="inline-block text-2xl mb-4 md:mb-20 md:w-2/3 text-slate-700">
			Selected functions for Surveyors
		</h2>
		{#each cards as card}
			<Card {card} />
		{/each}
	</div>
</section>

<style>
	#surveyors {
		background-color: #efe9f5;
	}
	.bg-image {
		background-image: url('/photo-1.jpg');
	}
</style>
