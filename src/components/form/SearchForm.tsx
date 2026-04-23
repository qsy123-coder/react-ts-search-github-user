import React, { useState, type ChangeEvent, type FormEvent } from "react";

import { toast } from "sonner";
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      toast("You must input value");
      return;
    }
    setUserName(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
      onSubmit={handleSearch}
    >
      <Label htmlFor="search"></Label>
      <Input
        id="search"
        value={text}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="default"
        size={"lg"}
      >
        提交
      </Button>
    </form>
  );
};

export default SearchForm;
