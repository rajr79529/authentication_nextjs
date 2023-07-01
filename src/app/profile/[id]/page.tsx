const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <span>{params.id}</span>
    </div>
  );
};

export default UserProfile;
