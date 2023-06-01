import { FunctionalComponent } from "vue"
import cloud from "../../assets/icons/cloud.svg"
import { WelcomeLayout } from './welcomeTemplate'
export const ForthMain: FunctionalComponent = () => {
    return (
        <>
            <img src={cloud} alt="" />
            <h2>每日提醒<br />不会漏掉每一笔账单</h2>
        </>
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
export const Forth = () => {
    return (<WelcomeLayout>
        {{
            img: () => <img src={cloud} alt="" />,
            title: () => <h2>每日提醒<br />不会漏掉每一笔账单</h2>,
            footNav: () => (
                <>
                    <router-link class="fake" to="/welcome/third">下一页</router-link>
                    <router-link to="/start">下一页</router-link>
                    <router-link to="/start">跳过</router-link>
                </>
            )
        }}
    </WelcomeLayout>)

}
Forth.displayName = "Forth"