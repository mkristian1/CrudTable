import style from './styles/index.module.scss'

const Button = ({ theme = 'default', type = 'button', children, ...props }) => {
    return (
        <button {...props} className={style[theme]} type={type}>
            {children}
        </button>
    )
}

export default Button;