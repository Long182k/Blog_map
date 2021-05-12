<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated  class="bg-white">

             
        <q-toolbar>  
          <q-tabs v-model="tab" class="text-black text-h6 " >
              <q-img src="/logos/map.png" width="80px" height="22px"/> 
              <q-tab name="home" label="Home" class="text-green"  />
              <q-tab name="archive" label="archive" />
              <q-tab name="search" label="search" />
              <q-space></q-space>
              <q-breadcrumbs-el label="Topic:" style="font-size: 16px"/>
              <q-tab name="community" label="community" />
              <q-tab name="compter vision" label="computer vision" />
              <q-tab name="map data" label="map data" />
              <q-tab name="news" label="news" />
              <q-tab name="product" label="product" />
              <q-tab name="showcase" label="showcase" />
              <q-tab name="thoughts" label="thoughts" />
              <q-tab name="tutorials" label="tutorials" />
              <q-tab name="update" label="update" />
              
          </q-tabs>
        </q-toolbar> 
      </q-header>
    

    <q-page-container>
     <router-view />
    </q-page-container>


<q-footer elevated style="background:#212b36" >
  <q-toolbar style="height:140px">
    <div class="q-pa-md " >
    <div class="text-white q-gutter-md q-pa-md"  style="font-size: 2em">
      
      <div class="logos absolute-center">
       
       <a style="color:white" href="https://twitter.com/?lang=vi" target="blank">
               <i class="fab fa-twitter-square" ></i>

       </a>
       <a style="color:white" href="https://www.facebook.com/" target="blank">
               <i class="fab fa-facebook-square"></i>

       </a>
       <a style="color:white" href="https://github.com/"  target="blank">
               <i class="fab fa-github-square"></i>

       </a>
       <a style="color:white" href="https://www.youtube.com/"  target="blank">
               <i class="fab fa-youtube"></i>        

       </a>
  </div>
      </div>


    <div class=" footer_visit q-pt-xs q-gutter-sm  absolute-center ">  
      <q-btn class="button" label="Visit us" icon-right="home" v-on:click.native='btnClick'/>
      <!-- <v-list-item href="http://news.google.com" target="_blank"> -->
    </div>
    <div class="copy q-pa-md q-gutter-sm  absolute-center">
        <span> © Mapillary 2019</span>
    </div>
    </div>
  </q-toolbar>
</q-footer>
  </q-layout>
</template>
<script>



export default {
   
  name: 'MainLayout',
  
  data: () => ({
    tab: null
  }),

  methods : {
        btnClick: function(event) {
            window.open("https://www.google.com");
        }
    }
 
  }





</script>
<style scoped>

.logos {
  display: flex;
  margin-top:10px;
  padding-bottom:100px ;
  max-width: 320px;
  width: 50%;
  justify-content: space-between;
}
.footer_visit{
  height: 50px;
cursor: pointer;
padding-top: 20px;
color: #fff;
justify-content: space-between;
position: position;
}
.button {
  border-radius: 30px;
}
.copy {
margin-top: 50px;
color: #637381;
font-size: 15px;
}
</style>