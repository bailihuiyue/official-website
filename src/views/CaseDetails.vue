<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" />
    <div class="case-product">
      <div class="case-product-content">
        <img v-lazy="imgserver+caseIdList.img" alt />
        <p class="product-title">{{caseIdList.title}}</p>
        <p class="product-time">{{caseIdList.createTime}}</p>
        <p class="product-content">{{caseIdList.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCasesById } from "@/services";
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: {}
    };
  },
  created() {
    this.pid = this.$route.params.id;
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getCasesById(this.pid)
        .then(response => {
          this.caseIdList = response;
        })
        .catch(function(e) {
          this.$message({
            message: "网络或程序异常！" + e,
            type: "error"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14679f;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        min-height: 430px;
      }
      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }
      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }
  }
}
.mobile {
  .case-product {
    width: auto;
    .case-product-content {
      width: auto;
      display: block;
      padding: 0;
      img {
        width: auto;
        height: auto;
      }
      p {
        padding: 20px 10px;
      }
      .product-title {
        font-size: 20px;
      }
    }
  }
}
</style>