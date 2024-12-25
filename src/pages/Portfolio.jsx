import React from 'react';

    function Portfolio() {
      const projects = [
        {
          id: 1,
          name: 'Modern Home Construction',
          imageUrl: '/src/assets/home.svg',
          description: 'A modern home built with sustainable materials and innovative design.',
        },
        {
          id: 2,
          name: 'Commercial Building Renovation',
          imageUrl: '/src/assets/building.svg',
          description: 'Complete renovation of a commercial building, enhancing its functionality and aesthetics.',
        },
        {
          id: 3,
          name: 'Luxury Apartment Complex',
          imageUrl: '/src/assets/apartment.svg',
          description: 'A luxury apartment complex with state-of-the-art amenities and high-end finishes.',
        },
      ];

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-100 p-4 rounded shadow">
                <img src={project.imageUrl} alt={project.name} className="mb-2 rounded w-20 h-20 mx-auto" />
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Portfolio;
