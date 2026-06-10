import homeImg from "../assets/images/home-img-mid.jpg" 

const mainContent = () =>{
  const contentDiv = document.querySelector("#content")

  const title = document.createElement("h1")
  title.textContent  = "Madeira's Restaurant"

  const img = document.createElement("img")
  img.src = homeImg
  img.alt = "Madeira's Restaurant"

  const p = document.createElement("p")
  p.textContent = "Tucked away from the bustle of the city, Madeira's Restaurant is a warm retreat where every detail invites you to slow down and stay a while. Soft amber lighting glows over mismatched wooden tables, worn smooth by years of good company, while the scent of slow-cooked sauces and fresh bread drifts from an open kitchen. Our menu changes with the seasons, drawing on local farms and time-honored recipes to bring honest, soul-warming food to your table. Whether you're settling in for a quiet dinner for two or gathering with old friends on a rainy evening, we believe every meal should feel like coming home."

  contentDiv.append(title, img, p)
};

export default mainContent;

