<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="folio" label="Folio"/>
    <el-table-column prop="fecha" label="Fecha" min-width="120"/>
    <el-table-column prop="nombre" label="Nombre Completo" min-width="280"/>
    <el-table-column prop="telefono" label="Teléfono" min-width="180" />
    <el-table-column prop="correo" label="Correo" min-width="280" />
    <el-table-column prop="total" label="Total" align="center" min-width="100" />
    <el-table-column fixed="right" label="Operaciones" align="center" min-width="150">
      <template #default>
        <el-row class="row" justify='center'>
         <el-button type="primary" size="small" plain>Ver</el-button>
         <el-button type="warning" size="small" plain>Editar</el-button>
         <el-button type="danger" size="small" plain>Eliminar</el-button>
        </el-row>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Tabla',
  data() {
    return {
      tableData: [
        {
          folio: 'Jg5A',
          fecha: '03/02/2022',
          nombre: 'Maria Del Carmen Martinez Negrete',
          telefono: '664-764-00-60',
          correo: 'carlosflores@hedronmx.com',
          total:  '$2,100 mxn',
        },
        {
          folio: 'Jg5A',
          fecha: '03/02/2022',
          nombre: 'Maria Del Carmen Martinez Negrete',
          telefono: '664-764-00-60',
          correo: 'carlosflores@hedronmx.com',
          total:  '$200 mxn',
        },
        {
          folio: 'Jg5A',
          fecha: '03/02/2022',
          nombre: 'Maria Del Carmen Martinez Negrete',
          telefono: '664-764-00-60',
          correo: 'carlosflores@hedronmx.com',
          total:  '$3,200 mxn',
        },
        {
          folio: 'Jg5A',
          fecha: '03/02/2022',
          nombre: 'Maria Del Carmen Martinez Negrete',
          telefono: '664-764-00-60',
          correo: 'carlosflores@hedronmx.com',
          total:  '$8,500 mxn',
        }
      ]
    }
  }
}
</script>

<style scoped>
  .row {
    padding: 5px;
  }
</style>
