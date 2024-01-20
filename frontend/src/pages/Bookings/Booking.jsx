const Booking = ({ booking, setLoading }) => {
  const {
    customerName,
    img,
    Service,
    email,
    date,
    time,
    message,
    phone,
    price,
    service_id,
  } = booking;
  setLoading(false);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              { img && <img src={img} alt="Avatar" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {Service}
       
      </td>
      <td>{date}</td>
      <td>{time}pm</td>
      <td>{price}</td>
      <td>{service_id}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default Booking;
