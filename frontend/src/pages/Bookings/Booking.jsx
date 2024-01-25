import Swal from "sweetalert2";
import { FaDeleteLeft } from "react-icons/fa6";
import { useState } from "react";
const Booking = ({ booking, setLoading, bookings, setBookings }) => {
  const {
    customerName,
    img,
    _id,
    Service,
    email,
    date,
    time,
    message,
    phone,
    price,
    service_id,
    status,
  } = booking;
  // setLoading(false);
  // const [confirm,setConfirm] = useState("")

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://shopneed-auto-care.vercel.app/bookings/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: `${Service} Service has been removed from Your Order`,

                  imageUrl: `${img}`,
                  imageWidth: 200,
                  imageHeight: 200,
                  imageAlt: { Service },
                });
                const remaining = bookings.filter((book) => book._id !== _id);
                setBookings(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  const handleUpdate = (id) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shopneed-auto-care.vercel.app/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              //status

              const remainingBooking = bookings.filter(
                (book) => book._id !== id
              );
              const updatedBooking = bookings.find((book) => book._id === id);
              updatedBooking.status = "Confirm";
              const newBookings = [updatedBooking, ...remainingBooking];
              setBookings(newBookings);
            }
          });

        Swal.fire({
          title: `${Service} Service has been Updated`,
          icon: "success",
          imageUrl: `${img}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: { Service },
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // setLoading(false);
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)}>
          <FaDeleteLeft className="w-8 h-6 text-red-500" />
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Avatar" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{Service}</td>
      <td>{date}</td>
      <td>{time}pm</td>
      <td>{price}</td>
      <td>{service_id}</td>
      <th>
        {status === "Confirm" ? (
          <span className="text-xl font-bold text-purple-800">Confirmed</span>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default Booking;
