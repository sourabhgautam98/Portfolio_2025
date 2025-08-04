export default function Experience() {
  const experiences = [
    {
      company: "WePitch",
      role: "UI/UX Developer Intern",
      period: "2024/July - 2024/Oct",
      location: "Onsite",
      skills: [
        "React",
        "HTML",
        "CSS",
        "UI/UX Design",
        "Figma",
        "Responsive Design",
      ],
      description:
        "Focused 75% on UI/UX design, including user research, wireframing, and prototyping, and 25% on frontend development using React to implement intuitive interfaces.",
      achievements: [
        "Designed user-centric interfaces for Sorting My College using Figma, focusing on clarity and ease of navigation.",
        "Developed responsive React components for the website, ensuring consistency across devices.",
        "Implemented filtering and functionalities for colleges (e.g., by location, courses, fees).",
        "Collaborated with developers to align Sorting My College designs with front-end implementation (React), ensuring pixel-perfect UI consistency.",
        "Created wireframes and high-fidelity UI designs in Figma for Rush App, a fast-paced task management app, focusing on intuitive workflows and visual consistency.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Professional Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold">{exp.role}</h2>
              <h3 className="text-xl text-gray-400">{exp.company}</h3>
              <p className="text-gray-400 italic">{exp.period}</p>
              <p className="text-gray-300 font-medium">
                Location: {exp.location}
              </p>
              <p className="mt-2 text-gray-300">{exp.description}</p>

              <div className="mt-4">
                <h4 className="text-lg font-medium">Skills Applied:</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-medium">Key Achievements:</h4>
                <ul className="mt-2 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-2 w-2 mt-2 mr-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
