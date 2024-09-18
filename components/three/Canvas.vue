<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <TresCanvas window-size clear-color="#F0F0F0">
    <TresPerspectiveCamera :fov="75" />

    <OrbitControls />

    <Suspense>
      <ThreeModel />
    </Suspense>

    <TresGridHelper />

    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="10" />

    <TresAmbientLight color="#FFFFFF" :intensity="10" />
  </TresCanvas>
</template>