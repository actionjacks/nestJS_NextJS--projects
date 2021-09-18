import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <sectio className={classes.hero}>
      <div className={classes.image}>
        <Image
          width={300}
          height={300}
          src="/assets/my-avatar.jpg"
          alt="my avatar"
        />
      </div>
      <h1>Is me hello</h1>
      <p>
        some Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        natus est saepe consequatur maxime necessitatibus quasi! Minus eveniet
        id blanditiis delectus. Rerum, laboriosam similique assumenda quis
        quisquam quaerat cupiditate dolor.
      </p>
    </sectio>
  );
}
export default Hero;
