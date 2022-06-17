import './CostList.css'

import React, { useState } from 'react'
import { Card } from '../UI/Card'
import {CostItem} from "./CostItem";
import {CostsFilter} from "../CostFilter/CostFilter";
import {CostsDiagram} from "../Diagram/CostsDiagram";

export const CostList = ({costs}) => {
    const [selectedYear, setSelectedYear] = useState('2022')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filterCosts = costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <CostsFilter
                year={selectedYear}
                onChangeYear={yearChangeHandler}
                costs={filterCosts}
            >
            </CostsFilter>

            <Card className='cost-list' >
                {
                    filterCosts.length ?
                        filterCosts.map(cost => (
                            <CostItem
                                key={cost.id}
                                {...cost}
                            />)) :
                        <div>Список пуст</div>

                }
            </Card>
        </div>
    )
}
