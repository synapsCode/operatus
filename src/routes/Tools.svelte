<script>
	const CLIENT = [
		'Technologically advanced solutions',
		'Uniform standards of work',
		'Easy and adaptable electronic documents',
		'Automatically self-supporting e-forms ',
		'All in one place with easy and immediate access (standards, procedures, files, methods, forms…) ',
		'Easy and unquestionable way of proceeding Noticeable manpower and costs saving'
	];
	const BACKOFFICE = [
		'Easy / one-button push procurement of required documents (reports, certificates…) of any (even',
		'most unusual) content / construction ',
		'Clear and immediate access to the inspection results',
		'Significant restriction of work volume in the office',
		'Method of execution of orders bringing self- and customers satisfaction'
	];
	const SURVEYORS = [
		'Permanent real-time access to the inspection results on any type of device from any place all over the world',
		'Clear and transparent picture of the situation on spot',
		'Dedicated Clients’ portal with all current and archive files',
		'E-mail and SMS notification at any stage of the proces'
	];
</script>

<section class="relative flex md:min-h-[700px] bg-center text-white flex-col py-24" id="tools">
	<div class="max-w-[1200px] w-full mx-auto flex flex-col">
		<h2
			class="inline-block text-4xl text-center pb-20 text-white md:w-2/3 mx-auto tracking-tight dark:text-slate-200"
		>
			A comprehensive set of tools is provided for each participant of the process:
		</h2>
		<div class="grid grid-cols-3 gap-8">
			<div>
				<figure class="pb-7">
					<img src="/icon-helmet.png" alt="helmet icon" />
				</figure>
				<p>Client</p>
				<ul class="ml-4 pt-4 list-disc font-light">
					{#each CLIENT as item}
						<li class="pb-1">{item}</li>
					{/each}
				</ul>
			</div>
			<div>
				<figure class="pb-7">
					<img src="/icon-monitor.png" alt="monitor icon" />
				</figure>
				<p>Back-office operator</p>
				<ul class="ml-4 pt-4 list-disc font-light">
					{#each BACKOFFICE as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div>
				<figure class="pb-7">
					<img src="/icon-people.png" alt="people icon" />
				</figure>
				<p>Surveyors</p>
				<ul class="ml-4 pt-4 list-disc font-light">
					{#each SURVEYORS as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	#tools {
		background-color: #625b71;
	}
</style>
