<script>
	export let title;
	export let classes;
	export let bgWhite;
	export let href = '/';
</script>

<a
	{href}
	class="text-sm w-fit tracking-widest whitespace-nowrap
		uppercase py-4 px-6 sm:px-12 rounded-full flex items-center justify-center sm:w-aut {classes} 
		{bgWhite ? 'bg-white text-gray-500' : 'bg-red text-white'}"
>
	{title}</a
>
