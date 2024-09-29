
//% color="#4C97FF"
//% block="Fast Forever Loop"
//% icon="\uf1da"
//% groups="['Advanced']"
namespace fastForever {
    const initialPause = 50 // Initial pause to allow initialization to complete. 
    /**
     * Forever block that doesn't block as long as the default (max of 250HZ on v2)
     */
    //% block="fast forever"
    export function fastForever(handler: () => void) {
        // Initial pause to allow initialization to complete. 
        basic.pause(initialPause)
        control.inBackground( () => 
        {
            while (true) {
                handler()
                pause(0)
            }
        })
    }

    /**
     * Forever block that doesn't block as long as the default (max of 250HZ on v2)
     */
    //% block="faster forever with pause every $time ms"
    //% time.defl=1000
    //% time.min=1
    //% advanced=true
    export function fasterForever(time: number, handler: () => void) {
        basic.pause(initialPause)
        control.inBackground(() => {
            let startTime = control.millis()
            while (true) {
                handler()
                if(time>0) {
                    let now = control.millis()
                    if(now-startTime > time) {
                        pause(0)
                        startTime = now
                    } 
                }
            }
        })
    }

}
