import saving from "../../assets/icons/saving.svg"
import { FunctionalComponent } from "vue"
import styles from "./welcome.module.scss"
export const FirstMain: FunctionalComponent = () => {
    return (
        <div class={styles.card}>
            <img src={saving} alt="" />
            <h2>会挣钱<br />还要会省钱</h2>
        </div>
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
