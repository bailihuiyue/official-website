<template>
  <div class="cases">
    <el-button type="primary" @click="openDialog()">新增数据</el-button>

    <el-table border :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"></el-table-column>
      <el-table-column prop="img" label="企业Logo">
        <template slot-scope="scope">
          <img style="width:200px" :src="imgserver+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="企业名称" width="180"></el-table-column>
      <el-table-column label="操作">
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
    <el-dialog title="合作企业管理" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="企业Logo" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action="`${imgserver}api/Upload/UploadImage`"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleSuccess"
          >
            <img v-if="formData.img" :src="imgserver+formData.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="企业名称" :label-width="formLabelWidth">
          <el-input v-model="formData.remark" autocomplete="off"></el-input>
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
  getEnterpriseAll,
  createDataEnterprise,
  modifiedEnterprise,
  deleteEnterprise
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
        img: "",
        remark: "",
        createTime: new Date()
      }
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    handleSuccess(response) {
      if (response.resultCode === "000000") {
        this.formData.img = response.data;
      } else {
        this.$message({
          message: response.resultMsg || "上传图片失败,请重试!",
          type: "error"
        });
      }
    },
    loadData() {
      this.loading = true;
      getEnterpriseAll()
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
      this.formData.img = "";
      this.formData.remark = "";
      this.formData.createTime = new Date();

      this.dialogFormVisible = true;
    },
    // 新增
    handleCreateOrModify() {
      if (!this.formData.id) {
        // ID 无效时 视为新增
        this.loading = true;
        createDataEnterprise(this.formData)
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
        modifiedEnterprise(this.formData)
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
          deleteEnterprise(row.id, null)
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