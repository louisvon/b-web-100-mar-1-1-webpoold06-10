export function countGs(str) {
    let compter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g' || str[i] === 'G') {
            compter++;
        }
    }
    return compter;
}