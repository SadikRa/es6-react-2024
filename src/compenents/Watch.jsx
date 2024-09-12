/* eslint-disable react/prop-types */


const Watch = ({watch}) => {
    const {brand, price} = watch;
    return (
        <div>
            <h2>Watch:{brand}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;