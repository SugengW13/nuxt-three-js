<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
  <TresCanvas class="pointer-events-none">
    <TresPerspectiveCamera :fov="75" />

    <OrbitControls />

    <Suspense>
      <slot name="model"/>
    </Suspense>

    <TresGridHelper />

    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="10" />

    <TresAmbientLight color="#FFFFFF" :intensity="10" />
  </TresCanvas>
</template>

<style></style>