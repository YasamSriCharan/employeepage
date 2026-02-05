const UserCard = ({ name, email, role, image }) => {
  return (
    <div className="card">
      
      {/* LEFT SIDE */}
      <div className="card-content">
        <h3>{name}</h3>
        <span className="role">{role}</span>
        <p className="email">{email}</p>
        <p>
          {name} is a dedicated team member working effectively as a{" "}
          {role.toLowerCase()}. This profile demonstrates reusable React
          components.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="profile-pic">
        <img src={image} alt={name} />
      </div>

    </div>
  );
};

export default UserCard;
