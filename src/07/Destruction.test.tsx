import {ManType} from './Destruction';


let props: ManType;
beforeEach( () => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        adress: {
            street: {
                title: "Nezavisimosti stree"
            }
        }
    }
})


test("1", ()=> {

    // const age = props.age
    // const lessons = props.lessons

    let {age, lessons} = props
    let {title} = props.adress.street

    age = 55

    expect(props.age).toBe(32)
    expect(age).toBe(55)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nezavisimosti stree")

})


test("2", ()=> {

// const l1 = props.lessons[0]
// const l2 = props.lessons[1]

    const [l1, ...rest] = props.lessons

expect(rest.length).toBe(2)
expect(rest[0].title).toBe("2")

})
