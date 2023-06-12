import { Ref, computed, onMounted, onUnmounted, ref } from "vue"

type position = {
    x: number,
    y: number
}

export const useSwipe = (element: Ref<HTMLElement | null>) => {
    const start = ref<position>()
    const end = ref<position>()
    const swipe = ref(false)
    const direction = computed(() => {
        if (start.value && end.value && swipe) {
            const diffX = end.value.x - start.value.x
            const diffY = end.value.y - start.value.y
            if (Math.abs(diffX) > Math.abs(diffY)) {
                return diffX > 0 ? "right" : "left"
            } else {
                return diffY > 0 ? "down" : "up"
            }
        }
        return ""
    })
    const distance = computed(() => {
        if (start.value && end.value) {
            return {
                x: end.value.x - start.value.x,
                y: end.value.y = start.value.y
            }
        }
        return undefined
    })
    const onStart = (e: TouchEvent) => {
        start.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        swipe.value = true
    }
    const onMove = (e: TouchEvent) => {
        end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
    }
    const onEnd = () => {
        swipe.value = false
    }
    onMounted(() => {
        element.value?.addEventListener("touchstart", onStart)
        element.value?.addEventListener("touchmove", onMove)
        element.value?.addEventListener("touchend", onEnd)
    })
    onUnmounted(() => {
        element.value?.removeEventListener("touchstart", onStart)
        element.value?.removeEventListener("touchmove", onMove)
        element.value?.removeEventListener("touchend", onEnd)
    })
    return { swipe, direction, distance }
}