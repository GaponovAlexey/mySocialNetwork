import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src='https://itelmenko.ru/wp-content/uploads/2015/10/react-logo.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default Profileinfo;