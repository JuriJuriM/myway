import React from 'react'
import './Second.scss'
import Acne from '../../assets/png/acne.png'
import Elusive from '../../assets/png/elusive.png'
import Womens from '../../assets/png/womens.png'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__title'>Юрий Мудренко</div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__subtitle'>Рассказы</div>
                        </div>
                        <div className='second__column'>
                            <div className='second__text'>Прыщ</div>
                            <div className='second__photo'>
                                <img src={Acne} alt='Acne' />
                            </div>
                            <div className='second__button'>
                                <a href='https://jurijurim.github.io/acne/' className='main__btn' target='_blank' rel='noreferrer'>Вам сюда</a>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__text'>Неуловимый</div>
                            <div className='second__photo'>
                                <img src={Elusive} alt='Elusive' />
                            </div>
                            <div className='second__button'>
                                <a href='https://jurijurim.github.io/elusive/' className='main__btn' target='_blank' rel='noreferrer'>Вам сюда</a>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__text'>Женская логика</div>
                            <div className='second__photo'>
                                <img src={Womens} alt='Womens' />
                            </div>
                            <div className='second__button'>
                                <a href='https://jurijurim.github.io/womenlogic/' className='main__btn' target='_blank' rel='noreferrer'>Вам сюда</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second