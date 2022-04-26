type TopCarType = {
    arrTopCars: Array<TopCarsTyps>
}
type TopCarsTyps = {
    manufacturer: string,
    model: string
}

export const TopCar = (props: TopCarType) => {
    return (
        <table>
            <tbody>
            {props.arrTopCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                    </tr>)
            })}
            </tbody>
        </table>
    )
}