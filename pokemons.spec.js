import { catchPokemon, getMovement } from './pokemons.js'

describe('catchPokemon', () => {
    it('should return the correct number of captured pokemons', () => {
      const moviment = 'NSEO'
      const expected = 3
      expect(catchPokemon(moviment)).toEqual(expected)
    })

    it('should return the correct number of captured pokemons', () => {
      const moviment = 'nnnnnnoossssss'
      const expected = 15
      expect(catchPokemon(moviment)).toEqual(expected)
    })

    it('should return the correct number of captured pokemons', () => {
      const moviment = 'dasdoidyqwughvbnasajgh'
      const expected = 4
      expect(catchPokemon(moviment)).toEqual(expected)
    })
  
    it('should handle an empty input', () => {
      const moviment = ''
      const expected = 1
      expect(catchPokemon(moviment)).toEqual(expected)
    })
  
    it('should handle invalid inputs', () => {
      const moviment = 'NSEOXYZ'
      const expected = 3
      expect(catchPokemon(moviment)).toEqual(expected)
    })
  
    it('should handle repeated movements', () => {
      const moviment = 'NSEOENSO'
      const expected = 4
      expect(catchPokemon(moviment)).toEqual(expected)
    })
  })
  
  describe('getMovement', () => {
    it('should return the correct new position', () => {
      const currentPosition = { x: 0, y: 0 }
      const direction = 'N'
      const expected = { position: { x: 0, y: 1 }, string: '0:1' }
      expect(getMovement(currentPosition, direction)).toEqual(expected)
    })
  
    it('should handle invalid inputs', () => {
      const currentPosition = { x: 0, y: 0 }
      const direction = 'X'
      expect(() => getMovement(currentPosition, direction)).toThrow()
    })
  })