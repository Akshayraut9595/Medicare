import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = ({ name, about, qualification, experience }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          aliquam eius excepturi quis ipsam quibusdam natus expedita
          consectetur. Reiciendis distinctio quia similique reprehenderit sequi
          placeat temporibus nisi illo, assumenda obcaecati. Quam ex repellat,
          odio aspernatur amet quas dignissimos pariatur voluptas totam
          reiciendis, modi excepturi quis minus et saepe, adipisci molestias
          facere suscipit incidunt nihil. Nulla recusandae fugiat velit quaerat
          autem? */}
          {about}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          {qualification?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                  {/* {formateDate("09-13-2014")} - {formateDate("09-13-2016")} */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {/* PHD in Surgeon */}
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {/* New Apollo Hospital, New York. */}
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experience?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                {formateDate(item.startingDate)}-{formateDate(item.endingDate)}
                {/* {formateDate("07-04-2010")}-{formateDate("07-13-2014")} */}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {/* Sr.Surgeon */}
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {/* New Apollo Hospital, New York. */}
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
