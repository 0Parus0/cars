import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";


function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });
   
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({name, cost}));
    }

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input className="input is-expanded" value={name} onChange={handleNameChange} type="text" />
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="">Cost</label>
                        <input className="input is-expanded" value={cost || ''} onChange={handleCostChange} type="number" name="" id="" />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Add Car</button>
                </div>
            </form>
        </div>
    )
}


export default CarForm;