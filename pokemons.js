const acceptedDirections = ['N', 'S', 'E', 'O']

/**
 * Function to get next position of Ash
 * @param currentPosition Current/previous position of Ash
 * @param direction Direction Ash should go
 * @returns Object with new position on axe x and y, and string with this values
 */

export function getMovement (currentPosition, direction) {
	let { x, y } = currentPosition

	const movements = {
		'N': { x, y: y + 1 },
		'S': { x, y: y - 1 },
		'E': { x: x + 1, y },
		'O': { x: x - 1, y },
	}

	const newPosition = movements[direction]

	return { position: newPosition, string: `${newPosition.x}:${newPosition.y}` }
}

/**
 * Function to get filtered array of directions, to avoid unnecessary iterations
 * @param movement All directions
 * @returns Filtered array of directions, based on accepted directions
 */

function getDirections (movement) {
	return movement.split('').map(d => d.toUpperCase()).filter(d => acceptedDirections.includes(d))
}

/**
 * Function to catch pokemons
 * @param movement All directions
 * @returns Number of pokemons that ash caught
 */

export function catchPokemon (movement) {
	const directions = getDirections(movement)

	const { capturedPokemons } = directions.reduce((acc, direction) => {

		const { position: lastMove, string: path } = getMovement(acc.lastMove, direction)

		if (acc.paths.includes(path)) return { ...acc, lastMove }

		acc.capturedPokemons++

		acc.paths = [...acc.paths, path]

		acc.lastMove = lastMove

		return acc
	},
		{
			paths: ['0:0'],
			lastMove: { x: 0, y: 0 },
			capturedPokemons: 1
		}
	)

	return capturedPokemons
}