# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

### Basic animation using three.js

- **` window.requestAnimationFrame`**
    This is a native javascript api that allow to render a function or anything to next steps. it's not going to work as animation but render a function to next steps.

    ```javascript
    //**
     const tick = () => {

    //updating objects
    mesh.position.x += 0.01

    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
    }
    tick()
    ```

- **Fix the Frame rate (FPS)**
 Frame rate depend on the host computer. If you see on 120FPS computer you will see the object move very fast and 60FPS will slower than that computer. But we have to fix the frame rate and stay same for all devices.

 ***Solutions: 1***
 - Using `Date.now()`. We will store the time outside the tick function and again store the current time inside the tick function and subtraction time from current time and multiply the rotation value. then set current time as a time.
 ```javascript	
 //store time
let time = Date.now()

const tick = () => {
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime
    mesh.rotation.y += 0.001 * deltaTime

    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
 ```

