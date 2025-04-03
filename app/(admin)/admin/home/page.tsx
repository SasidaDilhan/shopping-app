"use client";


const Page = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user.id); // { id, name, email }

  return (
    <div>
      <h1>Home</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Page;
