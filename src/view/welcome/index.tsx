import { Transition, VNode, defineComponent, ref, watchEffect } from 'vue'
import styles from "./index.module.scss"
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useSwipe } from '../../hooks/useSwipe'
import { throttle } from '../../shared/throttle'
export const Welcome = defineComponent({

    setup() {
        const router = useRouter()
        const route = useRoute()
        const main = ref<HTMLElement | null>(null)
        const { direction, swipe } = useSwipe(main, {
            beforeStart: (e) => { e.preventDefault() }
        })
        const routeMap = {
            "first": "/welcome/second",
            "second": "/welcome/third",
            "third": "/welcome/forth",
            "forth": "/start",
        }
        const changeRouter = throttle(() => {
            router.push(routeMap[route.name as keyof typeof routeMap])
        }, 500)
        watchEffect(() => {
            if (swipe.value && direction.value === 'left') {
                changeRouter()
            }
        })
        return () => (
            <div class={styles.wrapper}>
                <header>
                    <svg>
                        <use xlinkHref={`#logo`} />
                    </svg>
                    <h1>花钱记账</h1>
                </header>
                <main ref={main}>
                    <RouterView name='main'>
                        {({ Component }: { Component: VNode }) => (
                            <Transition
                                name="slide-fade"
                                enterFromClass={styles.slideFadeEnterFrom}
                                leaveToClass={styles.slideFadeLeaveTo}
                                enterActiveClass={styles.slideFadeEnterActive}
                                leaveActiveClass={styles.slideFadeLeaveActive}
                            >
                                {Component}
                            </Transition>
                        )
                        }
                    </RouterView>
                </main>
                <footer>
                    <RouterView name='footer' />
                </footer>
            </div>
        )
    }
})