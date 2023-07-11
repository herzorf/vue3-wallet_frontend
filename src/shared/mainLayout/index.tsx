import { defineComponent } from 'vue'
import { Navbar } from '../navbar'
export const MainLayout = defineComponent({
    setup(_, context) {
        return () => (
            <div>
                <Navbar icon="menu">
                    {{
                        title: () => context.slots.title?.(),
                        icon: () => context.slots.icon?.()
                    }}
                </Navbar>
                {context.slots.default?.()}
            </div>
        )
    }
})