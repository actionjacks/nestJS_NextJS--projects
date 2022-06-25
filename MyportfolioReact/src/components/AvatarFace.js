import React from "react";
import Creepyface from "react-creepyface";

function AvatarFace() {
  return (
    <div>
      <Creepyface
        src={`./images/avatars/face.jpg`}
        className="about__profilePic"
        options={{
          hover: `./images/avatars/hover.jpg`,
          looks: [
            { angle: 0, src: `./images/avatars/look-0.jpg` },
            { angle: 45, src: `./images/avatars/look-45.jpg` },
            { angle: 90, src: `./images/avatars/look-90.jpg` },
            { angle: 135, src: `./images/avatars/look-135.jpg` },
            { angle: 180, src: `./images/avatars/look-180.jpg` },
            { angle: 225, src: `./images/avatars/look-225.jpg` },
            { angle: 270, src: `./images/avatars/look-270.jpg` },
            { angle: 315, src: `./images/avatars/look-315.jpg` },
          ],
        }}
      />
    </div>
  );
}

export default AvatarFace;
