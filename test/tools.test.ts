import { getType, isNumber } from '../src/tools'

test('获取类型', () => {
    expect(getType('hello')).toBe('String')
})

test('判断是否是数字', () => {
    expect(isNumber('hello')).toBe(false)
    expect(isNumber('12a')).toBe(false)
    expect(isNumber('Infinity')).toBe(true)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(-Infinity)).toBe(true)
})