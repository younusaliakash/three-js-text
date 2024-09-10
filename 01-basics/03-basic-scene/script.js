
const canvas = document.querySelector('.webgl');

//Scene
const scene = new THREE.Scene();

//Blue Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'blue' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Size
const size = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3
scene.add(camera);

//Render
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera)
