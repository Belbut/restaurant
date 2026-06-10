import espetadaImg from "../assets/images/espetada.jpg"
import peixeImg from "../assets/images/peixe-espada-a-madeirense.jpg"
import milhoImg from "../assets/images/milho-frito.jpg"

const mainContent = () =>{
  const dishElement = (name, img) => {
    const div = document.createElement("div")

    const h2 = document.createElement("h2")
    h2.textContent = name;

    const dishImg = document.createElement("img")
    dishImg.src = img

    div.append(h2,dishImg)
    return div
  }

  const title = document.createElement("h1")
  title.textContent  = "Menu"

  const dishGrid = document.createElement("div")
  dishGrid.classList.add("dish-grid")
  dishGrid.append(
    dishElement("Espetada", espetadaImg),
    dishElement("Peixe Espada Preto", peixeImg),
    dishElement("Milho Frito", milhoImg)
  )

  const contentDiv = document.querySelector("#content")

  contentDiv.append(title, dishGrid)
};

export default mainContent;
