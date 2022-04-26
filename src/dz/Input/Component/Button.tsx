
type ButtonPropsType ={
    name: string
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {
    const onChageInputHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onChageInputHandler}>{props.name}</button>
    )
}