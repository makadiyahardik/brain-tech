import React from 'react';
import ImageCircle from '../../atoms/ImageCircle/ImageCircle';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';

const TeamCard = ({ role, pic, name, index }) => {
  return (
    <div className="flex flex-col justify-center items-center  " key={index}>
      <div className="team-member">
  
        <ImageCircle src={pic} alt={name}  className="w-[12rem] h-[12rem]"/>
      </div>

      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <h4 className="my-3 ">{name}</h4>
        <p className="text-muted text-[#6c757d] opacity-100 text-center flex items-center justify-center mx-auto">
          {role}
        </p>
        <div className="flex items-center space-x-3">
          <div>
            {' '}
            <SocialMediaIcon label="Parveen Anand Twitter Profile" className="fab fa-twitter"/>

          
          </div>
          <div>
            {' '}
           
            <SocialMediaIcon label="Parveen Anand Twitter Profile" className="fab fa-facebook-f"/>
          </div>
          <div>
          
            <SocialMediaIcon label="Parveen Anand Twitter Profile" className="fab fa-linkedin-in"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
