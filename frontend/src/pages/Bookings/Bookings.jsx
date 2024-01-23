import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./Booking";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const {user,setLoading} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()


    const url =`http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=> {
        fetch(url, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('auto-care-access-token')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if (!data.error) {
            setBookings(data)
          }
          else{
            navigate('/')

          }
          
        })
       
    },[url, navigate])
    
    return (
        <div>
            <h1> My Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                Actions
                {/* <input type="checkbox" className="checkbox" /> */}
              </label>
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Service_id</th>
            <th>Status</th>
            
          </tr>
         
        </thead>
        
        <tbody>
        {
                bookings.map(booking => <Booking
                key={booking._id}
                booking={booking}
                setLoading={setLoading}
                setBookings={setBookings}
                bookings={bookings}
                
                
                />)
            }
         
         
         
         
        </tbody>
      
      </table>
    </div>
           
        </div>
    );
};

export default Bookings;