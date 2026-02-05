import Header from "./components/Header";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>

      <p className="description">
        Welcome to the User Information Dashboard. This application demonstrates
        a modular React architecture using reusable components and modern ES6
        features. Each card below represents a team member with their profile
        details.
      </p>

      <UserList />
    </div>
  );
}

export default App;
