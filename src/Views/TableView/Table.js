const Table = ({ cars }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Max speed</th>
                </tr>
            </thead>
            <tbody>
                {cars?.map(({ id, brand, model, maxSpeed, speedType }) => {
                    return (
                        <tr key={id}>
                            <td>{brand}</td>
                            <td>{model}</td>
                            <td>{maxSpeed} {speedType}/h</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;