import { loadNavBar } from "./navbar.js";

const sessionToken = sessionStorage.getItem("fooloc_token");

if(sessionToken === undefined){
  loadNavBar(undefined);
}
else{
  const response = await fetch("http://127.0.0.1:8000/api/account/session", {
    method: "GET",
    headers: {
      Authorization: "Token " + sessionToken,
    },
  })

  const data = await response.json()
  console.log(response);

  if(response.ok){
    console.log(data);
    loadNavBar(data);
  }
  else{
    loadNavBar(undefined);
  }
  
}

