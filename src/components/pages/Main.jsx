import React from 'react'
import './Main.scss'
import Avatar from '../../assets/img/avatar.jpg'
import BandS from '../../assets/img/bands.png'
import Vasilok from '../../assets/img/vasilok.png'
import Bankomat from '../../assets/img/bancomat.png'
import Wefromsvu from '../../assets/img/wefromsvu.png'
import Chroniki from '../../assets/img/chroniki.png'
import Daydospechov from '../../assets/img/daydospechov.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Юрий Мудренко</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__subtitle'>Авторские книги.</div>
                            <div className='main__subtitle'>Здесь есть что почитать!</div>
                        </div>
                        <div className='main__column'>
                            <div className='main__photo'>
                                <img src={Avatar} alt='Avatar' />
                            </div>
                        </div>
                    </div>
                    <div className='main__row-two'>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={BandS} alt='BandS' />
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={Vasilok} alt='Vasilok' />
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={Bankomat} alt='Bankomat' />
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={Wefromsvu} alt='Wefromsvu' />
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={Chroniki} alt='Chroniki' />
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__photo-two'>
                                <img src={Daydospechov} alt='Daydospechov' />
                            </div>
                        </div>
                    </div>
                    <div className='main__subtitle-two'>Ознакомиться с содержанием данных книг можно на сайте "Книги Юрия Мудренко".</div>
                    <div className='main__subtitle-two'>Для перехода просто нажмите на кнопку.</div>
                    <div className='main__button'>
                        <a href='https://jurijurim.github.io/authorbooks/' className='main__btn' target='_blank' rel='noreferrer'>Вам сюда!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main