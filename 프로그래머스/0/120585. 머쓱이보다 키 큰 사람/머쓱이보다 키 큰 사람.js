function solution(array, height) {
    // 입력height보다 큰 사람의 수를 array에서 카운팅
    return array.filter((v)=>v>height).length
}