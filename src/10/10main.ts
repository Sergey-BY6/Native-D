export type UserType = {
    name: string
    hair: number
    adress: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithlLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookstype = UserType & {
    books: string[]
}

type CompaniesObjectType = {
    id: number,
    title: string
}
export type WithCompaniesType = {
    companies: CompaniesObjectType[]
}

export type CompanyType = {
    id: number,
    title: string
}


export const makeHairStyle = (u: UserType, power: number) => {
    const copyUser = {...u, hair: u.hair / 2}
    return copyUser
}


export const moveUser = (u: UserWithlLaptopType, cityName: string) => {
    const copyUser = {...u, adress: {...u.adress, title: cityName}}
    return copyUser
}


export const moveUserToOtherHouse = (u: UserWithlLaptopType & UserWithBookstype, house: number) => {
    const copyUser = {...u, adress: {...u.adress, house: house}}
    return copyUser
}


export const upgradeUserLaptop = (u: UserWithlLaptopType, laptopName: string) => {
    const copyUser = {
        ...u, laptop: {...u.laptop, title: laptopName}
    }
    console.log(copyUser)
    return copyUser
}


export const addNewBooksToUser = (u: UserWithlLaptopType & UserWithBookstype, array: string[]) => {
    const copyUser = {
        ...u, books: [...u.books, ...array]
    }
    return copyUser
}


export const updateBook = (u: UserWithlLaptopType & UserWithBookstype, ish: string, res: string) => {
    const copyUser = {
        ...u, books: u.books.map(el => el === ish ? el = res : el)
    }
    return copyUser
}


export const removeBook = (u: UserWithlLaptopType & UserWithBookstype, book: string) => {
    const copyUser = {
        ...u, books: u.books.filter(el => el !== book)
    }
    return copyUser
}


export const updateCompanyTitle = (u: UserWithlLaptopType & WithCompaniesType, id: number, newTitle: string) => {
    const copyUser = {
        ...u, companies: u.companies.map(el => el.id === id ? {...el, title: newTitle} : el)
    }
    return copyUser
}

export const updateCompanyTitle2 = (companies: {[key: string]: CompanyType[]},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

    const copyCompany = {
        ...companies, [userName]: companies[userName].map(el => el.id === companyId ? {...el, title: newTitle}: el)}

return copyCompany
}