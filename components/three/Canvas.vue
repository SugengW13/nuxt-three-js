<script setup lang="ts">
</script>

<template>
  <TresCanvas window-size clear-color="#F0F0F0">
    <TresPerspectiveCamera :fov="75" />

    <ThreeOrbitControls />

    <Suspense>
      <ThreeScene />
    </Suspense>

    <TresGridHelper />

    <TresDirectionalLight color="#F78B3D" :position="[3, 3, 3]" :intensity="2" />

    <TresAmbientLight color="#FFFFFF" :intensity="2" />
  </TresCanvas>
</template>