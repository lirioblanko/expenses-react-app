import { Diagram } from "./Diagram";

export const CostsDiagram = ({costs}) => {
    const diagramDataSets = [
        {id: 'd1', label: 'ЯНВ', value: 0},
        {id: 'd2', label: 'ФЕВ', value: 0},
        {id: 'd3', label: 'МАР', value: 0},
        {id: 'd4', label: 'АПР', value: 0},
        {id: 'd5', label: 'МАЙ', value: 0},
        {id: 'd6', label: 'ИЮН', value: 0},
        {id: 'd7', label: 'ИЮЛ', value: 0},
        {id: 'd8', label: 'АВГ', value: 0},
        {id: 'd9', label: 'СЕН', value: 0},
        {id: 'd10', label: 'ОКТ', value: 0},
        {id: 'd11', label: 'НОЯ', value: 0},
        {id: 'd12', label: 'ДЕК', value: 0}
    ]

    for (const cost of costs) {
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.price;
    }

    return (
        <Diagram dataSets={diagramDataSets}/>
    )
}
