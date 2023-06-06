import { FunctionalComponent } from "vue"
import cloud from "../../assets/icons/cloud.svg"
export const ForthMain: FunctionalComponent = () => {
    return (
        <main>
            <img src={cloud} alt="" />
            <h2>每日提醒<br />不会漏掉每一笔账单</h2>
        </main>
    )
}
ForthMain.displayName = "ForthMain"
export const ForthAction: FunctionalComponent = () => {
    return (
        <>
            <router-link class="fake" to="/welcome/third">下一页</router-link>
            <router-link to="/start">下一页</router-link>
            <router-link to="/start">跳过</router-link>
        </>
    )
}
ForthAction.displayName = "ForthAction"
