
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '/escala', name: 'escala', component: () => import('pages/escala.vue') },
      { path: '/usuario', name: 'usuario', component: () => import('pages/usuario.vue') },
      { path: '/historico', name: 'historico', component: () => import('pages/historico.vue') },
      { path: '/cadastro', name: 'cadastro', component: () => import('pages/cadastro.vue') },
      { path: '/editarCadastro/:id', name: 'editarCadastro', component: () => import('pages/editarCadastro.vue') },
      { path: '/listDisponibilidade', name: 'listDisponibilidade', component: () => import('pages/listDisponibilidade.vue') },
      { path: '/feriasfolgas', name: 'feriasfolgas', component: () => import('pages/feriasFolgas.vue') },
      { path: '/escalonamento', name: 'escalonamento', component: () => import('pages/escalonamento.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
