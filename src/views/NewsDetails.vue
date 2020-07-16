<template>
  <div class="NewsDetails">
    <banner img="../assets/img/bgtop.jpg" />
    <div class="NewsDetails-product">
      <div class="NewsDetails-product-content">
        <img v-lazy="imgserver+newsIdList.img" alt />
        <p class="product-title">{{newsIdList.title}}</p>
        <p class="product-time">{{newsIdList.createTime}}</p>
        <p class="product-content">{{newsIdList.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsById } from "@/services";
import Banner from "../components/Banner";
export default {
  name: "NewsDetails",
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      newsIdList: {}
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
      getNewsById(this.pid)
        .then(response => {
          this.newsIdList = response;
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
.NewsDetails {
  width: 100%;
  height: 100%;
  //overflow: hidden;
  background-color: #14679f;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        //height: 500px;
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
  .NewsDetails-product {
    width: auto;
    .NewsDetails-product-content {
      width: auto;
      p {
        margin: 0 10px;
      }
    }
  }
}
</style>