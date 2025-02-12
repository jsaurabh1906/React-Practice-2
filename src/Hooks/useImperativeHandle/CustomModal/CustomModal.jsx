import React, { forwardRef, useImperativeHandle, useState } from "react";

const CustomModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setIsOpen(true);
    },
    closeModal: () => {
      setIsOpen(false);
    },
  }));
  return (
    <>
      {isOpen && (
        <div className="fixed top-[30%] mx-20 md:mx-40 max-w-2/5 bg-indigo-100 p-4 border-2 border-indigo-700 rounded-lg shadow-lg ">
          <h3 className="text-md text-indigo-600 font-bold">Modal Content</h3>
          <hr className="border-1 border-indigo-400" />{" "}
          <p>
            This is Modal Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et adipisci facilis soluta labore architecto cum officia vel
            laboriosam ad hic. Quibusdam, culpa non harum odit alias in pariatur
            sapiente aperiam impedit dolores at repellat mollitia, iusto nobis
            inventore dicta eum perferendis ratione? Unde molestias corrupti
            repellendus nostrum velit cupiditate saepe.
          </p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
});

export default CustomModal;
