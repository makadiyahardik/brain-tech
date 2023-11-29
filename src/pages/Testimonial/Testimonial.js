import React from 'react';
import TeamCard from '../../Components/TeamCard/TeamCard';

const Testimonial = () => {
  const teamDetails = [
    {
      id: 1,
      pic: '../../assets/images/team/1.jpg',
      name: 'Parveen Anand',
      role: 'Lead Designer',
    },
    {
      id: 2,
      pic: '../../assets/images/team/2.jpg',
      name: 'Diana Petersen',
      role: 'Lead Marketer',
    },
    {
      id: 3,
      pic: '../../assets/images/team/3.jpg',
      name: 'Larry Parker',
      role: 'Lead Developer',
    },
  ];
  return (
    <div className="  bg-light mt-[4rem] md:p-12 p-6 px-5" id='testimonial'>
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>

      <div
        className="flex mt-[6rem] md:max-w-[1240px]  text-center  w-full mx-auto justify-between items-center md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-12
       "
      >
        {teamDetails&&teamDetails?.map((item, index) => {
          return (
            <TeamCard
              pic={item.pic}
              role={item.role}
              name={item.name}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
