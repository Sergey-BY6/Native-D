
type UserType = {
    name: string
    age: number
    adress: {
        title: string
    }
}

const increaseAge = (u: UserType) => {
    u.age = u.age +1
}

test ("big reference type test" , () => {

    const user: UserType  = {
        name: "Dimych",
        age: 32,
        adress: {
            title: "Minsk"
        }
    }

    increaseAge(user)

expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000
    expect(user.age).toBe(1000)

})


test ("array reference test" , () => {

    const users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Dimych",
            age: 32
        },
    ]

    const admins = users

    admins.push({name: "Bandyugan", age: 10})


    expect(users[2]).toEqual({name: "Bandyugan", age: 10})

})


test ("value type test" , () => {

    const users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Dimych",
            age: 32
        },
    ]

    const admins = users

    admins.push({name: "Bandyugan", age: 10})


    expect(users[2]).toEqual({name: "Bandyugan", age: 10})

})


test ("reference type object test" , () => {

    const user1: UserType = {
        name: "Dimych",
        age: 32,
        adress: {
            title: "Minsk"
        }
    }


    const user2: UserType = {
        name: "Natasha",
        age: 33,
        adress: user1.adress
    }

    expect(user1.adress).toBe(user2.adress)

})


test ("reference type array test" , () => {

    const adress = {
        title: "Minsk"
    }
    const user1: UserType = {
        name: "Dimych",
        age: 32,
        adress: adress
    }

    const user2: UserType = {
        name: "Natasha",
        age: 33,
        adress: adress
    }

    const users = [user1, user2, {name: "Natasha", age: 33, adress: adress}]


    users[0].name = "Dmitriy"

    expect(user1.name).toBe("Dmitriy")

})