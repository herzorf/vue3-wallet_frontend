import { defineComponent } from 'vue'
import styles from "./index.module.scss"
interface PropsType {
    onClick?: (e: MouseEvent) => void
}
export const Button = defineComponent<PropsType>({
    setup(_, context) {
        return () => (
            <button class={styles.button}>
                {context.slots.default?.()}
            </button>
        )
    }
})