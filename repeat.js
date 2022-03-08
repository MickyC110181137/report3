const repeat = (operation,num) => {
    const func = (num) => {
        if(num === 0) return
        console.log(num)
        return func(--num);
    }
    func(10)
}
module.exports = repeat
