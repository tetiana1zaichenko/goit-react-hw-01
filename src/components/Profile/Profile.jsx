import "./Profile.modul.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="cart">
      <div>
        <img className="img" src={image} alt={image} />
        <p className="name">{name}</p>
        <p className="text">@{tag}</p>
        <p className="text">{location}</p>
      </div>

      <ul className="list">
        <li className="item">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="item">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="item">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
