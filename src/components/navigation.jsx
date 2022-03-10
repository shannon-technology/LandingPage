import {useEffect, useState} from "react";

export const Navigation = (props) => {

    const data = props.data;
    const [languageName, setLanguageName] = useState('English');

    useEffect(() => {
        const languageCode = languageName === 'English' ? 'zh-cn' : 'en-us'
        props.switchLanguageCode(languageCode);
    }, [languageName])

    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'/>{' '}
                        <span className='icon-bar'/>{' '}
                        <span className='icon-bar'/>{' '}
                    </button>
                    <a className='navbar-brand page-scroll' href='#page-top'>
                        {data.corpName}
                    </a>{' '}
                </div>

                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#features' className='page-scroll'>
                                {data.feature}
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='page-scroll'>
                                {data.about}
                            </a>
                        </li>
                        <li>
                            <a href='#services' className='page-scroll'>
                                {data.services}
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio' className='page-scroll'>
                                {data.gallery}
                            </a>
                        </li>
                        <li>
                            <a href='#testimonials' className='page-scroll'>
                                {data.testimonials}
                            </a>
                        </li>
                        <li>
                            <a href='#team' className='page-scroll'>
                                {data.team}
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='page-scroll'>
                                {data.contact}
                            </a>
                        </li>
                        <li>
                            <a href='#top' onClick={() => setLanguageName(languageName === 'English' ? '中文' : 'English')}
                               className='page-scroll'>
                                {languageName}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
