<template>
<div>
    <div class="page pure-g">
        <div class="pure-u-1 pure-u-sm-4-4 main-content">

            <div class="main-content-item">
                <a @click="go(items.url)"  style="cursor: pointer" class="pure-u-1 blog-post extented" >
                    <!-- <h2><router-link to="/3"> Hi</router-link></h2> -->
                    <div class="pure-g">
                        <div class="pure-u-1 pure-u-sm-3-4">
                            <div class="">
                            <h2 class="blog-post-title">
                                {{ items.header }}
                            </h2>
                            <div class="blog-post_authors avatar">
                    <a class="avatar_anchor" href="https://www.mapillary.com/app/user/eneerhut?lat=20&lng=0&z=1.5">
                        <q-avatar  size="60px">
      <img class="avatar_thumbnail" :src="items.avatar" :alt="items.name_avatar" >
                  
    </q-avatar>
                <div class="avatar_tooltip"> {{items.name_avatar}} </div>
                    </a>

            </div>   
                            </div>
                            <span class="blog-post-meta">
                                <span class="blog-post-date"> {{items.time}} </span>
                                <div class="blog-post-tags">
                                    <span class="blog-post-tag" v-for="(items,key) in items.tags" :key="key"> {{items}} </span>

                                <div class="blog-post__authors--mobile avatar avatar--small" style="margin-left: auto;" onclick="window.location = '/update/2021/04/16/pedestrian-blog-post.html'">
                                    <div class="avatar__anchor" href="https://www.mapillary.com/profile/">
                                    <img class="avatar__thumbnail" src="" alt="" onerror="this.style.display = 'none'" style="display: none;">
                                    </div>
                                </div>


                                </div>
                            </span>
                        </div>

                            <div class="pure-u-1 blog-post_excerpt"> 
                                {{ items.text}}
                            </div>
                </div>    
                </a> 

                            
            
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props:{
        items: {
            type:Object,
            

        }
    },
  name: 'Blog',
  mounted (){
      console.log(this.items.tags);
      
  },
  methods: {
    go(url) {    
      if(this.$router.currentRoute.path !== url) 
      {
        this.$router.push(url)
      }
  
}

//     select: function(url) {
//   window.location.href = person.url;
// }
  
}
}
</script>
<style scoped>
* {
    font-family: "Source Sans Pro", sans-serif !important;
}

.blog-post.extented {
    margin-left: -4rem;
    margin-top: -1px;
    width:calc(100% + 8rem);
}

.blog-post{
    position: relative;
    display: block;
    padding: 3.5rem 4rem;
    transition: 0.15s ease background-color, 0.3s ease border-radius;
}

.pure-u-1{
    zoom:1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
}

a {
    color: #05CB63;
    text-decoration: none;
}

a:-webkit-any-link{
    cursor:pointer;
}

a :hover {
    background-color:#F5F5F5 ;
}

.blog-post-title {
    margin: 0;
    color: #212b36;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.2px;
    text-decoration: none;
}

h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

/* @media screen and (min-width: 35.5em) {
    word-spacing: normal;
    text-rendering: auto;
} */
.blog-post-meta {
    display: flex;
    align-items: center;
    padding: 0.5rem 0 1.5rem 0;
    color: #5d6671;
    font-size: 18px;
}

.blog-post-date {
    margin-right: 8px;
}

.blog-post-tags {
    display: flex;
}

.blog-post-tag {
    display: block;
    margin-right: 8px;
    padding: 4px 8px;
    color: #5d6671;
    font-size: 12px;
    font-weight: 600;
    background: #dee5ed;
    border-radius:4px;
    text-transform: uppercase;
    transition: 0.15s ease all;
}

.pure-g>div {
    box-sizing : border-box;
}

.blog-post_excerpt {
    color: #5d6671;
    font-size: 18px;
    line-height: 1.5;
    word-break: break-word;

}

.pure-u-1 {
    width: 100%;
    display: inline-block;
    zoom:1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
}

.blog-post_authors {
    position: absolute;
    top: 3.5rem;
    right: 100px;

}
.avatar__anchor {
    position: relative;
}

a{
    color: #05CB63;
    text-decoration: none;
}

a:-webkit-any-link {
cursor: pointer;
}

.avatar_thumbnail {
    
    border-radius:25px;
    transform-origin: center center ;
    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1),0.3s ease box-shadow;
    object-fit: cover;
}
img {
    border: 0;
}

.avatar_tooltip {
    position: absolute;
    display: flex;
    opacity:0;
    top: -70px;
    left: 50%;
    color: #fff;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    padding: 6px 10px;
    background: #212b36;
    border-radius: 2px;
    transition: 0.2s cubic-bezier(0, 0, 0.2, 1) all;
    transform: translate3d(-50%, 0, 0);
}


</style>