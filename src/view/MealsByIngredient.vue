 <template>
  
  <h1>Test Form</h1>
   
  <div class="inputContainer">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />
  </div>

  <div class="inputContainer">
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" />
  </div>

  <div class="buttonContainer">
    <button @click="createAccount">Create</button>
    <button @click="login">Login</button>
    <button @click="seeCurrentUser">Current User</button>
    <button @click="logout">Logout</button>
  </div>
 
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import { supabase } from "../client/supabase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    async function createAccount() {
      if (!email.value || !password.value) {
        Swal.fire({
          icon: "error",
          title: "Please fill out the form",
        });
        return;
      }
      
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });

      if (error) {
        Swal.fire({
          title: "Account exists",
          text: "This account already exists",
          icon: "error",
        });
        console.log(error);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-up successful! Check your email for verification.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      }
    }

    async function login() {
      if (!email.value || !password.value) {
        Swal.fire({
          icon: "error",
          title: "Please enter email and password",
        });
        return;
      }

      console.log("Running login...");

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email or password!",
        });
        console.log(error);
      } else {
        Swal.fire("Login successful!");
        console.log(data);
      }
    }

    async function seeCurrentUser() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log("Error fetching user:", error);

      } else {
        console.log("Current user:", data);
        Swal.fire({
  title: "<strong>Attention</strong>",
  icon: "info",
  html: `
     <b>Account information</b>
     <br/>
     <pre>${JSON.stringify(data, null, 2)}</pre>
     `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i>
    OK
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
   NO
  `,
  cancelButtonAriaLabel: "Thumbs down"
});
      }
    }

    async function logout() {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error);
  
      } else {
        const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});
        console.log("User logged out");
      }
    }

    return {
      email,
      password,
      createAccount,
      login,
      seeCurrentUser,
      logout,
    };
  },
};
</script>
