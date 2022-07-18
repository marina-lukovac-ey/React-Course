import styles from "./UsersList.module.css";
import Card from "../UI/Card";

function UsersList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => (
          <li
            key={`${index}${Math.random()}`}
          >{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
