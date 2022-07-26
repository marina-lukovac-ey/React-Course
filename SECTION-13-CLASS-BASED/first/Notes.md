# CLASS BASED WAY

---

## WHAT & WHY?

---

- Components are regular JS functions that **return renderable** results (TYPICALLY JSX)
- Components can also be defined as JS classes wher a `render()` method defines the to-be-rendered output
- Exception for Error Boundaries...
- < React 16.8 Class-based for state management( pre hooks )

## WORKING WITH CLASS-BASED

---

```
import {Component} from 'react';

class User extends Component{

    render(){
        return <div>{this.props}</div>
    }
}

export default User;
```

### Event and State Handling:

---

**PRO TIP: STATE IS ALWAAYS AN OBJECT**

```
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    this.setState((prev) => {
      return { showUsers: !prev.showUsers };
    }); //merging passed object with existing state
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
```

---

### SIDE-EFFECTS: COMPONENT LIFECYCLE METHODS:

1. `componentDidMount();` // useEffect( ( ) => { ... } , [ ] )
2. `componentDidUpdate();` // useEffect( ( ) => { ... }, [dependencies])
3. `componentWillUnmount();` // useEffect( ( ) => {return ()=> { ... }, [ ] }

#### UserFinder.js---

```
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //fetching data from a server:
  componentDidMount() {
    // no if check needed, runs only once
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.searchTerm !== this.state.searchTerm &&
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </div>
    );
  }
}
```

#### User.js

```
class User extends Component {
  componentWillUnmount() {
    console.log("user will unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
```

### CCONTEXT AND CLASS BASED COMPONENTS:

---

- Created and Provided the same...
- Context.Consumer can be used too...
  **LEGACY WAY:**

```
      <UsersContext.Consumer>
        {() => {
          console.log(this);
          return <Users users={this.context.users} />;
        }}
      </UsersContext.Consumer>
    );
  }
}

UserFinder.contextType = UsersContext;
```

**React > 16.x WAY:**

```
class UserFinder extends Component{
  static contextType = UserContext;

  render(){
    return <Users users={this.context.users}/>
  }
}
```

- Difference:
  useContext() => can listen to multiple contexts by using multiple useContexts, not possible with Class - Based

## ERROR BOUNDARIES == must be handled with Class-based

---

- using `componentDidCatch(){}`
- only available method on class components:
- catches an error thrown by a child component...

```
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
```
