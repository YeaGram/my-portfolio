function ThemeManager() {
  const button = document.getElementById("theme-btn");
  const themeIcon = document.getElementById("theme-icon");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.className = "light";
      localStorage.setItem("theme", "light");
      setIcon(themeIcon, "light");
    } else if (theme === "light") {
      document.body.className = "dark";
      localStorage.setItem("theme", "dark");
      setIcon(themeIcon, "dark");
    }
  });

  window.addEventListener("load", function () {
    let theme = localStorage.getItem("theme");

    if (!theme) {
      theme = "dark";
      localStorage.setItem("theme", theme);
      setIcon(themeIcon, theme);
    }
    setIcon(themeIcon, theme);
    document.body.className = theme;
  });

  function setIcon(target, val) {
    if (val === "dark") {
      target.src = "asset/icon/icon-dark.svg";
    } else if (val === "light") {
      target.src = "asset/icon/icon-light.svg";
    }
  }
}
ThemeManager();

function adjustMainContainerHeight() {
  const navBar = document.querySelector("nav ul").offsetHeight;
  const mainContainer = document.querySelector("main .main-container");

  mainContainer.style.paddingTop = navBar + "px";
}
adjustMainContainerHeight();
// function for managing mobile devices

function SocialIcons() {
  const IconContainer = document.querySelector(".social");
  const nodelist = document.querySelectorAll(".social a");

  nodelist.forEach((item, i) => {
    const dot = document.createElement("span");
    if (i !== 0) {
      IconContainer.insertBefore(dot, item);
    }
  });
}
SocialIcons();

function OnMobileDevices() {
  const navListContainer = document.querySelector("nav ul li:last-child");
  const navList = document.getElementById("nav-items");
  const mobileHamburgerButton = document.getElementById("hamburger");

  mobileHamburgerButton.addEventListener("click", (e) => {
    navListContainer.classList.toggle("active");
  });
}
OnMobileDevices();

function ActivePage() {
  const items = document.querySelectorAll("#nav-items button");
  const contentContainer = document.querySelector(".content-wrapper");
  const meContainer = document.querySelector(".content-me");
  const activeState = document.querySelector("#nav-items button.active");

  const descContainer = document.createElement("div");
  descContainer.setAttribute("class", "content-desc");
  contentContainer.appendChild(descContainer);

  // initial state
  window.addEventListener("DOMContentLoaded", setActivePage(activeState));

  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.id === descContainer.dataset.content) return;
      descContainer.innerHTML = "";
      document
        .querySelector("#nav-items button.active")
        .classList.remove("active");
      this.classList.add("active");
      setActivePage(item);
    });
  });

  function setActivePage(activeNav) {
    const socialFigure = document.querySelector(".social");

    meContainer.classList.remove("full");
    if (activeNav.id === "about") {
      About(descContainer, "animate");
      descContainer.setAttribute("data-content", "about");
    }
    if (activeNav.id === "project") {
      MyProject(descContainer, "animate");
      descContainer.setAttribute("data-content", "project");
    }
    if (activeNav.id === "contact") {
      descContainer.setAttribute("data-content", "contact");
      Contact(descContainer, "animate");
      meContainer.classList.add("full");
    }

    // MyProjectPage
    function MyProject(parent, animation) {
      contentContainer.appendChild(parent);
      if (animation !== null || animation !== undefined) {
        parent.classList.remove(animation);
        void parent.offsetWidth;
        parent.classList.add(animation);
      }

      const myProject = [
        {
          projectName: "WhatsApp-Bot",
          url: "#",
          description: "bot for whatsaapp",
        },
        {
          projectName: "GameDatabase",
          url: "#",
          description: "about your game",
        },
        {
          projectName: "Portfolio",
          url: "#",
          description: "just my portfolio",
        },
      ];

      parent.innerHTML = `
      
          <h3>Some Project</h3>
          <div class="project-description">
            <p>list of my project.</p>
            <p>i have many project, but ill just take mybest project in this area.</p>
          </div>
          <ul class="project-list">
          ${myProject
            .map((project) => {
              return `<li><a href="${project.url}">${project.projectName}</a></li>`;
            })
            .join("")}
          </ul>
        <a href="#">... click to view details.</a>
      
      </div>`;
    }

    // AboutPage
    function About(parent, animation) {
      contentContainer.appendChild(parent);
      if (animation !== null || animation !== undefined) {
        parent.classList.remove(animation);
        void parent.offsetWidth;
        parent.classList.add(animation);
      }

      parent.innerHTML = `
      <h3>Im Working as Web Developer.</h3>
        <div>
          <p>i have one year experience on frontend web developer.</p>
          <p>
            i also have skill on video editing, graphic design and photo
            editor.
          </p>
        </div>
      <a href="#">... click to view details.</a>`;
    }

    // contactPage
    function Contact(parent, animation) {
      contentContainer.appendChild(parent);
      if (animation !== null || animation !== undefined) {
        parent.classList.remove(animation);
        void parent.offsetWidth;
        parent.classList.add(animation);
      }

      parent.innerHTML = `
      
      <div class="contact-description">
        <div class="contact-header"> 
          <h3>Contact</h3>
          <p>Any Message?</p>
        </div
       <div>
       <div>
       <p>Found Me On..</p>
       <ul class="contact-social">
         <li>  
           <a href="#">

             <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15.6713 0.62664C15.5628 0.36483 15.3534 0.16452 15.0959 0.0762699L15.094 0.0756398L15.0922 0.0750099L15.0884 0.0737398L15.0805 0.0711399L15.0636 0.0658298C15.0518 0.0622298 15.039 0.0585597 15.0252 0.0548697C14.9976 0.0474897 14.966 0.0400699 14.9305 0.0331899C14.8593 0.0194099 14.7728 0.00786981 14.6708 0.00278981C14.466 -0.00741019 14.2037 0.00857978 13.8817 0.0805398C13.3447 0.20053 12.6476 0.47464 11.7724 1.03631C11.7152 1.07302 11.6572 1.11096 11.5985 1.15016C11.5397 1.13561 11.4809 1.12155 11.422 1.108C9.8261 0.74083 8.1742 0.74083 6.57825 1.108C6.51933 1.12156 6.46049 1.13561 6.40173 1.15017C6.34298 1.11096 6.28499 1.07302 6.22775 1.03631C5.35163 0.47435 4.65291 0.20029 4.11455 0.0803898C3.79179 0.00851981 3.52891 -0.0073802 3.324 0.0027798C3.22186 0.0078398 3.13536 0.0193098 3.06428 0.0329898C3.0288 0.0398198 2.99732 0.0471699 2.96983 0.0544699C2.95609 0.0581199 2.94336 0.0617598 2.93163 0.0653098L2.91481 0.0705598L2.90698 0.0731099L2.9032 0.0743697L2.90135 0.0749899L2.89952 0.0756098C2.63979 0.16397 2.42877 0.36623 2.32049 0.63061C1.91716 1.6154 1.8101 2.70134 2.00435 3.74306C2.01379 3.79367 2.02394 3.84418 2.0348 3.89458C1.99316 3.95373 1.9527 4.01368 1.91343 4.07439C1.30771 5.01089 0.985533 6.12791 1.00063 7.27493C1.00208 9.7315 1.71965 11.4139 2.9332 12.4965C3.62014 13.1093 4.41743 13.4844 5.21873 13.7208C5.31042 13.7479 5.40217 13.7731 5.49381 13.7967C5.48043 13.8432 5.46796 13.8901 5.45641 13.9373C5.40789 14.1357 5.37572 14.3394 5.36083 14.5461C5.35948 14.5648 5.35863 14.5835 5.35829 14.6022L5.32436 16.421L5.32417 16.4407C5.32417 16.4464 5.32417 16.4521 5.32417 16.4577C5.26262 16.473 5.20005 16.4843 5.13682 16.4916C4.942 16.5141 4.74467 16.4977 4.5561 16.4434C4.36752 16.3891 4.19127 16.2979 4.03752 16.1749C3.88377 16.0519 3.75553 15.8994 3.66031 15.7261L3.6505 15.7087C3.38836 15.2535 3.02627 14.8639 2.59142 14.5695C2.15656 14.275 1.6604 14.0836 1.14047 14.0099C0.593653 13.9324 0.0875332 14.3128 0.0100232 14.8597C-0.0674868 15.4065 0.312963 15.9126 0.859783 15.9901C1.07816 16.0211 1.28688 16.1015 1.47012 16.2256C1.65121 16.3482 1.80277 16.5103 1.9134 16.7C2.1346 17.0992 2.43165 17.4514 2.78801 17.7365C3.14753 18.0242 3.56032 18.2379 4.00272 18.3653C4.43348 18.4893 4.88392 18.5291 5.32949 18.4825C5.33039 18.7224 5.33103 18.9065 5.33103 19C5.33103 19.5523 5.75521 20 6.27847 20H11.7558C12.279 20 12.7032 19.5523 12.7032 19V15.2095C12.729 14.7802 12.685 14.3499 12.5738 13.9373C12.5585 13.8805 12.5419 13.824 12.5241 13.7679C12.5838 13.753 12.6435 13.7373 12.7032 13.7208C13.5277 13.4937 14.3513 13.1224 15.0588 12.4983C16.2791 11.4217 16.9982 9.7379 16.9996 7.27493C17.0147 6.12791 16.6925 5.01089 16.0868 4.07439C16.0475 4.01358 16.007 3.95354 15.9652 3.89429C15.976 3.84399 15.9861 3.79358 15.9955 3.74306C16.1893 2.69934 16.0795 1.61142 15.6713 0.62664Z"/>
             </svg>
             

           </a>
           <p>Yeagram.github.com</p>
         </li>
         <li>
           <a href="#">

           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M22.5 4.36H1.5V19.63H22.5V4.36Z" fill="none" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M18.68 4.36L12 9.14L5.32001 4.36" fill="none" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M22.5 6.27L12 13.91L1.5 6.27" fill="none" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M18.68 4.36H5.32001" fill="none" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M18.68 9.05V19.64H5.32001V9.05" fill="none" stroke-width="1.91" stroke-miterlimit="10"/>
           </svg>
           


           </a>
           <p>dms.persacc@gmail.com</p>
         </li>
         <li>
           <a href="#">


           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_23_19)">
           <path d="M18.68 1.5H5.32C3.21027 1.5 1.5 3.21027 1.5 5.32V18.68C1.5 20.7897 3.21027 22.5 5.32 22.5H18.68C20.7897 22.5 22.5 20.7897 22.5 18.68V5.32C22.5 3.21027 20.7897 1.5 18.68 1.5Z" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M12 16.77C14.6344 16.77 16.77 14.6344 16.77 12C16.77 9.3656 14.6344 7.23 12 7.23C9.36561 7.23 7.23001 9.3656 7.23001 12C7.23001 14.6344 9.36561 16.77 12 16.77Z" stroke-width="1.91" stroke-miterlimit="10"/>
           <path d="M18.2 7.23C18.9898 7.23 19.63 6.58976 19.63 5.8C19.63 5.01023 18.9898 4.37 18.2 4.37C17.4102 4.37 16.77 5.01023 16.77 5.8C16.77 6.58976 17.4102 7.23 18.2 7.23Z" />
           </g>
           <defs>
           <clipPath id="clip0_23_19">
           <rect width="24" height="24" />
           </clipPath>
           </defs>
           </svg>
           

           </a>
           <p>@dms_js</p>
         </li>
         <li>
           <a href="#">

           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_23_13)">
            <path d="M22.5 1.48H0.5V22.52H22.5V1.48Z" stroke-width="1.91" stroke-miterlimit="10"/>
            <path d="M10.07 18.7V12.48C10.0687 12.0405 10.1541 11.6052 10.3214 11.1988C10.4886 10.7924 10.7344 10.423 11.0447 10.1118C11.355 9.80059 11.7236 9.55368 12.1295 9.3852C12.5354 9.21672 12.9705 9.13 13.41 9.13C14.2985 9.13 15.1506 9.48295 15.7788 10.1112C16.407 10.7394 16.76 11.5915 16.76 12.48V18.7" stroke-width="1.91" stroke-miterlimit="10"/>
            <path d="M6.23999 8.17V18.7" stroke-width="1.91" stroke-miterlimit="10"/>
            <path d="M6.24 7.22C6.77019 7.22 7.2 6.7902 7.2 6.26C7.2 5.72981 6.77019 5.3 6.24 5.3C5.7098 5.3 5.28 5.72981 5.28 6.26C5.28 6.7902 5.7098 7.22 6.24 7.22Z" fill="#D5CEA3"/>
            <path d="M10.07 8.17V12.96" stroke-width="1.91" stroke-miterlimit="10"/>
            </g>
            <defs>
            <clipPath id="clip0_23_13">
            <rect width="24" height="24" />
            </clipPath>
            </defs>
            </svg>


           </a>
           <p>linked.in/yeagram.com</p>
         </li>
       </ul>
       <div>
      </div>

      <a href="#">... click to view details.</a>
      </div>`;
    }
  }
}
ActivePage();
