import style from './styles/index.module.scss'

const Button = ({ theme = 'default', type = 'button', children }) => {
    return (
        <button className={style[theme]} type={type}>
            {children}
        </button>
    )
}

export default Button;