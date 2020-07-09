<template>
  <div class="info-container">
    <ul>
      <li>
        <nuxt-link to="/info/students">学生列表</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/info/addStudent">新增学生</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: "info-nav"
};
</script>

<style scoped>
.info-container {
  display: flex;
}
</style>
