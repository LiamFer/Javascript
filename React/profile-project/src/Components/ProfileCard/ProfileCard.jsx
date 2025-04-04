import Button from "../Button/Button";
import styles from "./ProfileCard.module.css"

function ProfileCard({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <>
      <div className={styles.card}>
        <img src={avatar} alt={name} />
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <Button text="Github" link={githubUrl}/>
        <Button text="Linkedin" link={linkedinUrl}/>
        <Button text="Twitter" link={twitterUrl}/>
      </div>
    </>
  );
}

export default ProfileCard;
