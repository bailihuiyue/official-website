<template>
  <div class="cases">
    <el-button type="primary" @click="openDialog()">新增用户</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"></el-table-column>
      <el-table-column prop="dictKey" label="键" width="180"></el-table-column>
      <el-table-column prop="content" label="值"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="案例编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="数据键" :label-width="formLabelWidth">
          <el-input v-model="formData.dictKey" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据键" :label-width="formLabelWidth">
          <el-input v-model="formData.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getDictionaryAll,
  createDictionary,
  modifiedDictionary,
  deleteDictionary
} from "@/services";
export default {
  data() {
    return {
      loading: true,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [],
      formData: {
        id: 0,
        dictKey: "",
        content: "",
        createTime: new Date()
      },
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;
      getDictionaryAll({ dictKey: "" })
        .then(response => {
          this.tableData = response;
          this.loading = false;
        })
        .catch(e => {
          this.$message({
            message: "网络或程序异常！" + e,
            type: "error"
          });
        });
    },
    openDialog() {
      // 清除数据
      this.formData.id = 0;
      this.formData.dictKey = "";
      this.formData.content = "";
      this.formData.createTime = new Date();

      this.dialogFormVisible = true;
    },
    // 新增
    handleCreateOrModify() {
      if (!this.formData.id) {
        // ID 无效时 视为新增
        this.loading = true;
        createDictionary(this.formData)
          .then(response => {
            this.loading = false;
            this.$message({
              message: "创建成功！",
              type: "success"
            });
            this.dialogFormVisible = false;
            this.loadData();
          })
          .catch(e => {
            this.$message({
              message: "网络或程序异常！" + e,
              type: "error"
            });
          });
      } else {
        this.loading = true;
        modifiedDictionary(this.formData)
          .then(response => {
            this.loading = false;
            this.$message({
              message: "修改成功！",
              type: "success"
            });
            this.dialogFormVisible = false;
            this.loadData();
          })
          .catch(e => {
            this.$message({
              message: "网络或程序异常！" + e,
              type: "error"
            });
          });
      }
    },
    handleEdit(index, row) {
      this.formData = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久此条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 已确认删除
          // 调接口删除
          this.loading = true;
          deleteDictionary(row.id, null)
            .then(response => {
              this.loading = false;
              this.$message({
                message: "删除成功！",
                type: "success"
              });
              this.loadData();
            })
            .catch(e => {
              this.$message({
                message: "网络或程序异常！" + e,
                type: "error"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //时间格式化
    dateFormat: function(row) {
      //row 表示一行数据, createTime 表示要格式化的字段名称
      let t = new Date(row.createTime);
      return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    }
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 20px;
}
</style>