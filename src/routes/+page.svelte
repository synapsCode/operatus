<script>
	import Header from './Header.svelte';
	import Solutions from './Solutions.svelte';
	import Tools from './Tools.svelte';
	import Surveyors from './Surveyors.svelte';
	import ClientFunctions from './ClientFunctions.svelte';
	import CallToAction from './CallToAction.svelte';
	import BackOffice from './BackOffice.svelte';
	let SectionsId = {
		surveyors: 'Surveyors',
		backOffice: 'BackOffice',
		client: 'Client'
	};
</script>

<!-- TODO: jak przekazać compoenent do componetnut -->

<Header {SectionsId} />
<Solutions id="solution" />
<Tools id="tools" />
<Surveyors id={SectionsId.surveyors} />
<BackOffice id={SectionsId.backOffice} />
<ClientFunctions id={SectionsId.client} />
<CallToAction />
