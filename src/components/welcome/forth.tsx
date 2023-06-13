import { FunctionalComponent } from "vue"
import styles from "./welcome.module.scss"

export const ForthMain: FunctionalComponent = () => {
    return (
        <div class={styles.card}>

            <svg>
                <use xlinkHref={`#cloud`} />
            </svg>
            <h2>每日提醒<br />不会漏掉每一笔账单</h2>
        </div>
    )
}
ForthMain.displayName = "ForthMain"
export const ForthAction: FunctionalComponent = () => {
    return (
        <>
            <router-link class="fake" to="/welcome/third">下一页</router-link>
            <router-link to="/start">完成</router-link>
            <router-link to="/start" class="fake" >跳过</router-link>
        </>
    )
}
ForthAction.displayName = "ForthAction"
