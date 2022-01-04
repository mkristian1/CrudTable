import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addItemAction } from "../Redux/actions";
import AddFormView from "../Views/AddFormView";

const AddFormComponent = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(addItemAction(values))
    }

    const formik = useFormik({
        initialValues: {
            brand: '',
            model: '',
            maxSpeed: '',
        },
        onSubmit: handleSubmit,
    })
    return (
        <AddFormView.AddForm formik={formik} />
    )
}

export default AddFormComponent;