import { defineComponent } from 'vue'
import { Button } from '../../shared/button'
import styles from "./index.module.scss"
import { FloatButton } from '../../shared/floatButton'
import { Center } from '../../shared/center'
import { Icon } from '../../shared/icon'
export const Start = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <Center class="center" >
                    <Icon name='saving' />
                </Center>
                <div class="button-wrapper">
                    <Button class="button" onClick={() => { console.log(111) }}>测试</Button>
                </div>
                <FloatButton name='add' />
            </div>
        )
    }
})