const Booking = ({ booking,setLoading }) => {
  const {
    customerName,
    img,
    Service,
    date,
    time,
    message,
    phone,
    price,
    service_id,
  } = booking;
  setLoading(false)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Service Name: {Service}!</h2>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p> Price: {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
