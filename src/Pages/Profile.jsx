import React, { useEffect, useState } from "react";

const Profile = () => {
  // Set initial views value from localStorage
  const [views, setViews] = useState(() => 
    parseInt(localStorage.getItem("profileViews") || "0", 10)
  );

  useEffect(() => {
    // Increment profileViews each time profile is viewed (component mounts)
    let v = parseInt(localStorage.getItem("profileViews") || "0", 10);
    v += 1;
    localStorage.setItem("profileViews", v);
    setViews(v);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Profile</h2>
      <p>Welcome to your profile page!</p>
      <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Profile Views: {views}
      </div>
    </div>
  );
};

export default Profile;