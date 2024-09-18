<script setup>
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const { scene } = await useLoader(GLTFLoader, '/models/container/scene.gltf')
</script>

<template>
  <primitive :object="scene" />
</template>