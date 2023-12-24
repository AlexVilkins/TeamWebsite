import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () =>
        import ('../pages/Main.vue'),
    redirect: { name: 'map' },
    name: 'main',
    children: [{
            path: '/main',
            component: () =>
                import ('../pages/Main/MainWindow.vue'),
            name: 'map',
            meta: { theme: '#37889A' }
        },
        {
            path: '/ready-made_solutions',
            component: () =>
                import ('../pages/Main/Ready.vue'),
            name: 'page2',
            meta: { theme: '#544F88' }
        },
        {
            path: '/own_design',
            component: () =>
                import ('../pages/Main/Page3.vue'),
            name: 'page3',
            meta: { theme: '#55884F' }
        },
        {
            path: '/about',
            component: () =>
                import ('../pages/Main/Page4.vue'),
            name: 'page4',
            meta: { theme: '#374D9A' }
        },
        {
            path: '/about',
            component: () =>
                import ('../pages/Main/Page4.vue'),
            name: 'page5',
            meta: { theme: '#374D9A' }
        },
        {
            path: '/about',
            component: () =>
                import ('../pages/Main/Page4.vue'),
            name: 'page6',
            meta: { theme: '#374D9A' }
        }
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router