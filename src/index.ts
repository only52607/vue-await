import { ref } from "@vue/reactivity";

interface VAwaitOptions<T> {
    onReject?: ((value: T) => T | PromiseLike<T>) | undefined | null
}

export function vawait<T>(source: Promise<T>, options?: VAwaitOptions<T>){
    const currentOptions: VAwaitOptions<T> = {
        onReject: null,
    }
    Object.assign(currentOptions, options)
    const result = ref<T>()
    source.then((r: T) => {
        result.value = r
    }).catch(currentOptions.onReject)
    return result
}