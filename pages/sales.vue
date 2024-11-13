<template>
  <div>Sales</div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});
</script>

<style></style>
