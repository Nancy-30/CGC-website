import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import RajendraSir from "../images/Rajendra hegadi sir.svg";
export default function TeamMembers() {
  const TeamMembersDetails = [
    {
      id: 1,
      name: "Shreyas Bulbule",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "Website Lead",
    },
    {
      id: 2,
      name: "Shreyas Bulbule 2",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Shreyas Bulbule 3",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "Frontend Developer",
    },
    {
      id: 4,
      name: "Shreyas Bulbule 4",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "Frontend Developer",
    },
    {
      id: 5,
      name: "Shreyas Bulbule 5",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "Frontend Developer",
    },
    {
      id: 6,
      name: "Shreyas Bulbule 6",
      img: RajendraSir,
      mail: "21bcs071@iiitdwd.ac.in",
      linkedin: "https://www.linkedin.com/in/nancyadav30/",
      role: "Frontend Developer",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-neavyBlue font-bold mb-10">
        Website Team
      </h1>

      <div className="flex flex-wrap lg:gap-12 gap-8 justify-center">
        {TeamMembersDetails.map((data) => (
          <div className="shadow-md shadow-gray-400 rounded-md p-4 relative">
            <img
              src={data.img}
              alt="team member"
              className="h-[200px] lg:h-[340px] rounded-md"
            />

            <div className="md:text-xl font-medium text-neavyBlue text-center">
              {data.name}
            </div>

            <div className="flex text-center justify-center">
              <a
                href={`mailto:${data.mail}`}
                className="font-medium text-neavyBlue m-1 md:text-xl border-[2px] border-neavyBlue rounded-sm">
                <BiLogoGmail />
              </a>
              <a
                href={data.linkedin}
                className="font-medium text-neavyBlue m-1 md:text-xl border-[2px] border-neavyBlue rounded-sm ">
                <BsLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
