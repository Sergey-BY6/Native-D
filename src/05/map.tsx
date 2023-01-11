
export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},

]

const dimychTransformator = (man: ManType) => {
    return {
        stask: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}



const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
    firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
    firstName: "Alexandr", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
    firstName: "Dmitry", lastName: "Sidorov"
    },
]



const devResult = people.map (el => {
    return {
        stask: ["css, html", "js", "tdd", "react"],
        firstName: el.name.split(" ")[0],
        lastName: el.name.split(" ")[1]
    }
})

