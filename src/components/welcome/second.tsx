import { FunctionalComponent } from "vue"
import styles from "./welcome.module.scss"

export const SecondMain: FunctionalComponent = () => {
    return (
        <div class={styles.card}>
            <svg>
                <use xlinkHref={`#clock`} />
            </svg>
            <h2>每日提醒<br />不会漏掉每一笔账单</h2>
        </div>
    )
}
SecondMain.displayName = "SecondMain"
export const SecondAction: FunctionalComponent = () => {
    return (
        <>
            <router-link class="fake" to="/welcome/third">下一页</router-link>
            <router-link to="/welcome/third">下一页</router-link>
            <router-link to="/start">跳过</router-link>
        </>
    )
}
SecondAction.displayName = "SecondAction"
