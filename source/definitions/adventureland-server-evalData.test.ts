import { jest } from "@jest/globals"
import { EvalData } from "./adventureland-server"
import { Character } from "../Character"
import { Game } from "../Game"

/**
 * The following is from socket events received 2021-11-13
 * It is used to confirm type correctness
 */

test("EvalData type validation", async () => {
    const evalDatas: EvalData[] = [
        { code: "pot_timeout(2000)" },
        { code: "ui_move(-100,-40)" }
    ]
    for (const evalData of evalDatas) expect(evalData).not.toBe(undefined)

    const mock = jest.fn()
    console.error = mock
    const character = new Character("test", "test", "test", await Game.getGData(true, false), undefined)
    for (const evalData of evalDatas) {
        // Since parseEval is private, we have to do this workaround
        character["parseEval"](evalData)
        expect(mock).not.toHaveBeenCalled()
    }
})