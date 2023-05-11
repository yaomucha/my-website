// 数组扁平化
export const arrayFlat = (arr, init) => {
    const initArr = init || []

    return arr.reduce((preRes, currentItem) => {
        if (Array.isArray(currentItem)) {
            arrayFlat(currentItem, preRes)
        }
        return preRes.concat(currentItem)
    }, initArr)

}



// 数组去重
export const removeDuplicates = (arr) => {
    return arr.reduce((preRes, currentItem) => {
        return preRes.includes(currentItem) ? preRes : [...preRes, currentItem]
    }, [])
}


//参数平铺
export const compose = (...args) => (x) => args.reduceRight((res, item) => { return item(res) }, x)