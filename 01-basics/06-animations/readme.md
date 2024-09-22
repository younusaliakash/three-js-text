# Three.js Journey

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
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
    mesh.position.x += 0.01;

    //render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  };
  tick();
  ```

- **Fix the Frame rate (FPS)**
  Frame rate depend on the host computer. If you see on 120FPS computer you will see the object move very fast and 60FPS will slower than that computer. But we have to fix the frame rate and stay same for all devices.

**_Solutions: 1_**

- Using `Date.now()`. We will store the time outside the tick function and again store the current time inside the tick function and subtraction time from current time and multiply the rotation value. then set current time as a time.

```javascript
//store time
let time = Date.now();

const tick = () => {
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;
  mesh.rotation.y += 0.001 * deltaTime;

  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
```

**_Solutions: 2_**
- Using `Clock()`. This is a `THREE`js build in function. we can solve the problem using this . `Clock` has a method name `getElapsedTime()`. it count how much time gone from the program init. we will store this and use this. the example are below :

```javascript	
const clock = new THREE.Clock();

const tick = () => {
    //clock
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime * Math.PI * 2)
    // mesh.rotation.y  = elapsedTime
    mesh.rotation.y  = elapsedTime * Math.PI * 2 //constance the rotation using this

    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
```
**_Solutions: 3_**
- Using `getDelta()` : https://threejs.org/docs/#api/en/core/Clock. it almost same as the `elapsedTime()`. read the documentation.

- **Animations Using `GSAP`**
 it's an animation library that help to animate objects without using row code. it has it's own method to create an animation. we just install the animation library and call the method with arguments and make animation.
