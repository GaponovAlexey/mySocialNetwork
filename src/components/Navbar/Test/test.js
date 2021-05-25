import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';


const Test = (props) => {
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
            </div>
        )
    }
    let Man = props.state.forTest.WomanData.map(m => <DatalogMan name={m.name} id={m.id} />);
    let Woman = props.state.forTest.ManData.map(m => <DatalogWoman name={m.name} id={m.id} />);
    


    const Massiv = [
        {id: 1, name: 'Alexey', butget: 500000, avans: 10000},
        {id: 2, name: 'Inokentuy', butget: 2000, avans: 1100},
        {id: 3, name: 'Saha', butget: 59999, avans: 2000},
        {id: 4, name: 'Masha', butget: 40000, avans: 3000},
        {id: 5, name: 'Serg', butget: 5000, avans: 100},
        {id: 6, name: 'Petro', butget: 300000, avans: 1000},
        {id: 7, name: 'Lida', butget: 200000, avans: 2000},
        {id: 8, name: 'Igor', butget: 100000, avans: 1000},
        {id: 9, name: 'Maksim', butget: 2000, avans: 10000},
        {id: 10, name: 'Denis', butget: 500, avans: 1000},
    ];

    let da4a = Massiv
        .filter(person => person.butget > 3000 )
        .map(person => {
            return {
                info: `${person.name} (${person.avans})`,
                buthet: person.butget
            }
        })
        .reduce((total,person) => total + person.buthet, 0)
    console.log(da4a);


    return (
        <div className={s.tHeadClass}>
            <div className={s.one}>
                {Man}
            </div>
            <div>
                {Woman}
            </div>
            <div>
                {Woman}
            </div>
        </div>
    )
}

export default Test;