<template>
  <div>
    <form @submit.prevent="addUser">
      <label for="firstName">Firstname:</label>
      <input v-model="newUser.firstName" type="text" id="firstName" required>

      <label for="lastName">Lastname:</label>
      <input v-model="newUser.lastName" type="taxt" id="lastName" required>
      
      <label for="userAge">Age:</label>
      <input v-model="newUser.userAge" type="number" id="userAge" required>

      <label for="Gender">Gender:</label>
      <input v-model="newUser.Gender" type="text" id="Gender" required>

      <label for="userRole">Role:</label>
      <input v-model="newUser.userRole" type="text" id="userRole" required>

      <label for="emailAdd">Email:</label>
      <input v-model="newUser.emailAdd" type="text" id="emailAdd" required>

      <label for="userPass">Password:</label>
      <input v-model="newUser.userPass" type="text" id="userPass" required>

      <label for="userProfile">Image Url:</label>
      <input v-model="newUser.userprofile" type="text" id="userProfile" required>

      <button type="submit">Add User</button>
    </form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        firstName: '',
        lastName: '',
        userAge: 0,
        Gender: '',
        userRole: '',
        emailAdd: '',
        userPass: '',
        userprofile: '',
      },
    };
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch('addNewUser', this.newUser);
        this.newUser = {
            firstName: '',
            lastName: '',
            userAge: 0,
            Gender: '',
            userRole: '',
            emailAdd: '',
            userPass: '',
            userprofile: '',
        };
      } catch (error) {
        console.error('Failed to add user:', error);
      }
    },
  },
};
</script>
