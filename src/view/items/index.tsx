import { defineComponent } from 'vue'
import styles from "./index.module.scss"
import { RouterView } from 'vue-router'
export const Items = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <RouterView />
            </div>
        )
    }
})