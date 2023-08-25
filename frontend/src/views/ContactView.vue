<template >
     <form action="https://formspree.io/f/mrgvdzoj" method="POST">
      <label>
        <div>First Name</div>
        <input class="rounded" type="text" name="firstname" id="firstname" required />
      </label>
      <label>
        <div>Surname</div>
        <input class="rounded" type="text" name="surname" id="surname" required />
      </label>
      <label>
        <div>Email</div>
        <input class="rounded" type="email" name="email" id="email" required />
      </label>
      <label>
        <div>Comment</div>
        <input class="message-box rounded" type="text" name="comment" id="comment" />
      </label>
      <div class="py-5">
        <button class="button" type="submit">Submit</button>
      </div>
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    form {
    padding: 16px;
    text-align: center;
    font-size: larger;
    display: flex;
    flex-direction: column;
    margin: 0 0.5rem;
    }

form input {
    background-color: #C2DBF8;
    color: black;
}

.message-box {
    width: auto;
  height: 160px;
  resize: none;
}
button {
    background-color: #C2DBF8;
    color: gray;
}
</style>