async function display(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof text === "string"
                ? resolve("스트링~")
                : reject("무엇?")
        }, time)
    })
}


(async function() {
    console.time("소요시간");
    try {
        await display("saenal", 3000)
        await display(2, 2000)
        await display("차차", 1000)
    } catch (error) {
        console.log(error)
    }
    
    
    console.timeEnd("소요시간")

    console.log('------')

    console.time("소요시간");
    try {
        await Promise.all([
            display("saenal", 3000),
            display(2, 2000),
            display("차차", 1000)
        ])
    } catch (error) {
        console.log(error)
    }
    
    console.timeEnd("소요시간")

})()