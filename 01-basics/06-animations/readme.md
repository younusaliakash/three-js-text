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
