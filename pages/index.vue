<template>
  <div>
    <el-button
      type="primary"
      size="large"
      :icon="Search"
      @click="$refs.form.changeVisibility()"
      >Agregar Pago</el-button
    >
    <AddPayment ref="form" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      dialogVisibility: false,
    }
  },
}
</script>
