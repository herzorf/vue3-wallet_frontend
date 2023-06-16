import { defineComponent } from 'vue'
import { Button } from '../../shared/button'
import styles from "./index.module.scss"
export const Start = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <div class="button-wrapper">
                    <Button class="button" onClick={() => { console.log(111) }}>测试</Button>
                </div>
            </div>
        )
    }
})