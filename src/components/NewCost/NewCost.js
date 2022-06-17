import './NewCost.css'
import { useState } from "react";
import { CostForm } from "./CostForm";
import { Card } from '../UI/Card'
import React from "react";

export const NewCost = ({onAddCost}) => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDateHandler = (inputCostDate) => {
        onAddCost(inputCostDate)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const closeCostDataHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <Card className='new-cost'>
            {
                !isFormVisible && <button
                    type="button"
                    onClick={inputCostDataHandler}
                >Добавить новый расход</button>
            }
            {
                isFormVisible &&  <CostForm onSaveCostDate={saveCostDateHandler} onCloseCostDataHandler={closeCostDataHandler} />
            }

        </Card>
    )
}
