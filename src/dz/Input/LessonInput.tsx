import {useState} from "react";
import {Button} from "./Component/Button";
import {Input} from "./Component/Input";

export const LessonInput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')
    console.log(title)

    const addMassage = (title: string) => {
        let newMessage= {message: title};
    setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMassage(title)
        setTitle('')
    }
    return (
        <div className={'Input'}>
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}