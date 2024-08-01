import React from 'react';

const Nonveg = () => {
    return (
        <div className="veg">
            <h1>Non-Veg Menu</h1>
            <div className="veg-items">
                <div className="veg-item">
                    <img src="/biryani.jpg" alt="Veg Dish 1" style={{ width: '200px', height: '100px' }} />
                    <h3><u>*Biryani*</u></h3>
                </div>
                <div className="veg-item">
                    <img src="/karahi.jpg" alt="Veg Dish 2" style={{ width: '200px', height: '100px' }} />
                    <h3><u>*Karahi*</u></h3>
                </div>
                <div className="veg-item">
                    <img src="/pancake.jpg" alt="Veg Dish 2" style={{ width: '200px', height: '100px' }} />
                    <h3>*PanCake*</h3>
                </div>
            </div>
        </div>
    );
};

export default Nonveg;
