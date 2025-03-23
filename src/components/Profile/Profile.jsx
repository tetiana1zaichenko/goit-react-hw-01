import style from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.cart}>
      <div>
        <img className={style.img} src={image} alt={image} />
        <p className={style.name}>{name}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
