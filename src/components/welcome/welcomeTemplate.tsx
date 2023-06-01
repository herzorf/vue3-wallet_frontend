import styles from "./welcomeTemplate.module.scss"
import { FunctionalComponent } from "vue"
export const WelcomeLayout: FunctionalComponent = (_, context) => {
    const { slots } = context
    return (
        <div class={styles.wrapper}>
            <div class="card">
                {slots.img?.()}
                {slots?.title?.()}
            </div>
            <div class="footNav">
                {slots.footNav?.()}
            </div>
        </div>
    )
}