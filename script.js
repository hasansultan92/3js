import * as THREE from "three"
console.log(THREE)
// Canvas

const canvas = document.querySelector('canvas.webgl')

console.log(canvas)
//Scene
const scene = new THREE.Scene()

// Object can be called Mesh, geometry and the material
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "red" })

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// Camera 
// Perspective camera
const sizes  ={
    width:800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 3

scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

console.log("JS is working")
