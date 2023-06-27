import { defineComponent } from 'vue'
import styles from "./index.module.scss"
export const Navbar = defineComponent({
    props: {
        icon: {
            type: String,
        }
    },
    setup(props, context) {
        console.log(props.icon)
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