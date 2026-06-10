import homeContent from "./tabs/home-tab.js"
import menuContent from "./tabs/menu-tab.js";
import aboutContent from "./tabs/contact-tab.js";

console.log("hi world");
console.log("bye")

homeContent()

const homeBtn = document.querySelector("#home")
const menuBtn = document.querySelector("#menu")
const aboutBtn = document.querySelector("#about")

const addTabSwitchEvent = (btn, tabContent) => {
    const contentDiv = document.querySelector("#content")
   btn.addEventListener("click", ()=> {
    contentDiv.textContent = "";

    tabContent();
    console.log("123")
  })
}

  addTabSwitchEvent(homeBtn, homeContent)
  addTabSwitchEvent(menuBtn, menuContent)
  addTabSwitchEvent(aboutBtn, aboutContent)

