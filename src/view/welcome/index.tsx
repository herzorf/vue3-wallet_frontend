import { Transition, VNode, defineComponent } from 'vue'
import styles from "./index.module.scss"
import { RouterView } from 'vue-router'
import logo from "../../assets/icons/logo.svg"
export const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <header>
                    <img src={logo} alt="" />
                    <h1>花钱记账</h1>
                </header>
                <main>
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