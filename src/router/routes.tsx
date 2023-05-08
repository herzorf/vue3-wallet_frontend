import { Bar } from '../view/bar.tsx'
import { Foo } from '../view/foo.tsx'
import { Welcome } from '../view/welcome/index.tsx'

export const routes = [
    { path: "/", component: Bar },
    { path: '/foo', component: Foo },
    { path: '/welcome', component: Welcome },

]