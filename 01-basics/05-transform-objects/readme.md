# Three.js Transform Objects

In Three.js, objects have four main transformation properties inherited from the `Object3D` class:

1. **`position`**
2. **`scale`**
3. **`rotation`**
4. **`quaternion`**

> All classes that inherit from `Object3D`, such as `PerspectiveCamera` and `Mesh`, have these four properties `position`, `scale`, `rotation`, `quaternion` and these 4 properties will have the `x`, `y`, and `z` axes.  
[Object3D Documentation](https://threejs.org/docs/index.html?q=object#api/en/core/Object3D)

### `position`

- The `position` property inherits from `Vector3`.  It has a lots of method.
  [Vector3 Documentation](https://threejs.org/docs/index.html?q=vector#api/en/math/Vector3)

- **Calculate Distance**:  `Vector3` method
  Use `mesh.position.length()` to calculate the distance between the origin (object start point) and the current position of the object.

- **Distance Between Object and Camera**:  
  Use `mesh.position.distanceTo(camera.position)` to calculate the distance between an object (e.g., material) and the camera's current position.

- **Normalize Position**:  
  `mesh.position.normalize()` will normalize the vector, making the vector length 1.

- **Setting Position**:  
  You can use `mesh.position.set(x, y, z)` instead of setting `x`, `y`, and `z` individually.
  
```javascript
  mesh.position.set(0.6, -0.7, 2);
  // Equivalent to:
  mesh.position.x = 0.6;
  mesh.position.y = -0.7;
  mesh.position.z = 2;
```
they will do same thing.


- **Axes Helper**
`AxesHelper()` .The AxesHelper class allows you to visualize the x, y, and z axes on the screen. As an object, it must be added to the scene.: https://threejs.org/docs/index.html?q=helper#api/en/helpers/AxesHelper

```javascript
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
```
> Here, 2 refers to the size of the axes. if you not pass any argument it will be 1 by default.

### `scale`
It also `Vector3`. The default value of each axes `1`. `scale` also have the same method and properties as like as `position` because it also inherit from `Vector3`

### `rotation`
It also have `x`, `y`, `z` but it is Euler. default value is `0` : https://threejs.org/docs/index.html?q=euler#api/en/math/Euler
```javascript
mesh.rotation.y = 0.1
mesh.rotation.x = 0.5
mesh.rotation.z = 0.1

mesh.rotation.reorder("YXZ")
//reorder to rotation order. that means at first it will rotate Y, then X, then Z.
```

### `quaternion`
TBD

### `Look At`
By default the camera focus on the scene center. But we can tell the camera  where it start to focus. Here we use `lookAt()` to tell the camera where focus would be start. By the way lookAt accept an argument that must be `Vector3`. Here we will tell the camera to start looking at the center of the object or material by passing the object position. `camera.lookAt(mesh.position)`. we know `mesh.position` is a vector3.


### `Scene Graph` using group
We can create a group using `new THREE.Group()`. since it's an object so we added this into scene `scene.add(group)`.
Mow we can create multiple materials and add to this group. and if need we will `position`, `scale` & `rotation` the whole group.
we did it on `script2.js` file
https://threejs.org/docs/index.html?q=gro#api/en/objects/Group
```javascript
//create a group
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

//Materials or Objects
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
mesh.position.x = - 2
group.add(mesh)

const mesh2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(mesh2)

const mesh3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
mesh3.position.x = 2
group.add(mesh3)
```

