let htmlEditor = CodeMirror.fromTextArea(
document.getElementById("htmlCode"),
{
mode:"xml",
theme:"material-darker",
lineNumbers:true
}
);

let cssEditor = CodeMirror.fromTextArea(
document.getElementById("cssCode"),
{
mode:"css",
theme:"material-darker",
lineNumbers:true
}
);

let jsEditor = CodeMirror.fromTextArea(
document.getElementById("jsCode"),
{
mode:"javascript",
theme:"material-darker",
lineNumbers:true
}
);

function runCode(){

let html = htmlEditor.getValue();
let css = cssEditor.getValue();
let js = jsEditor.getValue();

let output=document.getElementById("output");

output.srcdoc = `
<style>${css}</style>
${html}
<script>${js}<\/script>
`;

}

function clearCode(){

htmlEditor.setValue("");
cssEditor.setValue("");
jsEditor.setValue("");

document.getElementById("output").srcdoc="";

}