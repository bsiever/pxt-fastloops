




//% color="#4C97FF"
//% block="Infinite Loops"
//% icon="\uf1da"
//% groups="['Advanced']"
namespace infiniteLoops {
    /**
     * Forever block that doesn't block as long as the default (max of 250HZ on v2)
     */
    //% block="fast forever"
    export function fastForever(handler: () => void) {
    }

    /**
     * Forever block that doesn't yield.  Should be used with a pause
     */
    //% block="blocking forever"
    //% group="Advanced"
    export function blockingForever(handler: () => void) {

    }
}
