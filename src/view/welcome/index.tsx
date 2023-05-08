import { defineComponent } from 'vue'
import styles from "./index.module.scss"
import { RouterView } from 'vue-router'
export const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>welcome
                <RouterView></RouterView>
            </div>
        )
    }
})