import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
export const App = defineComponent({
  setup() {

    return () => (
      <div >
        <div class="link">
          <RouterLink to="/">bar</RouterLink> |
          <RouterLink to="/foo">foo</RouterLink>
        </div>
        <RouterView></RouterView>
      </div>
    )
  }
})
