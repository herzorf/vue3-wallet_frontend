import { defineComponent } from 'vue'
import styles from "./index.module.scss"
export const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>welcome</div>
        )
    }
})