import {student} from './02';

test ("Should be files student", () => {
    const a = student.age

    expect(a).toBe(32)
})