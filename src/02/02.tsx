
type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType
    technologies: Array<Technologiestype>
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type Technologiestype = {
    id: number
    title: string
}




export const student: StudentType = {
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1,title: "HTML"},
        {id: 2,title: "CSS"},
        {id: 3,title: "React"},
    ]
}


