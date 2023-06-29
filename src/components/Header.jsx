import React from 'react';
import DialogBox from './DialogBox';

import './Header.css';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <h1>
                    Food Tracker
                </h1>
                <div className="dashboard">
                    <div className="tools">

                        <i className="tools-edit fa-regular fa-pen-to-square"></i>
                        <p> &lt; Today &gt; </p>
                        <i className="tools-diary fa-solid fa-book"></i>

                    </div>
                    <div className="calories-remaining">
                        <h4>Calories Remaining</h4>
                        <div className="calories-remaining-expression">
                            <div className="calories-remaining-expression-term">
                                <p>2850</p>
                                <p>Goal</p>
                            </div>
                            <p className="calories-remaining-expression-term">-</p>
                            <div className="calories-remaining-expression-term calories-remaining-expression-center">
                                <p>22430</p>
                                <p>Food</p>
                            </div>
                            <p className="calories-remaining-expression-term">=</p>
                            <div className="calories-remaining-expression-term">
                                <p>420</p>
                                <p>Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
