import style from './styles/index.module.scss';

const Tbody = ({ cars }) => {
    return (
        <tbody className={style.tbody}>
            {cars?.map(({ id, brand, model, maxSpeed, speedType }) => {
                return (
                    <tr className={style.tbody__tr} key={id}>
                        <td className={style.tbody__td}>{brand}</td>
                        <td className={style.tbody__td}>{model}</td>
                        <td className={style.tbody__td}>{maxSpeed} {speedType}/h</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default Tbody;