import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Form() {
  return (
    <div className="flex gap-2">
      <Input />
      <Button>Save</Button>
    </div>
  );
}
