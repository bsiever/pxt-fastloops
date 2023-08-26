# Fast Forever Loop

This extension provides a forver loop that can repeat faster than the normal `forever` loop.

# Forver

```sig
fastForever.fastForever(handler: handler: () => void) : void
``` 

A fast forever loop.  Top frequency is about 250Hz on the micro:bit V2, which is 5 time faster than the 50Hz of the regular `forever` loop.

# Faster Forever 

```sig 
fastForver.fasterForever(time: number, handler: () => void) : void
```
A faster forever loop.  Top frequency is about 150kHz on the micro:bit V2, which is 3,000 time faster than the 50Hz of the regular `forever` loop.
The `number` indicates how long (in milliseconds) between official pauses, which are needed to allow other tasks to run.

### ~alert

# Starves all other code

This loop can "starve" out all other code, including the `fastForever` and vital system tasks.

### ~

# Acknowledgements 

Icon based on [Font Awesome icon 0xF1DA](https://www.iconfinder.com/search?q=history) SVG.

# Misc. 

I develop micro:bit extensions in my spare time to support activities I'm enthusiastic about, like summer camps and science curricula.  You are welcome to become a sponsor of my micro:bit work (one time or recurring payments), which helps offset equipment costs: [here](https://github.com/sponsors/bsiever). Any support at all is greatly appreciated!

## Supported targets

for PXT/microbit

```package
pxt-fastloops=github:bsiever/pxt-fastloops
```

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
