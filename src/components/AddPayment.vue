<template v-slot:footer>
  <el-dialog title="Registro de pago" v-model="dialogVisibility" width="80%" append-to-body="true" :before-close="prevencion_cerrar">
    <el-form :model="forma" :label-position="'top'">
      <el-form-item label="Nombre del Cliente">
        <el-input v-model="forma.nombre" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Teléfono del cliente">
        <el-input v-model="forma.telefono" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Fecha del pago">
        <el-date-picker
          v-model="forma.fecha"
          type="date"
          placeholder="Selecciona la fecha"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Cantidad">
        <el-input-number v-model="forma.cantidad" />
      </el-form-item>
      <el-form-item label="Nota">
        <el-input v-model="forma.nota" autosize type="textarea" placeholder="Ingresa tu nota" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" plain @click="prevencion_cerrar">Cancelar</el-button>
        <el-button type="primary" @click="enviar_forma">Registrar</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
  import { ElMessageBox } from "element-plus";

  export default {
    data() {
      return {
        forma: {
          nombre: "",
          telefono: "",
          fecha: "",
          cantidad: 0,
          nota: "",
        },
        formLabelWidth: "150px",
        dialogVisibility: false,
      };
    },
    methods: {
      activar_dialogo: function () {
        this.dialogVisibility = true;
      },
      limpiar_forma: function () {
        this.dialogVisibility = false;
        this.forma.nombre = "";
        this.forma.telefono = "";
        this.forma.fecha = "";
        this.forma.cantidad = 0;
        this.forma.nota = "";
      },
      enviar_forma: function () {
        this.limpiar_forma();
        this.$parent.mostrar_exito();
        this.$parent.mostrar_error();
      },
      prevencion_cerrar: function () {
        ElMessageBox.confirm("¿Seguro que deseas cerrar la ventana?", "Atención", {
          confirmButtonText: "Cerrar",
          cancelButtonText: "Cancelar",
          type: "warning",
        })
          .then(() => {
            this.limpiar_forma();
          })
          .catch(() => {
            // catch error
          });
      },
    },
  };
</script>
