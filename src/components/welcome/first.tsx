import { defineComponent } from 'vue'
import styles from "./first.module.scss"
import saving from "../../assets/icons/saving.svg"
export const First = defineComponent({
    setup() {
        return () => (
            <div class={styles.wrapper}>
                <div class="card">
                    <img src={saving} alt="" />
                    <h2>会挣钱<br />还要会省钱</h2>
                </div>
                <div class="footNav">
                    <router-link class="fake" to="/welcome/second">下一页</router-link>
                    <router-link to="/welcome/second">下一页</router-link>
                    <router-link to="/welcome/start">跳过</router-link>
                </div>
            </div>
        )
    }
})