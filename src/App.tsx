import { defineComponent, ref } from 'vue'
export const App = defineComponent({
  setup() {
    const count = ref(0)
    const click = () => count.value++

    return () => (
      <div onClick={click}>{count.value}</div>
    )
  }
})
