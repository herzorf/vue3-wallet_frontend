import { PropType, defineComponent } from 'vue'
import styles from "./index.module.scss"
export const Center = defineComponent({
    props: {
        direction: {
            type: String as PropType<'horizontal' | 'vertical'>,
            default: "horizontal"
        }
    },
    setup({ direction }, context) {
        return () => (
            <div class={[styles.wrapper, direction]}>
                {context.slots.default?.()}
            </div>
        )
    }
})