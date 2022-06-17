import { CostList } from './components/Costs/CostList'
import { NewCost } from "./components/NewCost/NewCost";
import { useState } from "react";


const INITIAL_COSTS = [
    {
        id: 1,
        date: new Date(2020, 2, 12),
        name: 'Macbook',
        price: '10000'
    },
    {
        id: 2,
        date: new Date(2020, 12, 12),
        name: 'Приставка',
        price: '6000'
    },
    {
        id: 3,
        date: new Date(2022, 2, 12),
        name: 'Канцелярия',
        price: '1000'
    },
    {
        id: 4,
        date: new Date(2021, 6, 15),
        name: 'Продукты',
        price: '3000'
    }
]

const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS)

    const addCostHandler = (cost) => {
        setCosts(previousState => {
            return [cost, ...previousState]
        })
    }

    return (
        <div className="App">
            <main className='content'>
                <NewCost onAddCost={addCostHandler}/>
                <CostList costs={ costs }/>
            </main>
        </div>
    );
}

export default App;
