document.body.onload = main

class Box{
    constructor(h,w,p,b,z){
      this.height = h;
      this.width = w;
      this.left = p;
      this.top = p;
      this.background = b;
      this.z_index = z;
    }

    render(){
      const div = document.createElement("div")
      const style = `height: ${this.height}px; width: ${this.width}px; margin-left: ${this.left}px; margin-top: ${this.top}px; background-color: ${this.background}; z-index:${this.z_index}`
      div.setAttribute("style", style)
      document.body.appendChild(div)
    }
}

class Color{
  constructor(p){
    this.right = p
    this.top = p
  }
  render(){
    const input = document.createElement("input")
    input.id = "color"
    const totalWidth = screen.width
    const width = totalWidth
    const style = `margin-left: ${this.right * 10}px; margin-top: ${this.top}px;`
    input.style =  style
    input.setAttribute("type", "color")
    document.body.appendChild(input)
  }

}

function listener(){
  let color = document.getElementById("color")
  document.body.addEventListener('change', function(){
      const colorArray = inverseArray(color.value)
      const newArray = colorArray.map(color => "#" + color.toString(16)) 
      for(let i = 0; i < newArray.length; i++){
        appendColor(newArray[i], i)
      }
  })
}

function inverseArray(color){
  color = color.split("#")
  color = "0x" + color[1]
  console.log(color)
  let white = 0xffffff
  return [white - color, parseInt(color), white - color /2] 
}


function main(){
  const color = new Color(30)
  color.render()
  listener()
}

function appendColor(color, i){
    const box = new Box(100, 100, i * 20, color, i )
    box.render()
}




