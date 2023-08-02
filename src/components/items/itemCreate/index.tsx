import { defineComponent, ref } from 'vue'
import { MainLayout } from '../../../shared/mainLayout'
import { Icon } from '../../../shared/icon'
import styles from "./index.module.scss"
import { Tab, Tabs } from '../../../shared/tabs'
export const ItemCreate = defineComponent({
    setup() {
        const selectValue = ref("收入")
        const onUpdateSelected = (value: string) => {
            selectValue.value = value
        }
        return () => (
            <div class={styles.wrapper}>
                <MainLayout>
                    {{
                        title: () => <span>记一笔</span>,
                        icon: () => <Icon class="icon" name='left' />,
                        default: () => <>
                            <Tabs selected={selectValue.value} onUpdateSelected={onUpdateSelected}>
                                <Tab name="收入">
                                    收入内容
                                </Tab>
                                <Tab name="支出">
                                    支出内容
                                </Tab>
                            </Tabs>
                        </>
                    }}
                </MainLayout>
            </div>

        )
    }
})