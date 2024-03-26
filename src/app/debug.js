import GUI from "lil-gui";
import { car } from "./object";
import { configControl } from "./controle";

const gui = new GUI()

gui.add(car.position, "x", 0, 100, 2)
gui.add(configControl,"speed", 0, 100, .1)

export { gui }