import React from "react";
import andrew from "src/assets/andrew.png";
import catherine from "src/assets/catherine.png";
import john from "src/assets/john.png";
import styles from "./Community.module.css";

const persons = [
  {
    id: 1,
    name: "Andrew Symmonds",
    profession: "ML Engineer @IBM",
    image: andrew,
  },
  {
    id: 1,
    name: "Catherine Teressa",
    profession: "Product Designer @Google",
    image: catherine,
  },
  {
    id: 1,
    name: "John livingstone",
    profession: "System Analyst @AWS",
    image: john,
  },
];

const Community = () => {
  return (
    <div className={styles.root}>
      <h1>FROM THE CLIVE ACADEMY COMMUNITY</h1>
      <h4>1Million + people are already learning on Clive Academy</h4>
      <div className={styles.members}>
        {persons.map((person) => (
          <div>
            <img src={person.image} alt="Andrew" />
            <p>{person.name}</p>
            <p className={styles.profession}>{person.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
