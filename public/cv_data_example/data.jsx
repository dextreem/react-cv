const cvData = {
  name: "Alice Musterman",
  picture: "/cv_data/profile.jpg",
  address: "Mustercity, Mustercountry",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/..." },
    { name: "GitHub", url: "https://github.com/..." },
    { name: "Email", url: "mailto:alice@musterman.com" },
  ],
  aboutMe: {
    title: "Some Workds about me",
    text: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum
        dolorem laudantium hic repellat voluptas, quibusdam dolore pariatur, at
        corrupti suscipit mollitia cum maxime minima non debitis dolores qui
        officiis.
      </>
    ),
  },
  sections: [
    {
      name: "Work Experiences",
      content: [
        {
          title: "Latest Experience",
          subTitle: "Marketing",
          when: "since 10/2019",
          where: "Some Company, Munich",
          info: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Nemo, eius. Tenetur impedit in accusantium temporibus sint harum eaque eius cumque hic illum fuga, soluta iure ullam, exercitationem repellendus molestias dolorem!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,",
            "Dignissimos animi, officiis dicta odio culpa eaque! Rerum corporis repudiandae hic error!",
            "Praesentium deserunt voluptates eum, perferendis quae illum enim consectetur odit?",
          ],
        },
        {
          title: "Previous Experience",
          subTitle: "Sales",
          when: "10/2018 - 09/2019",
          where: "Some other Company, Berlin",
          info: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Nemo, eius. Tenetur impedit in accusantium temporibus sint harum eaque eius cumque hic illum fuga, soluta iure ullam, exercitationem repellendus molestias dolorem!",
            "Dignissimos animi, officiis dicta odio culpa eaque! Rerum corporis repudiandae hic error!",
            "Praesentium deserunt voluptates eum, perferendis quae illum enim consectetur odit?",
          ],
        },
        {
          title: "First Experience",
          subTitle: "Sales",
          when: "10/2014 - 09/2019",
          where: "First Company, Hamburg",
          info: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,",
            "Dignissimos animi, officiis dicta odio culpa eaque! Rerum corporis repudiandae hic error!",
            "Praesentium deserunt voluptates eum, perferendis quae illum enim consectetur odit?",
          ],
        },
      ],
    },
    {
      name: "Education",
      content: [
        {
          title: "MSc",
          subTitle: "Some Fancy Science",
          when: "05/2016 - 07/2018",
          where: "My University, London",
          info: [
            <>
              Thesis:{" "}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                My thesis Title
              </a>
            </>,
            "Modules included: Making up stuff, rule the world.",
          ],
        },
        {
          title: "BSc",
          subTitle: "Some Fancy Science",
          when: "10/2014 - 04/2016",
          where: "My University, London",
          info: ["Thesis: How do people learn?", "Modules included: Hard work"],
        },
      ],
    },
    {
      name: "Skills",
      content: [
        {
          title: "Languages",
          info: ["German (native), English (native), Chinese (beginner)"],
        },
        {
          title: "Tools",
          info: ["Excel, Word, Powerpoint"],
        },
      ],
    },
    {
      name: "Interests",
      content: [
        {
          id: "interests",
          info: ["Walk", "Sleep", "Eat", "Repeat"],
        },
      ],
    },
  ],
};

export default cvData;
