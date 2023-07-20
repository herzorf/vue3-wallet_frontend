import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export const Items = defineComponent({
    setup() {
        return () => (
            <RouterView />
        )
    }
})