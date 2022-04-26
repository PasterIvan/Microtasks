import {Button} from "./Button";

export const Buttons =()=>{

    const Button1Foo=(subscriber: string, age: number, address: string)=>{
        console.log(subscriber, age, address)
    }
    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    const Button3Foo=()=>{
        console.log('Im stupid button')
    }

    return(
        <>
            <Button name = {'Vasya'} callBack={()=>Button1Foo('Im Vasya', 21, 'I am from Minsk')}/>
            <Button name = {'Ivan'} callBack={()=>Button2Foo('Im Ivan')}/>
            <Button name = {'Stupid BUTTON'} callBack={Button3Foo}/>
        </>
    )
}