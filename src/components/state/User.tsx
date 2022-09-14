import { useState } from "react";

type AuthUser1 = {
  name1: string;
  email1: string;
};

type AuthUser2 = {
    name2: string;
    email2: string;
  };

export const User = () => {
  const [user, setUser] = useState<AuthUser1 | null>(null);
  const [user2, setUser2] = useState<AuthUser2>({} as AuthUser2);


  const handleLogin1 = () => {
    setUser({
      name1: "sohil",
      email1: "sohil@gmail.com",
    });
  };
  const handleLogin2 = () => {
    setUser2({
      name2: "sohil2",
      email2: "sohil2@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin1}>Login1</button>
      <button onClick={handleLogout}>Log out</button>
      <div>User name is {user?.name1}</div>
      <div>User email is {user?.email1}</div>
      <button onClick={handleLogin2}>Login2</button>
      <div>User2 name - {user2.name2} email- {user2.email2}</div>
    </div>
  );
};
