<script setup>
import { useFBX } from '@tresjs/cientos';

const model = await useFBX('/models/container.fbx')

console.log(model)
</script>

<template>
  <primitive :object="model" :scale="0.05"/>
</template>