<template>
 <div>
   <Header></Header>
   <div class="block" style="margin-top: 30px">
     <el-timeline>
       <el-timeline-item timestamp="2018/4/12" placement="top" v-for="blog in blogs">
         <el-card>
           <h4>更新 Github 模板</h4>
           <p>王小虎 提交于 2018/4/12 20:46</p>
         </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2018/4/3" placement="top">
         <el-card>
           <h4>更新 Github 模板</h4>
           <p>王小虎 提交于 2018/4/3 20:46</p>
         </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2018/4/2" placement="top">
         <el-card>
           <h4>更新 Github 模板</h4>
           <p>王小虎 提交于 2018/4/2 20:46</p>
         </el-card>
       </el-timeline-item>
     </el-timeline>

     <el-pagination class="page"
         background
         layout="prev, pager, next"
         :total="1000">
     </el-pagination>
   </div>
 </div>


</template>

<script>
import Header from "../components/Header";
export default {
  name: "Blogs.vue",
  blogs: [],
  components: {Header},
  methods: {
    page(currentPage){
      const that = this;
      that.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
.page {
  margin: 0 auto;
  text-align: center;
}
</style>