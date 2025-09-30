function solution(numbers) {
    return numbers.sort((a,b)=>a-b).slice(-2).reduce((a,v)=>a*v,1)
    
}