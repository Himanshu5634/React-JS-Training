const prettier = {
  bracketSameLine: false,
  arrowParens: "always",
  cursorOffset: -1,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  experimentalOperatorPosition: "end",
  endOfLine: "lf",
  experimentalTernaries: false,
  filepath: "",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  objectWrap: "preserve",
  overrides: [],
  plugins: [],
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  rangeEnd: null,
  rangeStart: 0,
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  vueIndentScriptAndStyle: false,
  parser: "",
};

const arr = [];

for (const key in prettier) {
  arr.push([key, prettier[key]]);
}

// console.log(arr);

arr.sort();
let obj = {};
arr.forEach(([key, value]) => {
  obj[key] = value;
});
console.log(JSON.stringify(prettier) !== JSON.stringify(obj));

console.log(obj);
