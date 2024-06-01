import { Editor } from "./editor";
import { EditorHistory } from "./editor-history";

function test() {
  console.log(editor.getContent());
  console.log(editor.getFont());
  console.log(editor.getFontSize());
}

const editor = new Editor();
const editorHistory = new EditorHistory();

editor.setContent("Hello ");
editor.setFont("Morphic");
editor.setFontSize(12);
editorHistory.push(editor.createState());

editor.setFont("Morphic");
editor.setFontSize(13);
editorHistory.push(editor.createState());

editor.setContent("Namaste");
editor.setFont("any font");
editor.setFontSize(14);
editorHistory.push(editor.createState());

editor.setFontSize(14);
editor.setFont("any font");
editor.setContent("GDGDGDGDGD");
editorHistory.push(editor.createState());

editor.setFont("AA");
editorHistory.push(editor.createState());
editor.setFont("BB");
console.log("Before ---------------------");
test();

editor.restoreState(editorHistory.pop()!);

console.log("After ---------------------");
test();
