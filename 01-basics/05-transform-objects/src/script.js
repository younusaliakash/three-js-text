import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Materials or Objects
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//Position
// mesh.position.x = 0.6
// mesh.position.y = - 0.7
// mesh.position.z = 2
// mesh.position.normalize()

mesh.position.set(0.7, -0.6, 1)

//scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

//Rotation
// mesh.rotation.reorder("YXZ")
mesh.rotation.y = 0.1
mesh.rotation.x = 0.5

scene.add(mesh)

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper)

console.log(mesh.position.length())


//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)

//look at
// camera.lookAt(mesh.position)

console.log(mesh.position.distanceTo(camera.position))

//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)