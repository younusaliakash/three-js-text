# Reference Links:

We can use Three.js CDN instead of local source file:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js" ></script>


```
> Note : Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation

### Working Steps:
1. Create a Scene : https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
2. Create a Geometry Material (If you haven't any 3D model or geometry) : https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh

4. Add the Material into Scene
5. Create a Camera (with passing argument: camera angle and aspect ratio): 
```javascript
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
```
6. Add camera to the scene
7. Create and capture the HTML canvas from HTML document
8. Now Render the material and camera inside the canvas with passing dom elements as an argument object into the `WebGLRenderer` method:
```javascript
const renderer = new THREE.WebGLRenderer();
```
9. To see the material we must set the size of `render` and set position to the camera.


