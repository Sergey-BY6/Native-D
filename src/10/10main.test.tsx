import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBookstype,
    UserWithlLaptopType, WithCompaniesType
} from './10main';


test('reference type test', () => {
    let user: UserWithlLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.adress).toBe(user.adress)

})

test('change adress', () => {
    let user: UserWithlLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.adress).not.toBe(movedUser.adress)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.adress.city).toBe(movedUser.adress.city)

})


test('upgrade laptop to macbook', () => {
    let user: UserWithlLaptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(user.laptop.title).toBe("ZenBook")
    expect(movedUser.laptop.title).toBe("Macbook")

})




test('upgrade house', () => {
    let user: UserWithlLaptopType & UserWithBookstype = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).not.toBe(userCopy.adress)
    expect(userCopy.adress.house).toBe(99)


})



test('upgrade book', () => {
    let user: UserWithlLaptopType & UserWithBookstype = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest api")


})




test('upgrade book in array', () => {
    let user: UserWithlLaptopType & UserWithBookstype = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books[2]).toBe("js")
    expect(userCopy.books[2]).toBe("ts")



})

test('remove js book', () => {
    let user: UserWithlLaptopType & UserWithBookstype = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books[2]).toBe("js")
    expect(userCopy.books[2]).toBe("react")

})


test('companies', () => {
    let user: UserWithlLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
       companies: [
           {id:1, title: "Епам"},
           {id:2, title: "IT-INCUBATOR"}
       ]

    }

    const userCopy = updateCompanyTitle(user, 1, "EPAM")


    expect(user).not.toBe(userCopy)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe("EPAM")

})


test('companies update', () => {


    const companies = {
        "Dimych" :  [{id:1, title: "Епам"}, {id:2, title: "IT-INCUBATOR"}],
        "Artem": [{id:2, title: "IT-INCUBATOR"}],
    }


   const copy = updateCompanyTitle2(companies, "Dimych", 1,"EPAM" )


    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("EPAM")


})