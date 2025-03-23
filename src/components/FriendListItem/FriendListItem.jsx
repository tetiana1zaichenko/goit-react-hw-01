import "./FriendListItem.modul.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div class="cartFriend">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className="isOnline">Online</p>
      ) : (
        <p className="offline">Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
