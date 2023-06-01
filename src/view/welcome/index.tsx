import { defineComponent } from 'vue'
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
                    <RouterView name='main' />
                </main>
                <footer>
                    <RouterView name='footer' />
                </footer>
            </div>
        )
    }
})