// ============ 七种JS中的数据类型 ======================
const a: number = 1

const b: boolean = true

const c: string = 'str'

const d: null = null

const e: undefined = undefined

const f: symbol = Symbol('description')

const obj: object = {}

// =====================================

const arr: number[] = [1, 2, 3] // 类型数组

const tuple: [number, string] = [1, '1'] // 元组

enum Gender { // 枚举
  Man = 'man',
  Woman = 'woman'
}
let man: Gender = Gender.Man

function fn(str: string): void { // void
  console.log(str)
}
// const g: number = fn() // error

// ! 指定了strictNullChecks后，null和undefined只能赋值给void和自身
// const g: number = null // error
// const h: number = undefined // error

console.log(a, b, c, d, e, f)
console.log(obj, arr, tuple)
console.log(man)
