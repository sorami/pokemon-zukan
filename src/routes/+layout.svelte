<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex flex-col my-10 justify-center items-center">
	<header class="max-w-3xl font-bold text-2xl mb-10">
		<a href="/">ポケモンずかん</a>
	</header>

	<slot></slot>
</div>
