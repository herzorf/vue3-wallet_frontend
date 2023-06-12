import { Transition, VNode, defineComponent, ref, watchEffect } from 'vue'
import styles from "./index.module.scss"
import { RouterView } from 'vue-router'
import { useSwipe } from '../../hooks/useSwipe'
export const Welcome = defineComponent({

    setup() {
        const main = ref<HTMLElement | null>(null)
        const { direction, swipe } = useSwipe(main)
        watchEffect(() => {
            console.log(direction.value, swipe.value)
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