import { defineComponent } from 'vue'
import { MainLayout } from '../../../shared/mainLayout'
import { Icon } from '../../../shared/icon'
import styles from "./index.module.scss"
export const ItemCreate = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <MainLayout>
                    {{
                        title: () => <span>记一笔</span>,
                        icon: () => <Icon class="icon" name='left' />,
                        default: () => (
                            <div>main</div>
                        )
                    }}
                </MainLayout>
            </div>

        )
    }
})