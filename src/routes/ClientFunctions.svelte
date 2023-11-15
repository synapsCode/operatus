<script>
	import Title from '../components/Title.svelte';
	import Card from '../components/Card.svelte';
	export let id;
	const cardsData = [
		{
			title: 'Real-Time Inspection Report',
			description:
				'Client using Operatus has permanent access online to current inspection results. Each and every step / result / observation is immediately registered with use of mobile device.'
		},
		{
			title: 'System without limits',
			description:
				'The application can be opened on any kind of device (PC, laptop, tablet, smartphone) with use of almost any of presently used web browsers (Google Chrome, Firefox, Internet Explorer, Opera, Safari...). The data are stored on the remote servers and can be reached by users from any place all over the globe.'
		},
		{
			title: 'B2B integration',
			description:
				'OPERATUS can be integrated with any already existing external system, application or device. Various technologies are available, depending on preferences and availability, such as SOAP and REST web services, FTP servers and others.'
		}
	];
</script>

<section class="flex md:min-h-[700px] flex-row-reverse" {id}>
	<div class="hidden md:block xl:basis-1/3 basis-1/2 bg-right bg-image bg-cover bg-no-repeat" />
	<div class="lg:p-20 md:basis-1/2 px-5 py-10">
		<Title text="Selected functions for client" />
		{#each cardsData as card}
			<Card {card} />
		{/each}
	</div>
</section>

<style>
	.bg-image {
		background-image: url('/photo-2.jpg');
	}
	#Client {
		background-color: #efe9f5;
	}
	@media screen and (min-width: 640px) {
	}
</style>
