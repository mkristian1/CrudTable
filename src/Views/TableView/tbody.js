import style from './styles/index.module.scss';
import Button from '../Button'

const Tbody = ({ cars, deleteItem }) => {
    return (
        <tbody className={style.tbody}>
            {cars?.map(({ id, brand, model, maxSpeed, speedType }) => {
                return (
                    <tr className={style.tbody__tr} key={id}>
                        <td className={style.tbody__td}>{brand}</td>
                        <td className={style.tbody__td}>{model}</td>
                        <td className={style.tbody__td}>{maxSpeed} {speedType}/h</td>
                        <td className={style.tbody__td}>
                            <Button onClick={() => deleteItem(id)} theme='danger'>DELETE</Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default Tbody;