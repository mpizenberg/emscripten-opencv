var Module = {
  onRuntimeInitialized: () => init(Module)
};

function init(Module) {
  const hello = new Module.Hello();
  const view = hello.allocate(1000);
  console.log("allocated");
  // TODO put in "view" actual image data
  const mat = hello.imdecode();
  console.log("decoded");
}
