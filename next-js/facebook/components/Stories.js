import StoryCard from "./StoryCard";

import vanDamPic from "../assets/img1.jpg";
import dolphPic from "../assets/img2.jpg";
import chuckDamPic from "../assets/img3.jpg";
import evaDamPic from "../assets/img4.jpg";

const stories = [
  {
    name: "van damme",
    src: vanDamPic,
    profile: "/",
  },
  {
    name: "dolph lundgren",
    src: dolphPic,
    profile: "/",
  },
  {
    name: "chuck norris",
    src: chuckDamPic,
    profile: "/",
  },
  {
    name: "ewa hodakowska",
    src: evaDamPic,
    profile: "/",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
