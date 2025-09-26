import React from 'react'
import './Main.scss'
import Avatar from '../../assets/img/avatar.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Юрий Мудренко</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__subtitle'>Авторские книги.</div>
                            <div className='main__subtitle'>Здесь есть, что почитать!</div>
                        </div>
                        <div className='main__column'>
                            <div className='main__photo'>
                                <img src={Avatar} alt='Avatar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main