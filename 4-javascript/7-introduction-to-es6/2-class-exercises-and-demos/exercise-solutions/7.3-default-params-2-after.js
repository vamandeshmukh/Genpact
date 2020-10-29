function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}

console.log(addOffset());
console.log(addOffset({ length: 10 }));
