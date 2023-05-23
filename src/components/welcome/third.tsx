import { defineComponent } from 'vue'
import styles from "./first.module.scss"
import statistics from "../../assets/icons/statistics.svg"
export const Third = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <div class="card">
                    <img src={statistics} alt="" />
                    <h2>每日提醒<br />不会漏掉每一笔账单</h2>
                </div>
                <div class="footNav">
                    <router-link class="fake" to="/welcome/third">下一页</router-link>
                    <router-link to="/welcome/forth">下一页</router-link>
                    <router-link to="/welcome/start">跳过</router-link>
                </div>
            </div>
        )
    }
})