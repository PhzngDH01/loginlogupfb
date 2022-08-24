function signup() {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    username: username,
    email: email,
    password: password,
  };
  let json = JSON.stringify(user);
  localStorage.setItem(email, json);
  if (username == "" || email == "" || password == "") {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Registration failed !",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    // check xem email da trung trong local storage

    // ở trong local storage phải có một mảng gồm nhiều user

    let newUser = {
      username: username,
      password: password,
      email: email,
    };

    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [];
    }

    let findIndex = -1;
    for (let i = 0; i <= users.length - 1; i = i + 1) {
      if (email === users[i].email) {
        findIndex = i;
      }
    }

    if (findIndex < 0) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      Swal.fire({
        position: "centent",
        icon: "success",
        title: "Sign Up Success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "centent",
        icon: "warning",
        title: " Email already exists!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}

function signin() {
  event.preventDefault();
  let email = document.getElementById("email2").value;
  let password = document.getElementById("password2").value;
  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  if (!user || email == "") {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Email or Password is incorrect",
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (email == data.email && password == data.password) {
    // alert("Đăng nhập thành công");
    Swal.fire({
      position: "centent",
      icon: "success",
      title: "Logged in successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.href = "https://www.youtube.com/";
  } else {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Email or Password is incorrect",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
