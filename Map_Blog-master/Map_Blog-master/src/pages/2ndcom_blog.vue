<template>
  <q-page>
      <div class="page pure-g">
      <div class="pure-u-1 pure-u-sm-4-4 main-content">
        <div class="pure-g">
          <div class="pure-u-1 post">
            <div class="pure-g">
                <div class="">
              <div class="pure-u-1 post__header">
                <h2 class="post__title">
                 Call for Updates: Confirming Mapillary Username and Email
                </h2>
                <div class="post__excerpt">
By April 18th, 2021, it is critical that every Mapillary user has an updated email address that is fully functional and can receive important account emails. Read on for details.                
                </div>
                <div class="post__meta">

                    <div class="post__authors">
                    
                      <div class="post__authorwrap">
                        <div class="post__authors avatar">
                          <a class="avatar__anchor" href="https://www.mapillary.com/profile/eneerhut">
                            <img class="avatar__thumbnail" src="/logos/av1.png" alt="Christopher Beddow">
                          </a>
                        </div>
                        <div class="post__author">Christopher Beddow</div>
                      </div>
                    
                    </div>
                  

                  <div class="post__date">08 Apr 2021</div>
                </div>
              </div>   

              <div class="pure-u-1 post__content">
                <p> Mapillary is planning important platform updates for 2021, and to accomplish this it is crucial that our users have their information compliant with new policies in support of better security measures and streamlined user account management. Our goal is to ensure usernames and emails are neither duplicated nor invalid. Mapillary is asking our users to work with us on making this happen seamlessly.</p>
                <br>
                <p>Mapillary has addressed many past support requests for changing a username or email. To better accommodate the community needs, updating your Mapillary username or email address is now easier than ever: simply visit your profile dashboard to make the change. By April 18th, 2021, it is critical that every Mapillary user has an updated email address that is fully functional and can receive important emails, like password resets and critical account notifications. You run the risk of getting locked out of your Mapillary account if your email address is outdated, you don’t use it anymore, you can’t access it, or it no longer exists. Be sure to update your email address as soon as possible.</p>  
              </div> 
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  </q-page>
</template>

<script>

export default {
  name: 'SecondBlog'
}

</script>
<style scoped>

*{
    box-sizing: border-box;
    font-family:'Times New Roman', Times, serif;
}


.page {
    max-width: 64em;
    margin: 0 auto;
    padding: 0 1.5em;
}

.pure-g {
    /* letter-spacing: -.31em;  */
    text-rendering: optimizeSpeed;
    display: -webkit-flex;
    -webkit-box-flex: row wrap;
    width: 100%;
}

.main-content {
    padding-bottom: 120px;
    
}


.pure-u-1 {
    width: 100%;
    display: inline-block;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
}

.post {
    margin: auto;
    max-width: 900px;
}

.post__header {
    padding: 120px 0 0 0;
}

.post__title {
    color:#212b36;
    font-size:42px;
    line-height: 1.3;
    text-align: center;
}

h2 {
    margin: 2em 0 -0.25em 0;
    display: block;
    margin-block-end: 0.83em;
    margin-block-start: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
        
}


.post__excerpt {
    margin: 20px 0;
    color: #5d6671;
    font-size: 28px;
    text-align: center;
    line-height: 1.5;
}

.post__meta {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.post__authors {
    position: relative;
    margin-top: 8px;
    display: flex;
    justify-content: center;
}

.post__authorwrap {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.avatar__anchor {
    position: relative;
}

.a {
    color: #05cb63;
    text-decoration: none;

}

a:-webkit-any-link {
    cursor: pointer;
}


.avatar__thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    transform-origin: center center;
    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1),0.3s ease box-shadow;
    object-fit: cover;
}

img {
    border: 0;
}

.post__author {
    padding: 12px 0;
    font-size: 18px;
}

div {
    display: block;
}

.post__date{
    color: #5d6671;
    font-size: 18px;
}

.post__content {
  margin: 0px 100px;
  max-width: 700px;
  font-size:18px;
  line-height: 1.5;
}

.post__content p {
  margin: 2rem 0;





}

p {
  display: block;
  margin-block-start: 10em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  
}


</style>