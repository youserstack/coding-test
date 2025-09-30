function solution(n, k) {
    // 양꼬치n인분, 음료수k개
    // 양꼬치1인분 = 12000, 음료수1개 = 2000
    // 10인분 -> 음료수서비스 서비스
    const service = (Math.floor(n/10))*2000
    return n*12000+k*2000-service
}