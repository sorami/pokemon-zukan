<script lang="ts">
	let { data } = $props();
</script>

<div class="grid gap-3">
	{#each data.pokemons as pokemon}
		<a href={`/pokemon/1`}>
			<div class="p-3 rounded bg-slate-300 shadow w-64">
				<div>{pokemon.jaName}</div>
				<div><img src={pokemon.imgSrc} alt={pokemon.jaName} /></div>
				<div class="text-xs">{pokemon.flavorText}</div>
			</div>
		</a>
	{/each}
</div>
