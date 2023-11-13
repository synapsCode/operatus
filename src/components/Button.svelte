<script>
	export let title;
	export let classes;
	export let bg;
</script>

<a
	href="/"
	class="text-sm w-fit tracking-widest
		uppercase py-4 px-6 sm:py-5 sm:px-12 rounded-full flex items-center justify-center sm:w-aut {classes} {bg
		? 'bg-white w-fit text-slate-800'
		: ''}">{title}</a
>
