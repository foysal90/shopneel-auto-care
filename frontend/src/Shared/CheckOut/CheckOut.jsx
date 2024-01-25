import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const navigate = useNavigate();
  const { _id, img, price, title } = service;
  const { user } = useContext(AuthContext);
  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const time = form.time.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const serviceDetails = {
      customerName: name,
      Service: title,
      service_id: _id,
      date,
      time,
      email,
      img,
      price: "$" + price,
      phone,
      message,
    };
    console.log(serviceDetails);
    fetch("https://shopneed-auto-care.vercel.app/bookings", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been sent",
            text: "You Will get an confirmation email soon",
            showConfirmButton: navigate("/bookings"),
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold">
        Service Details of <span className="text-indigo-700">{title}</span>
      </h1>
      <div className="hero bg-base-200">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleService} className="card-body">
            <div className=" grid grid-cols-2 gap-3 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-3 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input
                  type="time"
                  name="time"
                  placeholder="Time"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  name="amount"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-3 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <textarea
              placeholder="Your Message"
              name="message"
              className="textarea textarea-success textarea-bordered textarea-lg w-full "
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Confirm Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
