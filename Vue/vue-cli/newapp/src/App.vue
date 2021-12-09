<template>
  <div id="task">
    <ActiveUser :username="username" :age="age" />
    <UserData @get-username="usernameInput" @get-age="ageInput" />
  </div>
  <section id="example">
    <header><h1>List</h1></header>
    <NewFriend @add-contact="addNewFriend" />
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
// task components
import ActiveUser from "./components/task/ActiveUser.vue";
import UserData from "./components/task/UserData.vue";
//
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  name: "App",
  components: { FriendContact, NewFriend, ActiveUser, UserData },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "jacek",
          phone: "661812983",
          email: "jacek@o2.pl",
          isFavorite: false,
        },
        {
          id: 2,
          name: "jacek2",
          phone: "661812983",
          email: "jacek@o2.pl",
          isFavorite: false,
        },
        {
          id: 3,
          name: "jacek3",
          phone: "661812983",
          email: "jacek@o2.pl",
          isFavorite: false,
        },
      ],
      // task
      username: "",
      age: "",
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const getFriend = this.friends.find((friend) => friend.id === friendId);
      getFriend.isFavorite = !getFriend.isFavorite;
      console.log(getFriend.isFavorite);
    },
    addNewFriend(name, phone, email) {
      const newFriendContact = {
        id: new Date(),
        name,
        phone,
        email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      console.log(friendId);
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
    // task
    usernameInput(value) {
      this.username = value;
    },
    ageInput(value) {
      this.age = value;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#example {
  display: none;
}
html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
