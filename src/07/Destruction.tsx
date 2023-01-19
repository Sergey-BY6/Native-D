
type LessonsType = {
    title: string
}
type AdressType = {
    street: StreetType
}
type StreetType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    adress: AdressType
}


type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    // const {title, man} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{props.car.model}</div>
            <div>{man.name}</div>
        </div>
    )
}