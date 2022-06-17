import './DiagramItem.css'

export const DiagramItem = ({ label, value, maxValue}) => {
    let diargramItemFillHeight = '0%';
    if (maxValue > 0) {
        diargramItemFillHeight = Math.round(value / maxValue * 100);
    }

    return (
        <div className='diagram-item'>
            <div className='diagram-item__inner'>
                <div className='diagram-item__fill' style={{height: diargramItemFillHeight}} />
            </div>
            <div className='diagram-item__label'>{ label }</div>
        </div>
    )
}
