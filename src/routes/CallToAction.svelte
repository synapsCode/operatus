<script>
	import Title from '../components/Title.svelte';
	import Button from '../components/Button.svelte';
</script>

<section class="px-5 py-10 lg:p-20">
	<div class="max-w-[1280px] w-full mx-auto sm:flex items-center">
		<div class="basis-1/2">
			<Title text="Terms of use" />
			<p class="text-gray-400">
				SaaS (software as a service) is a software distribution model in which the application is
				stored and made available to users by the manufacturer via the Internet. This eliminates the
				need to install and run the program on the client computer. The SaaS model transfers the
				responsibilities of management, updating and technical support from the consumer to the
				provider.
			</p>
		</div>
		<div class="basis-1/2 sm:py-0 py-8 justify-center flex">
			<Button title="OPERATUS REGULATIONS" href="/regulamin_operatus_saas.pdf" />
		</div>
	</div>
</section>
