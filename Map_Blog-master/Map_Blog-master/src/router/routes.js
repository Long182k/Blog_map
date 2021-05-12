



const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/a', component: () => import('pages/Error404.vue') },
      { path: '/1st', component: () => import('src/pages/1stcom_blog.vue') },
      { path: '/2nd', component: () => import('src/pages/2ndcom_blog.vue') },
      { path: '/3rd', component: () => import('src/pages/3rdcom_blog.vue') },
      { path: '/4th', component: () => import('src/pages/4thcom_blog.vue') },
      
    ]
  },
 
    

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes 
  

