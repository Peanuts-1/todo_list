import React from "react";

export default function layout(props: React.PropsWithChildren) {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-black">To Do list</h1>
      {props.children}
    </div>
  );
}
