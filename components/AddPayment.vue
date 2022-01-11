<template>
  <el-dialog title="Shipping address" :visible.sync="dialogVisibility">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisibility = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisibility = false"
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '130px',
      dialogVisibility: false,
    }
  },
  methods: {
    changeVisibility: function () {
      this.dialogVisibility = true
    },
  },
}
</script>
