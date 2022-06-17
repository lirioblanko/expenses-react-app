import './Diagram.css'

import { DiagramItem } from './DiagramItem'
import { Card } from "../UI/Card";

export const Diagram = ({dataSets}) => {
    const dataSetValues = dataSets.map(dataSet => dataSet.value);
    const maxMounthCosts = Math.max(...dataSetValues)

    return (
        <Card className="diagram">
            {
                dataSets.map(dataSet =>
                    <DiagramItem
                        key={dataSet.id}
                        value={dataSet.value}
                        maxValue={maxMounthCosts}
                        label={dataSet.label}
                    />)
            }
        </Card>
        )
}
