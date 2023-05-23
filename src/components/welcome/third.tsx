import { defineComponent } from 'vue'
import statistics from "../../assets/icons/statistics.svg"
import { WelcomeLayout } from './welcomeTemplate'
export const Third = defineComponent({
    setup() {
        return () => (
            <WelcomeLayout>
                {{
                    img: () => <img src={statistics} alt="" />,
                    title: () => <h2>每日提醒<br />不会漏掉每一笔账单</h2>,
                    footNav: () => (
                        <>
                            <router-link class="fake" to="/welcome/third">下一页</router-link>
                            <router-link to="/welcome/forth">下一页</router-link>
                            <router-link to="/start">跳过</router-link>
                        </>
                    )
                }}
            </WelcomeLayout>
        )
    }
})
Third.displayName = "Third"