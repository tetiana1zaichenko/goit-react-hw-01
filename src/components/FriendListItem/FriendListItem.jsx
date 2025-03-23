import style from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.cartFriend}>
      <img src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
      {isOnline ? (
        <p className={style.isOnline}>Online</p>
      ) : (
        <p className={style.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
