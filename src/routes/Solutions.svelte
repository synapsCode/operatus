<script>
	import Button from '../components/Button.svelte';
	import Title from '../components/Title.svelte';
	export let id;
</script>

<section class="flex justify-center lg:min-h-[700px]" {id}>
	<div class="grid sm:grid-cols-2 max-w-[1300px] w-full px-5 py-10 sm:py-21 content-center">
		<div class="flex justify-ar flex-col justify-around lg:mr-20">
			<div>
				<Title text={'ClientFunctions Comprehensive Solution For Inspection Bodies'} />
				<!-- TODO: ten margin nie pasuje mi za bardzo może coś innego się wymyśli -->
				<p class="text-gray-400 text-lg mb-5">
					Operatus is an all-in-one cargo inspection platform serving the continuous real-time
					monitoring of whole inspection process. Ił offers end to end uninterrupted data flow
					between nominating client, inspection body and other parties.
				</p>
			</div>
			<div class="sm:hidden">
				<figure>
					<img src="/monitor.png" alt="operatus solution" />
				</figure>
			</div>
			<Button title="CONTACT US TO SIGN UP" bgWhite classes="m-auto md:m-0" />
		</div>
		<div class="hidden sm:block">
			<figure>
				<img src="/monitor.png" alt="operatus solution" />
			</figure>
		</div>
	</div>
</section>

<style>
	#solution {
		background-color: #efe9f5;
	}
</style>
