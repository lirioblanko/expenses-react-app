import './CostForm.css'
import React, { useState } from 'react'
export const CostForm = ({onSaveCostDate, onCloseCostDataHandler}) => {
    // const [inputName, setInputName] = useState('')
    // const [inputPrice, setInputPrice] = useState('')
    // const [inputDate, setInputDate] = useState('')
    const [isInputValidName, setIsInputValidName] = useState(true)

    const defaultFieldForm = {
        name: '',
        price: '',
        date: ''
    }

    // const defaultFieldFormValue = {
    //     name: true,
    //     price: true,
    //     date: true
    // }

    const [userInput, setUserInput] = useState(defaultFieldForm)
    // const [isInputValid, setInputValid] = useState(defaultFieldFormValue)

    const inputChangeHandler = (e) => {
        setUserInput({
            ...userInput,
           [e.target.name]: e.target.value
        })
    }

    const nameChangeHandler = (e) => {
        // setInputName(e.target.value)
        setUserInput({
            ...userInput,
            name: e.target.value
        })

    }

    const priceChangeHandler = (e) => {
        // setInputPrice(e.target.value)
        setUserInput({
            ...userInput,
            price: e.target.value
        })
    }

    const dateChangeHandler = (e) => {
        // setInputDate(e.target.value)
        setUserInput({
            ...userInput,
            date: e.target.value
        })
    }

    // const isValidInput = () => {
    //    if (userInput.name.trim().length > 0) {
    //        setIsInputValidName(false)
    //    } else setInputValid(true)
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        // if (inputName.trim().length === 0 || inputPrice.trim().length === 0 || inputDate.trim().length === 0) {
        if (userInput.name.trim().length === 0 || userInput.price.trim().length === 0 || userInput.date.trim().length === 0) {
            // if (userInput.name.trim().length === 0) {
            //     setInputValid({
            //         ...isInputValid,
            //         name: false
            //     })
            // }
            return
        }

        // const costDate = {
        //     id: 1111,
        //     name: inputName,
        //     price: inputPrice,
        //     date: new Date(inputDate)
        // }

        const costDate = {
            id: 1111,
            name: userInput.name,
            price: userInput.price,
            date: new Date(userInput.date)
        }

        onSaveCostDate(costDate)
        clearForm();
    }

    const clearForm = (e) => {
        e?.preventDefault();
        // setInputName('')
        // setInputPrice('')
        // setInputDate('')
        setUserInput(defaultFieldForm)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                {/*<div className={`new-cost__control ${!isInputValid.name ? 'invalid-input' : ''}`}>*/}
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input
                        type="text"
                        name='name'
                        // value={inputName}
                        value={userInput.name}
                        // onChange={nameChangeHandler}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number"
                           // value={inputPrice}
                           name='price'
                           value={userInput.price}
                           // onChange={priceChangeHandler}
                           onChange={inputChangeHandler}
                           min='0.01'
                           step='0.01'

                    />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date"
                           // value={inputDate}
                            name='date'
                            value={userInput.date}
                            min='2019-01-01'
                            step='2022-12*31'
                            // onChange={dateChangeHandler}
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
