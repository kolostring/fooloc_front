const anonymousSection = String.raw`
  <a class="btn ml-auto" id="log-in" href="log-in.html">Log-in</a>
  <a class="accent btn" href="sign-up.html">Sign-up</a>
`;

const userMenu = (userName, email, profilePic) => String.raw`
  <div style="width: 5rem;" class="ml-auto drop-down">
    <div class="flex w-full">
      <button style="height: 3.8rem" class="user ml-auto">
        </button>
    </div>

    <div style="right: 100%; top: 0%;" class="drop-down-menu-wrapper rounded">
      <div style="width: 18rem">
        <div style="display: grid; grid-template-columns: auto 1fr; padding: 1rem; gap: 0.2rem 0.8rem">
          <div style="height: 3rem; grid-row: 1/4" class="user">
            ${profilePic !== undefined ? `<img src=${profilePic}/>` : ""}
          </div>
          <p> <b>${userName}</b></p>
          <p>${email}</p>
        </div>
        <hr/>
        <a href="business.html">Manage Business</a>
        <a href="product.html">Manage Products</a>
        <hr/>
        <a href="#" class="danger">Log-out</a>
      </div>
    </div>
  </div>
`;

export function loadNavBar(loginToken) {
  const slots = document.querySelectorAll(".slot__navbar");

  slots.forEach((slot) => {
    slot.innerHTML = String.raw`<a href="/" class="logo">fooloc</a>
      
      <button class="big-btn">Explore</button>

      ${
        loginToken !== undefined
          ? userMenu("john", "johndoe@gmail.com")
          : anonymousSection
      }
     `;
  });
}
