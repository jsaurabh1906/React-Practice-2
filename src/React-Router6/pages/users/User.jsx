import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div>User:{userid}</div>;
};

export default User;

//note: Url params with the help of  useParams
//note: useParams is a hook that gives us access to the url params
