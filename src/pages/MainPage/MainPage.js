import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';

import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';



function MainPage() {
    return (
        <div className="main-page">
            <div>
                <Header />
            </div>
            <main >
                <aside className="main-page__favorites">
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                    <div>
                        <Favorites />
                    </div>
                </aside>
            </main>
        </div>
    )
}


export default MainPage;