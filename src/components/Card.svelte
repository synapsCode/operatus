<script>
	export let card;
	import Icon from './Icon.svelte';
	console.log(card);
</script>

<div class="grid grid-cols-6 md:max-w-xl mb-10">
	{#if card.icon}<Icon src={card.icon} alt="" />{/if}
	<div class={card.icon ? 'col-span-5' : 'col-span-6'}>
		<h5 class="text-xl pb-2 text-gray-500">{card.title}</h5>
		<p class="text-base text-gray-400">
			{card.description}
		</p>
	</div>
</div>
