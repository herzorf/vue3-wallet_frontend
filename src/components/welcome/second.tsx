import clock from "../../assets/icons/clock.svg"
import { WelcomeLayout } from "./welcomeTemplate"
export const Second = () => {
    return (
        <WelcomeLayout>
            {{
                img: () => <img src={clock} alt="" />,
                title: () => <h2>每日提醒<br />不会漏掉每一笔账单</h2>,
                footNav: () => (
                    <>
                        <router-link class="fake" to="/welcome/third">下一页</router-link>
                        <router-link to="/welcome/third">下一页</router-link>
                        <router-link to="/start">跳过</router-link>
                    </>
                )
            }}
        </WelcomeLayout>
    )
}
Second.displayName = "Second"