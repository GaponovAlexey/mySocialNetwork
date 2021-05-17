import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';

const DatalogMan = (props) => {
    const path = '/test/' + props.id;
    return (
        <div className={s.tHeadClass}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
const DatalogWoman = (props) => {
    return (
        <div className={s.tHeadClass}>
            {props.name}
            {props.id}
        </div>
    )
}

const Test = (props) => {
    const ManData = [
        {id: 1, names: 'Aleksey' },
        {id: 2, names: 'Sergey' },
        {id: 3, names: 'Churik' },
    ];
    const WomanData = [
        { names: 'Viktoria', id: 1 },
        { names: 'Vikusya', id: 2 },
        { names: 'Vika', id: 3 },
    ];
    return (
        <div className={s.tHeadClass}>
            <div className={s.one}>
                <DatalogMan name={ManData[0].names} id={ManData[0].id} />
                <DatalogMan name={ManData[1].names} id={ManData[1].id} />
                <DatalogMan name={ManData[2].names} id={ManData[2].id} />
            </div>
            <div>
                <DatalogWoman name={WomanData[0].names} id={WomanData[0].id} />
                <DatalogWoman name={WomanData[1].names} id={WomanData[1].id} />
                <DatalogWoman name={WomanData[2].names} id={WomanData[2].id} />
            </div>
            <div>
                <DatalogWoman name={WomanData[0].names} id={WomanData[0].id} />
                <DatalogWoman name={WomanData[1].names} id={WomanData[1].id} />
                <DatalogWoman name={WomanData[2].names} id={WomanData[2].id} />
            </div>
        </div>

    )
}

export default Test;