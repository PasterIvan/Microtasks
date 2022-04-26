type ButtonType = {
    name: string,
    callBack: ()=>void
}

export function Button(props: ButtonType) {
    const onClickHandler =()=>{
    props.callBack()
    }
    return (
        <div>
             <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}