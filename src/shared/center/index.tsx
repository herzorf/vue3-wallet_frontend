import { PropType, defineComponent } from 'vue'
import styles from "./index.module.scss"
export const Center = defineComponent({
    props: {
        direction: {
            type: String as PropType<"center">
        }
    },
    setup(_, context) {
        return () => (
            <div class={styles.wrapper}>
                {context.slots.default?.()}
            </div>
        )
    }
})