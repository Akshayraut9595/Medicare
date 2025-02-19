import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import DoctorCard from "../../components/Doctors/DoctorCard";

const MyBooking = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/myappointments`);
  console.log(appointments, "Appointment");
  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
      {
        !loading && !error && appointments.length===0 && <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">You did not have any booking</h2>
      }
    </div>

  );
};

export default MyBooking;
