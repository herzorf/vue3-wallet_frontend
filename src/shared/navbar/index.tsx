import { defineComponent } from 'vue'
import styles from "./index.module.scss"
export const Navbar = defineComponent({
    props: {
        icon: {
            type: String,
        }
    },
    setup(_, context) {
        return () => (
            <div class={styles.wrapper}>
                {context.slots.icon?.()}
                <span>
                    {context.slots.default?.()}
                </span>
            </div>
        )
    }
})