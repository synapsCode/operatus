<script>
	export let text;
	export let color;
	export let center;
</script>

<h2
	class="inline-block text-2xl tracking-tight mb-8 md:mb-10 lg:mb-16 {color
		? color
		: 'text-gray-500'} {center ? 'md:text-center md:w-2/3 mx-auto' : ''}"
>
	{text}
</h2>
