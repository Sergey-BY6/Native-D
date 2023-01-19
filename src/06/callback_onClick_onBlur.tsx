import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        // e.currentTarget.name
        alert(e.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }



const onNameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(`name changed: ${e.currentTarget.value}`)
}

const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`age changed: ${e.currentTarget.value}`)
}



const focusLost = () => {
    console.log("focus lost")
}



    return (
        <div><textarea onBlur={focusLost} onChange={onNameChanged}>Dimycn</textarea>
            <input onChange={onAgeChanged}/>
            <button name={"delete"} onClick={deleteUser}>delete</button>
            <button name={"save"} onClick={deleteUser}>save</button>
        </div>
    )
}