<script>
	import Card from '../components/Card.svelte';
	import Title from '../components/Title.svelte';
	export let id;
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

<section class="lg:min-h-[700px] flex" {id}>
	<div
		class="hidden md:block xl:basis-1/3 basis-1/2 bg-no-repeat bg-top-right bg-image bg-cover bg-center"
		id=""
	/>
	<div class="lg:p-20 md:basis-1/2 px-5 py-10">
		<Title text="Selected functions for Surveyors" />
		{#each cards as card}
			<Card {card} />
		{/each}
		<div class="grid grid-cols-6 md:max-w-xl mb-10">
			<a
				target="_blank "
				rel="noreferrer"
				href="/BV_Operatus_Overview_16.pdf"
				class="text-red self-center col-span-5 col-start-2 underline">See more features</a
			>
		</div>
	</div>
</section>

<style>
	#Surveyors {
		background-color: #efe9f5;
	}
	.bg-image {
		background-image: url('/photo-1.jpg');
	}
</style>
