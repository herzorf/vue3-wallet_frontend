import saving from "../../assets/icons/saving.svg"
import { FunctionalComponent } from "vue"
import { WelcomeLayout } from "./welcomeTemplate"
export const FirstMain: FunctionalComponent = () => {
    return (
        <main>
            <img src={saving} alt="" />
            <h2>会挣钱<br />还要会省钱</h2>
        </main>
    )
}
FirstMain.displayName = "FirstMain"
export const FirstAction: FunctionalComponent = () => {
    return (
        <>
            <router-link class="fake" to="/welcome/second">下一页</router-link>
            <router-link to="/welcome/second">下一页</router-link>
            <router-link to="/start">跳过</router-link>
        </>
    )
}
FirstAction.displayName = "FirstAction"
export const First: FunctionalComponent = () => {
    return (
        <WelcomeLayout>
            {{
                img: () => <img src={saving} alt="" />,
                title: () => <h2>会挣钱<br />还要会省钱</h2>,
                footNav: () => (
                    <>
                        <router-link class="fake" to="/welcome/second">下一页</router-link>
                        <router-link to="/welcome/second">下一页</router-link>
                        <router-link to="/start">跳过</router-link>
                    </>
                )
            }}
        </WelcomeLayout>
    )
}
First.displayName = "First"