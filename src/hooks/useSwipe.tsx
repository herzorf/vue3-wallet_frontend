import { Ref, computed, onMounted, onUnmounted, ref } from "vue"

type position = {
    x: number,
    y: number
}

interface option {
    beforeStart?: (e: TouchEvent) => void,
    afterStart?: (e: TouchEvent) => void,
    beforeMove?: (e: TouchEvent) => void,
    afterMove?: (e: TouchEvent) => void,
    beforeEnd?: (e: TouchEvent) => void,
    afterEnd?: (e: TouchEvent) => void,
}

export const useSwipe = (element: Ref<HTMLElement | null>, options?: option) => {
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
        options?.beforeStart?.(e)
        start.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        swipe.value = true
        options?.afterStart?.(e)
    }
    const onMove = (e: TouchEvent) => {
        options?.beforeMove?.(e)
        end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        options?.afterMove?.(e)
    }
    const onEnd = (e: TouchEvent) => {
        options?.beforeEnd?.(e)
        swipe.value = false
        options?.afterEnd?.(e)
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