const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
const buttonElement = document.querySelector('button')!

const numResult: Array<number> = []
const textResult: string[] = []

type NumOrString = number | string
type Result = { val: number; timestamp: Date }

interface ResultObj {
    val: number,
    timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2
    }
    return +num1 + +num2
}

function printResult(resultObj: ResultObj){
    console.log(resultObj)
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value
    const num2 = num2Element.value
    const result = add(+num1, +num2)
    numResult.push(result as number)
    const stringResult = add(num1, num2)
    textResult.push(stringResult as string)
    console.log(numResult, textResult)
    printResult({ val: result as number, timestamp: new Date() })
})

const myPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res('It worked!')
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'))
})