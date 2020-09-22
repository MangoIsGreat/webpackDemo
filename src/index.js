import Content from "./content.js"
import pic from "./001.png"

const app = document.getElementById("app")

Content(app)

const img = new Image()
img.src = pic

app.append(img)

console.log(pic)