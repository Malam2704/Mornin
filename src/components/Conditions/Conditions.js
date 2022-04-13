import React from 'react';

const Conditions = (props) => {
    var weatherLogo;

    return (
        <div>
            {(props.responseObj.cod === 200)?
                <div className="Wrapper">
                    <figure>
                        <img src="../images/1.png" alt='clouds' width="200px"/>
                    </figure>
                    <div>
                        <p><strong>{props.responseObj.name}</strong></p>
                        <p>It is currently {Math.round(props.responseObj.main.temp)} degrees Farenheight out with {props.responseObj.weather[0].description}.</p>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;