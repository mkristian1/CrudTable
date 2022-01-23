import { ADD_ITEM, DELETE_ITEM, DELETE_SELECTED_ITEM, EDIT_ITEM } from "./actions";

const storageState = JSON.parse(window.localStorage.getItem('storageState'));

const initialState = {
    cars: [
        { id: 1, brand: 'Bmw', model: '7 series', maxSpeed: 250, speedType: 'km' },
        { id: 2, brand: 'Maclaren', model: 'F1', maxSpeed: 350, speedType: 'km' },
        { id: 3, brand: 'Mazda', model: 'Rx 8', maxSpeed: 238, speedType: 'km' }
    ]
}

const reducer = (state = storageState || initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            const newItem = action.payload;
            const newItemId = state?.cars.reduce((acc, item) => { return acc + item.id; }, 1);

            return {
                ...state,
                cars: [...state?.cars, { id: newItemId, ...newItem }]
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

        case DELETE_SELECTED_ITEM:
            const selectedItems = action.payload;
            const removedArr = state?.cars.filter(({ id }) => !selectedItems.some(item => id === item.id))

            return {
                ...state,
                cars: removedArr,
            }

        default:
            return state;
    }
}

export default reducer;
