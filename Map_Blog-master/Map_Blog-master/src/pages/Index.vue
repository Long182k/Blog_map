<template>
  <q-page>
  <div class="hero">
      <div class="hero__title">Mapillary Blog</div>
      <div class="hero__desc">Mapillary isping using collaboration, cameras, and computer vision.</div>
  <Blog v-for="(items,key) in data" :key="key" :items="items"> </Blog>    
  
    </div>
  </q-page>
</template>

<script>

import Blog from 'src/components/Blog.vue'


export default {
  

  data:() => ({
    data: [
      {
        header :" A look at pedestrian infrastructure globally",
        time: "Posted on 16 Apr 2021 ",
        text: "The extent to which pedestrian data has been mapped in OpenStreetMap varies significantly. In this post we'll look at 5 distinct cities and how closely OpenStreetMap matches the reality on the ground.",
        avatar: "/logos/medical-mask.png",
        tags: [
          'UPDATE','COMMUNITY',
        ],
        url: "/1st",
        name_avatar:"Edoardo Neerhut"
      },
      {
         header :" Call for Updates: Confirming Mapillary Username and Email",
        time: "Posted on 08 Apr 2021 ",
        text: " By April 18th, 2021, it is critical that every Mapillary user has an updated email address that is fully functional and can receive important account emails. Read on for details.",
        avatar: "/logos/av1.png",
        tags: [
          'UPDATE','COMMUNITY',
        ],
        url: "/2nd",
        name_avatar:"Drake"
      },
      {
         header :" Preparing for the new Mapillary API",
        time: "Posted on 03 Mar 2021 ",
        text: " Over the coming months we will be launching version 4 of our API and will be phasing out version 3. This post contains some key information for developers and how they can handle the transition.",
        avatar: "/logos/av2.png",
        tags: [
          'PRODUCT','UPDATE','COMMUNITY', 
        ],
        url: "/3rd",

      },
      {
         header :"  Reflecting on 2020",
        time: "Posted on 31 Jan 2021 ",
        text: "  2020 was a year many of us will never forget. Before 2020 gets too far behind in the rear-vision mirror, we'd like to reflect on some of the highlights for Mapillary and our community. We hope you enjoy these reflections.",
        avatar: "/logos/av3.png",
        tags: [
          'PRODUCT','UPDATE','COMMUNITY', 
        ],
                url: "/4th",

      }
    ]
  }),

  
  name: 'PageIndex',
  components: {Blog}

}


</script>
<style scoped>
.hero__title {
  font-size: 36px;
  margin-bottom: 16px;
  font-weight: 700;
}
.hero__desc {
  max-width: 600px;
  font-size: 28px;
  text-align: center;
  line-height: 1.3;
}
</style>