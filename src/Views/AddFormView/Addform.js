import style from './styles/index.module.scss'
import Button from "../Button";

const AddForm = ({ formik }) => {
    const { handleChange, handleSubmit, values } = formik;

    return (
        <form onSubmit={handleSubmit} className={style.addForm}>
            <input onChange={handleChange} value={values.brand} name='brand' placeholder='Brand' type="text" />
            <input onChange={handleChange} value={values.model} name='model' placeholder='Model' type="text" />
            <input onChange={handleChange} value={values.maxSpeed} name='maxSpeed' placeholder='Max Speed' type="text" />
            <Button type='submit'>
                +
            </Button>
        </form>
    )
}

export default AddForm;