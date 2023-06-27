import { defineComponent } from 'vue'
import { Button } from '../../shared/button'
import styles from "./index.module.scss"
import { FloatButton } from '../../shared/floatButton'
import { Center } from '../../shared/center'
import { Icon } from '../../shared/icon'
import { Navbar } from '../../shared/navbar'
export const Start = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <Navbar icon="menu">
                    {{
                        default: "花钱记账",
                        icon: <Icon class="icon" name='menu' />
                    }}
                </Navbar>
                <Center direction="horizontal" >
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