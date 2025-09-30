function solution(n, k) {
    // 양꼬치n인분, 음료수k개
    // 양꼬치1인분 = 12000, 음료수1개 = 2000
    // 10인분 -> 음료수서비스 서비스
    const yanggochi = 12000
    const drink = 2000
    const service = (Math.floor(n/10))*drink
    return n*yanggochi+k*drink-service
}