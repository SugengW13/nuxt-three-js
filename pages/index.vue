<script setup lang="ts">
const isActiveXRay = ref(false)
const isActiveTexture = ref(false)
const isPlaying = ref(false)
</script>

<template>
  <div class="h-screen relative bg-radial-gradient">
    <div class="absolute p-10 inset-0 flex items-start justify-center z-10 pointer-events-none">
      <div class="p-5 rounded-xl bg-white border shadow-sm pointer-events-auto grid grid-cols-2 gap-3 justify-items-start place-items-center">
        <p class="font-medium text-sm">X-Ray</p>
        <u-toggle v-model="isActiveXRay" />

        <p class="font-medium text-sm">Texture</p>
        <u-toggle v-model="isActiveTexture" />
        
        <p class="font-medium text-sm">Animation</p>
        <div class="space-x-3">
          <u-button>Forward</u-button>
          <u-button>Reverse</u-button>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 pointer-events-none">
      <ThreeCanvas >
        <template #model>
          <ThreeModel
            :is-x-ray="isActiveXRay"
            :is-play-animation="isPlaying"
            />
        </template>
      </ThreeCanvas>
    </div>
  </div>
</template>

<style scoped>
.bg-radial-gradient {
  background: radial-gradient(circle, #dddddd, #ffffff);
}
</style>
