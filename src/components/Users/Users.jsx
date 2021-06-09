import React from 'react';
import stules from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/24/756209687115249.jpg',
                followed: true, fullName: 'Alexey', status: "i'm a boss", location: { city: 'USA', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/24/756209687115249.jpg',
                followed: false, fullName: 'Viktor', status: "i'm a studen", location: { city: 'Russia', country: 'Korea' }
            },
            {
                id: 3,
                photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/24/756209687115249.jpg',
                followed: false, fullName: 'Sergey', status: "i'm a politic", location: { city: 'Ukraine', country: 'USA' }
            },
            {
                id: 4,
                photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/24/756209687115249.jpg',
                followed: true, fullName: 'Masha', status: "i'm a samurai", location: { city: 'UK', country: 'Unete Kindom' }
            },
            {
                id: 5,
                photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/24/756209687115249.jpg',
                followed: false, fullName: 'Inokentiy', status: "i'm a cherry", location: { city: 'Moldowa', country: 'Russia' }
            },]);
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={stules.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            
        }
    </div>
}

export default Users;