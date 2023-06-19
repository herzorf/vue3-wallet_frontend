import { defineComponent } from 'vue'
import styles from "./index.module.scss"
import { Icon } from '../icon'
export const FloatButton = defineComponent({
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => (
            <div class={styles.wrapper}>
                <Icon class="svg" name={props.name} />
            </div>
        )
    }
})