const babel = require("@babel/core");
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;

const code =
  `const a = 1, b = 2\n` +
  `function add(foo, bar) {\n` +
  `console.log(a, b)\n` +
  `return () => {\n` +
  `const a = '1'\n` +
  `return a + (foo + bar)\n` +
  `}\n` +
  `}`;

const ast = babel.parseSync(code);

const getUid = () => {
  let uid = 0;
  return () => `_${++uid || ""}`;
};

traverse(ast, {
  FunctionDeclaration(path) {
    const firstParam = path.get("params.0");
    if (firstParam === null) {
      return;
    }

    const name = firstParam.node.name;
    const binding = path.scope.getBinding(name);
    const getId = getUid();
    let newName;

    while (true) {
      newName = getId();

      if (path.scope.parentHasBinding(newName)) {
        continue;
      }

      if (path.scope.hasOwnBinding(newName)) {
        continue;
      }

      if (binding.references > 0) {
        let findIt = false;
        for (const refNode of binding.referencePaths) {
          if (
            refNode.scope !== path.scope &&
            refNode.scope.hasBinding(newName)
          ) {
            findIt = true;
            break;
          }
        }
        if (findIt) {
          break;
        }
      }

      break;
    }

    const i = t.identifier(newName);
    binding.referencePaths.forEach(p => p.replaceWith(i));
    firstParam.replaceWith(i);
  }
});

const newCode = babel.transformFromAst(ast).code;
// const newCode = generator(ast).code;
console.log(newCode);
