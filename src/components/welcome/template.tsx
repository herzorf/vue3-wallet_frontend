import styles from "./first.module.scss"
import { FunctionalComponent } from "vue"
export const WelcomeLayout: FunctionalComponent = (_, context) => {
    const { slots } = context
    return (
        <div class={styles.wrapper}>
            <div class="card">
                {slots.img?.()}
                <h2>{slots?.title?.()}</h2>
            </div>
            <div class="footNav">
                {slots.footNav?.()}
            </div>
        </div>
    )
}