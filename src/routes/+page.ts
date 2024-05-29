async function getPokemon(fetch: any, id: number) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
	const data = await response.json();

	const jaName = data.names.find((name: any) => name.language.name === 'ja-Hrkt').name;
	const flavorText = data.flavor_text_entries.find(
		(entry: any) => entry.language.name === 'ja'
	).flavor_text;

	const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data2 = await response2.json();
	const sprites = data2.sprites;

	return {
		jaName,
		flavorText,
		imgSrc: sprites.front_default
	};
}

export async function load({ fetch }) {
	let pokemons = [];
	for (let i = 1; i <= 16; i++) {
		const pokemon = await getPokemon(fetch, i);
		pokemons.push(pokemon);
	}

	return {
		pokemons
	};
}
