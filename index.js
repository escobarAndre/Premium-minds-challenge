import readline from 'readline'
import { performance } from 'perf_hooks'
import { catchPokemon } from './pokemons.js'
import {
    welcome as welcomeMessage,
    result as resultMessage,
    performance as performanceMessage
} from './messages.js'

const INTERFACE = {
    input: process.stdin,
    output: process.stdout,
}

const rl = readline.createInterface(INTERFACE)

/**
 * Function to break lines
 * @param lines Number of lines to break
 */

function breakLine (lines) {
    rl.write("\r\n".repeat(lines))
}

/**
 * Function to get duration of adventure (performance of pokemons functions)
 * @param performance Object of performance hook
 */

function getDuration (performance) {
    const { duration } = performance.measure('adventure', 'adventure-start', 'adventure-end')

    return (duration / 1000).toFixed(4)
}

/**
 * Function to make question to user in terminal, receive the answer, call pokemons functions and get result
 */

async function makeQuestion () {
    rl.question('Type your movement: ', async (answer) => {
        performance.mark('adventure-start')

        const result = catchPokemon(answer)

        performance.mark('adventure-end')

        const duration = getDuration(performance)

        breakLine(1)

        rl.write(resultMessage + result)

        breakLine(2)

        rl.write(performanceMessage + ` ${duration} seconds`)

        breakLine(2)

        setTimeout(() => makeQuestion(), '500')
    })
}


rl.write(welcomeMessage.join('\n'))

breakLine(2)

makeQuestion()
