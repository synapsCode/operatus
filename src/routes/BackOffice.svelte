<script>
	import Card from '../components/Card.svelte';
	import Title from '../components/Title.svelte';
	export let id;
	const operators = [
		{
			title: 'Orders',
			icon: '/icon-paper-pencil.svg',
			description:
				'Each separate object is the client nomination for the separate job for an indicated inspection company or office. The orders are linked to the inspection charts, offers, prices, invoices, related emails / SMSes /dispatches.'
		},
		{
			title: 'Authorization',
			icon: '/icon-keys.svg',
			description:
				'The application offers the multilevel system of access, with no limit in number of levels, which can be dynamically created by users with adequate… level of access.'
		},
		{
			title: 'Catalogues',
			icon: '/icon-briefcase.svg',
			description:
				'The entire analysis process in one place. Full register of samples, methods, tests, results, equipment and reagents.'
		},
		{
			title: 'Communication',
			icon: '/icon-envelope.svg',
			description:
				'The entire analysis process in one place. Full register of samples, methods, tests, results, equipment and reagents.'
		}
	];
</script>

<section class="md:min-h-[700px] px-5 py-10 lg:p-20" {id}>
	<div class="max-w-[1200px] w-full mx-auto flex flex-col">
		<Title text="Selected functions for back office operator" center />
		<div class="grid sm:grid-cols-2 gap-10">
			{#each operators as card}
				<Card {card} />
			{/each}
		</div>
		<div class="grid place-content-center mt-9">
			<a
				rel="noreferrer"
				target="_blank"
				href="/BV_Operatus_Overview_16.pdf"
				class="text-red self-center col-span-5 underline">See more features</a
			>
		</div>
	</div>
</section>
