<template>
  <el-container>
    <el-header style="margin-bottom:85px">
      <el-row align='middle' justify='center'>
        <el-col class="col" :lg='6' :md='{span: 12}'>
          <el-image style="width: 200px; height: 80px" src="https://opticazeiss.com/wp-content/uploads/2018/12/Negro.png" fit="scale-down"/>
        </el-col>
        <el-col class="col" :lg='12' :md="6">
        <el-input
            v-model="search"
            class="w-50 m-2"
            placeholder="Ingresa tu búsqueda"
            clearable
            :prefix-icon="Search"
          />
        </el-col>
        <el-col class="col" :sm='{span:2, offset:4}' :lg='{span:2, offset:4}'>
          <el-button type="primary" size="large" @click="$refs.form.activar_dialogo()"
            >Agregar Pago</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin-top: 25px">
      <Tabla />
      <AddPayment ref="form" />
    </el-main>
  </el-container>
</template>

<script>
  import AddPayment from "./components/AddPayment.vue";
  import Tabla from "./components/Tabla.vue"

  import { ElMessage } from "element-plus";
  /* eslint-disable no-unused-vars */
  import { Search } from '@element-plus/icons-vue'
  /* eslint-enable no-unused-vars */

  export default {
    name: "App",
    components: {
      AddPayment,
      Tabla,
    },
    data () {
      return {
        search: '',
      }
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

<style scoped>
  .col {
    padding: 5px;
  }
</style>
