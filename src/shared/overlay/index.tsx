import { PropType, defineComponent } from 'vue'
import styles from "./index.module.scss"
import { Icon } from '../icon'
export const Overlay = defineComponent({
    props: {
        onclose: Function as PropType<(e: MouseEvent) => void>
    },
    setup(props) {
        return () => <>
            <div class={styles.wrapper} >
                <section>
                    <h2>用户未登录</h2>
                </section>
                <ul>
                    <li>
                        <Icon class="icon" name='statistics' />统计图表
                    </li>
                    <li>
                        <Icon class="icon" name="notify" />记账提醒
                    </li>
                    <li>
                        <Icon class="icon" name="export" />数据导出
                    </li>
                </ul>
            </div>
            <div class={styles.mask} onClick={props.onclose}></div>
        </>

    }
})