import "./CostFilter.css";

import { Card } from '../UI/Card'
import {CostsDiagram} from "../Diagram/CostsDiagram";
import React from "react";

export const CostsFilter = ({onChangeYear, year, costs}) => {
    const yearChangeHandler = (e) => {
        onChangeYear(e.target.value);
    };

    return (
        <Card className="costs-filter">
            <div className="costs-filter__control">
                <label>Фильтр расходов</label>
                <select value={year}
                    onChange={yearChangeHandler}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>

            <CostsDiagram costs={costs}/>

        </Card>
    );
};
