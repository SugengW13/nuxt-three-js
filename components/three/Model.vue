<script setup lang=ts>
import * as THREE from 'three'
import { useFBX } from '@tresjs/cientos';

const props = defineProps({
  isXRay: {
    type: Boolean,
    default: false,
  },
  isPlayAnimation: {
    type: Boolean,
    default: false
  }
})

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  fragmentShader: `
  void main() {
    gl_FragColor = vec4(1, 1, 1, 0.5);
  }
  `,
  transparent: true
})

const model = await useFBX('/models/animated_container.fbx')
const clock = new THREE.Clock()

let originalMaterials = new Map()

model.traverse((child) => {
  if (!child.isMesh) return
  originalMaterials.set(child, child.material)
})

watch(() => props.isXRay, (isXRay) => {
  model.traverse((child) => {
    if (!child.isMesh) return
    child.material = isXRay ? shaderMaterial : originalMaterials.get(child)
  })
}, { immediate: true })

const mixer = new THREE.AnimationMixer(model)
const clips = model.animations

const clip = THREE.AnimationClip.findByName(clips, 'Armature|ArmatureAction')
const action = mixer.clipAction(clip)

action.play()

clips.forEach((clip) => {
  mixer.clipAction(clip).play()
})

function animate () {
  requestAnimationFrame(animate)

  if (mixer) {
    const delta = clock.getDelta()
    mixer.update(delta)
  }
}

animate()
</script>

<template>
  <primitive :object="model" :scale="0.015" />
</template>