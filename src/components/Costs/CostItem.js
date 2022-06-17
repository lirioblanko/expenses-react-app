import './CostItem.css'

import { Card } from '../UI/Card'
import {CostDate} from './CostDate'

export const CostItem = ({id, date, name, price}) => {
    return (
        <Card className='cost-item'>
            <CostDate date={date}/>
            <h2 className='cost-item__title'>{name}</h2>
            <p className='cost-item__price rub'>{price}</p>
        </Card>
    )
}
