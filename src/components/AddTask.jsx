import { useState } from "react";
import Button from "./Button";

import "./AddTask.css"

const AddTask = ({ handletaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handletaskAddition(inputData);
        setInputData('');
    }

    return (
        <div className="add-task-container">
            <input
                className="add-task-input"
                type="text"
                onChange={handleInputChange}
                value={inputData}
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>
                    Adicionar
                </Button>
            </div>

        </div>

    );
}

export default AddTask;