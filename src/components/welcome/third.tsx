import { FunctionalComponent } from 'vue'
import statistics from "../../assets/icons/statistics.svg"
export const ThirdMain: FunctionalComponent = () => {
    return (
        <main>
            <img src={statistics} alt="" />
            <h2>每日提醒<br />不会漏掉每一笔账单</h2>
        </main>
    )
}
ThirdMain.displayName = "ThirdMain"

export const ThirdAction: FunctionalComponent = () => {
    return (
        <>
            <router-link class="fake" to="/welcome/third">下一页</router-link>
            <router-link to="/welcome/forth">下一页</router-link>
            <router-link to="/start">跳过</router-link>
        </>
    )
}
ThirdAction.displayName = "ThirdAction"
