import { Canvas } from "./Canvas";
import { EraseTool } from "./EraseTool";
import { PencilTool } from "./PencilTool";
import { SelectionTool } from "./SelectionTool";

const canvas = new Canvas(new SelectionTool());
canvas.mouseUp();
canvas.mouseDown();

canvas.setCurrentTool(new EraseTool());
canvas.mouseUp();
canvas.mouseDown();

canvas.setCurrentTool(new PencilTool());
canvas.mouseUp();
canvas.mouseDown();

console.log(canvas.getCurrentTool());
