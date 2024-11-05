import { Link, useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Bluto from './Bluto';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "bluto" ? (
        <Bluto />
      ) : (
        <DefaultProfile />
      )}
      <ul>
        <li>
          <Link to="/profile/popeye">Popeye</Link></li>
        <li>
          <Link to="/profile/spinach">Spinach</Link></li>
        <li>
          <Link to="/profile/bluto">Bluto</Link></li>
      </ul>
    </div>
  );
};

export default Profile;