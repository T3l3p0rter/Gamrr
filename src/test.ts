import { Shape } from "./src/Objects/shape";
import { Color, Colors } from "./src/Objects/color";

const testShape = new Shape(Colors.blue, new Position2D(300, 200))
const testColor = new Color(255, 255, 255)



console.log(testShape)
console.log(testColor)

console.log( Config.objects )

const testCircle = new Circle(
  10,
  Colors.red,
  new Position2D(400,404)
)
console.log( testCircle )