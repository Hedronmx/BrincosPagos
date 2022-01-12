<template>
  <el-button type="primary" size="large" @click="$refs.form.activar_dialogo()"
    >Agregar Pago</el-button
  >
  <AddPayment ref="form" />
  <NavBar />
</template>

<script>
  import AddPayment from "./components/AddPayment.vue";
  import NavBar from "./components/NavBar.vue";

  import { ElMessage } from "element-plus";

  export default {
    name: "App",
    components: {
      AddPayment,
      NavBar,
    },
    methods: {
      mostrar_exito: function () {
        ElMessage({
          message: "Se ha registrado el pago correctamente.",
          type: "success",
        });
      },
      mostrar_error: function () {
        ElMessage({
          message: "Se ha producido un error.",
          type: "error",
        });
      },
    },
  };
</script>
