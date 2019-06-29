<template>
  <section class="container">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in 4" :key="item"
        class="bg-image-carousel"
      >
      </el-carousel-item>
    </el-carousel>

    <el-row>
      <el-col class="bg-color-textcenter">
        Wisley & Company, total business processing consultant company for your future in Thailand
      </el-col>
    </el-row>

    <div class="text-container">
      <el-row>
        <el-col class="title">
          About Wisley &amp; Company
        </el-col>
      </el-row>

      <el-row>
        <el-col class="sub-title">
          Wisley & Company Group is one of the foremost experts in total business processing consultanting in Thailand.
        </el-col>
      </el-row>

      <el-row>
        <el-col class="normal-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </el-col>
      </el-row>
    </div>

    <div class="text-container">
      <el-row>
        <el-col class="title">
          Services
        </el-col>
      </el-row>

      <el-row :gutter="24" align="middle" style="margin-top: 25px;">
        <nuxt-link to="/service/business">
          <el-col
            class="card-service"
            style="margin-top: 10px;"
            :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px; text-align: center;">
                <span>Business Registration / License Obtain</span>
              </div>
                <img src="../static/business.jpg" class="image">
            </el-card>
          </el-col>
        </nuxt-link>

        <nuxt-link to="/service/accounting">
          <el-col
            class="card-service"
            style="margin-top: 10px;"
            :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px; text-align: center;">
                <span>Accounting & Tax Consulting</span>
              </div>
                <img src="../static/accounting.jpg" class="image">
            </el-card>
          </el-col>
        </nuxt-link>

        <nuxt-link to="/service/logistic">
          <el-col
            style="margin-top: 10px;"
            :xs="24" :sm="8" :md="8" :lg="8" :xl="8"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px; text-align: center;">
                <span>Logistics</span>
              </div>
                <img src="../static/logistic.jpg" class="image">
            </el-card>
          </el-col>
        </nuxt-link>
      </el-row>
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      services: [
        {title: "Business Registration / License Obtain", img: "../static/business.jpg", to: ""},
        {title: "Accounting & Tax Consulting", img: "../static/business.jpg", to: ""},
        {title: "Logistics", img: "../static/business.jpg", to: ""},
      ]
    }
  }
}
</script>

<style lang="scss">
  .card-service {

    &:hover {
      font-size: 20px;
    }
  }
</style>
