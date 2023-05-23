import { defineComponent } from 'vue'
import styles from "./first.module.scss"
import clock from "../../assets/icons/cloud.svg"
export const Forth = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <div class="card">
                    <img src={clock} alt="" />
                    <h2>每日提醒<br />不会漏掉每一笔账单</h2>
                </div>
                <div class="footNav">
                    <router-link class="fake" to="/welcome/third">下一页</router-link>
                    <router-link to="/welcome/start">下一页</router-link>
                    <router-link to="/welcome/start">跳过</router-link>
                </div>
            </div>
        )
    }
})