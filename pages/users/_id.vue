<template>
  <div>
    <h3>in users/_id.vue</h3>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  validate({ params }) {
    console.log("In", params);
    return /^\d+$/.test(params.id);
  }
};
</script>
