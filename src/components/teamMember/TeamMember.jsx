
import PropTypes from 'prop-types';

  
export function TeamMember({ name, role, description, imageSrc })  {
  return (
    <article className="w-full bg-white rounded-lg shadow-lg cursor-default">
      <div className="w-full rounded-lg h-auto relative">
        <img 
          alt={name} 
          src={imageSrc} 
          className=" inset-0  object-cover w-full h-auto" 
        />
      </div>
      <div className="pb-6">
        <div style={{ opacity: 1, transform: 'none' }}>
          <h2 className="ml-6 text-3xl text-left text-primary-600 font-bold mt-6">{name}</h2>
          <h3 className="ml-6 text-xl text-left font-bold text-secondary mb-6">{role}</h3>
          <p className="mx-6 mb-10 font-montserrat">{description}</p>
        </div>
      </div>
    </article>
  );
};


TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};


