const mainContent = ()=> {
  const title = document.createElement("h1");
  title.textContent = "Contacts";

  const description = document.createElement("p")
  description.textContent = "Sorry, but currently we still don't have any contacts."

  const contentDiv = document.querySelector("#content")
  contentDiv.append(title, description)
}

export default mainContent;
