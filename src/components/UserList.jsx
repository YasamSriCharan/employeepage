import users from "../data/users";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
          image={user.image}
        />
      ))}
    </div>
  );
};

export default UserList;
