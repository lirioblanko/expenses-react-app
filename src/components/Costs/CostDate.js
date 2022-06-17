import './CostDate.css'

export const CostDate = ({date}) => {

    const day = date.toLocaleString('ru-RU', {day: '2-digit'})
    const mounth = date.toLocaleString('ru-RU', {month: 'long'})
    const year = date.getFullYear()

    return (
        <div className='cost-date'>
            <div className="cost-date__wrapper">
                <div className='cost-date__day'>{day + ' ' + mounth}</div>
                <div className='cost-date__year'>{year}</div>
            </div>
        </div>
    )
}
