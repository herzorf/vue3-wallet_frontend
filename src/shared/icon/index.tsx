import { defineComponent } from 'vue'
export const Icon = defineComponent({
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => (
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        )
    }
})