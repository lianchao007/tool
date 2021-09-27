
/**
 * param 
 * num 任意
 * return string num是否是数字
 */
 const isNumber = (num: any) => {
    if(typeof num === 'number') {
        return true
    } else if(typeof num === 'string') {
        if(!isNaN(Number(num))) {
            return true
        }
    }
    return false
}

/**
 * param 
 * obj 任意
 * return string obj的类型
 */
const getType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

/**
 * param 
 * num 数字
 * return string 小于10大于等于0补0
 */
const addZero = (num: number) => {
    return (num < 10 && num >= 0 ? '0' : '') + num
}


/**
 * param 
 * dataStr 日期 
 * format 时间格式
 * return string 按格式输出时间
 */

const formatDate = (dateStr: string, format: string) => {
    let date = new Date(dateStr)
    let str = format
    str = str.replace('yyyy', addZero(date.getFullYear()))
    str = str.replace('MM', addZero(date.getMonth()))
    str = str.replace('dd', addZero(date.getDate()))
    str = str.replace('hh', addZero(date.getHours()))
    str = str.replace('mm', addZero(date.getMinutes()))
    str = str.replace('ss', addZero(date.getSeconds()))
    return str
}

export { 
    isNumber,
    getType,
    addZero,
    formatDate
}