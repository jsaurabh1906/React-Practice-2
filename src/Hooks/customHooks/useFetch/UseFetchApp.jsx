import React from "react";
import UsersList from "./usage/UsersList";
import PaginatedPosts from "./usage/PaginatedPosts";
import ImageGallery from "./usage/ImageGallery";

const UseFetchApp = () => {
  return (
    <div className="space-y-4">
      <h2>useFetch Hook</h2>
      {/*Ex1: Fetch users from jsonholder api*/}
      {/* <UsersList /> */}
      {/* Ex2: Fetch Paginated posts from jsonholder api*/}
      {/* <PaginatedPosts /> */}
      {/* Ex3: Fetch  Random Images from unsplash api */}
      <ImageGallery />
    </div>
  );
};

export default UseFetchApp;
