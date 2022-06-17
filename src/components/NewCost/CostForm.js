import './CostForm.css'

import React, { useState } from 'react'

export const CostForm = ({onSaveCostDate, onCloseCostDataHandler}) => {
    const defaultFieldForm = {
        name: '',
        price: '',
        date: ''
    }

    const [userInput, setUserInput] = useState(defaultFieldForm)

    const inputChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (userInput.name.trim().length === 0 || userInput.price.trim().length === 0 || userInput.date.trim().length === 0) {
            return
        }

        const costDate = {
            id: Math.random(),
            name: userInput.name,
            price: userInput.price,
            date: new Date(userInput.date)
        }

        onSaveCostDate(costDate)
        clearForm();
    }

    const clearForm = (e) => {
        e?.preventDefault();
        setUserInput(defaultFieldForm)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input
                        type="text"
                        name='name'
                        value={userInput.name}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number"
                           name='price'
                           value={userInput.price}
                           onChange={inputChangeHandler}
                           min='0.01'
                           step='0.01'

                    />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date"
                           name='date'
                           value={userInput.date}
                           min='2019-01-01'
                           step='2022-12*31'
                           onChange={inputChangeHandler}
                    />
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                </div>
                <div className="new-cost__actions new-cost__reset">
                    <button
                        type="reset"
                        onClick={clearForm}
                    >Очистить</button>
                </div>
                <div className="new-cost__actions new-cost__close">
                    <button
                        type="button"
                        onClick={onCloseCostDataHandler}
                    >Закрыть</button>
                </div>
            </div>
        </form>
    )
}
