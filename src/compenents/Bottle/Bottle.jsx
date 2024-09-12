import PropTypes from 'prop-types';

const Bottle = ({bottle, }) => {
    const {name, img, price} = bottle;
    // console.log(bottle)
    return (
        // eslint-disable-next-line react/no-unknown-property
        <div class="card bg-base-100 w-96 shadow-xl">
        <figure>
        <img src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Bottle: {name}</h2>
          <p>Price: ${price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;