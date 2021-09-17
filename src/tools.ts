const isObject = (obj: any) => {
    return obj instanceof Object
}

const getType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

export { 
    isObject,
    getType
}