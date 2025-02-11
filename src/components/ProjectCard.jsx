const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View Project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;