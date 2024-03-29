import { defineComponent, ref } from 'vue'
import { Button } from '../../shared/button'
import styles from "./index.module.scss"
import { FloatButton } from '../../shared/floatButton'
import { Center } from '../../shared/center'
import { Icon } from '../../shared/icon'
import { Overlay } from '../../shared/overlay'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../../shared/mainLayout'
export const Start = defineComponent({
    setup() {
        const overlayVisible = ref(false)
        const onClickMenu = () => {
            overlayVisible.value = !overlayVisible.value
        }
        return () => (
            <div class={styles.wrapper}>
                <MainLayout>
                    {{
                        title: () => "花钱记账",
                        icon: () => <Icon class="icon" onClick={onClickMenu} name='menu' />,
                        default: () => (
                            <>
                                <Center direction="horizontal" >
                                    <Icon name='saving' />
                                </Center>
                                <div class="button-wrapper">
                                    <RouterLink to="item/create">
                                        <Button class="button">开始记账</Button>
                                    </RouterLink>
                                </div>
                                <RouterLink to="item/create">
                                    <FloatButton class="floatbutton" name='add' />
                                </RouterLink>
                                {
                                    overlayVisible.value && <Overlay onclose={(e: MouseEvent) => {
                                        e.stopPropagation()
                                        overlayVisible.value = !overlayVisible.value
                                    }
                                    } />
                                }
                            </>
                        )
                    }}
                </MainLayout>
            </div>
        )
    }
})