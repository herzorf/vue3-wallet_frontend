import { PropType, defineComponent } from 'vue'
import style from "./index.module.scss"
export const Tabs = defineComponent({
    props: {
        selected: {
            type: String as PropType<string>,
            required: true
        },
        onUpdateSelected: {
            type: Function as PropType<(value: string) => void>,
        }
    },
    setup(props, context) {
        return () => {
            const array = context.slots.default?.()
            if (!array) return null
            for (let i = 0; i < array?.length; i++) {
                if (array[i].type !== Tab) {
                    throw new Error('<Tabs> children must be <Tab>')
                }
            }
            return <div class={style.wrapper}>
                <ul class="nav">
                    {array.map((item: any) => {
                        return <li class={{ active: item.props.name === props.selected }} onClick={() => {
                            props.onUpdateSelected?.(item.props.name)
                        }}>{item.props.name}</li>
                    })}
                </ul>
                <div class="content">
                    {array.find((item) => item.props?.name === props.selected)}
                </div>
            </div>
        }
    }
})

export const Tab = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup(_, context) {
        return () => (
            <div>{context.slots.default?.()}</div>
        )
    }
})
