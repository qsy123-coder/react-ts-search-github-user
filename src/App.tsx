import SearchForm from "./components/form/SearchForm";
import ProfileUser from "./components/user/ProfileUser";
import { useState } from "react";
const App = () => {
  const [userName, setUserName] = useState("Nike");
  return (
    <main className="max-w-7xl mx-auto p-8 py-12">
      <SearchForm
        userName={userName}
        setUserName={setUserName}
      />
      <ProfileUser userName={userName} />
    </main>
  );
};
export default App;
