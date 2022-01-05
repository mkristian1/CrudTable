import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actions";

const initialState = {
    cars: [
        { id: 1, brand: 'Bmw', model: '7 series', maxSpeed: 250, speedType: 'km' },
        { id: 2, brand: 'Maclaren', model: 'F1', maxSpeed: 350, speedType: 'km' },
        { id: 3, brand: 'Mazda', model: 'Rx 8', maxSpeed: 238, speedType: 'km' }
    ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            const newItem = action.payload;

            return {
                ...state,
                cars: [...state?.cars, { id: state?.cars.length + 1, ...newItem }]
            }

        case DELETE_ITEM:
            const id = action.payload;
            const res = state?.cars.filter(car => car.id !== id);

            return {
                ...state,
                cars: [...res]
            }

        case EDIT_ITEM:
            const item = action.payload;
            const newEditArr = state?.cars.map((car) => item.id === car.id ? { ...car, ...item } : car)

            return {
                ...state,
                cars: newEditArr,
            }


        default:
            return state;
    }
}

export default reducer;
