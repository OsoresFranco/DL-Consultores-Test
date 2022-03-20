let lenguajes1 = [
  { id: 1, name: "C" },
  { id: 3, name: "C++" },
  { id: 5, name: "Go" },
  { id: 9, name: "Abap" },
  { id: 10, name: "Java" },
  { id: 12, name: "Cobol" },
];
let lenguajes2 = [
  { id: 2, name: "Python" },
  { id: 4, name: "Ruby" },
  { id: 6, name: "YARV" },
  { id: 9, name: "Abap" },
  { id: 10, name: "Javascript" },
  { id: 11, name: "Cobol" },
];
// 1 - Se cuenta con 2 listas donde cada lista tiene 2 campos (ID, Nombre) se deben comparar los elementos de ambas listas
function compare(array1, array2) {
  // 2 - Crear las listas vacías
  let coincidencias = [{ name: "COINCIDENCIAS" }];
  let lista1 = [{ name: "Solo en lista 1" }];
  let lista2 = [{ name: "Solo en lista 2" }];
  let conflictos = [{ name: "CONFLICTOS" }];
  // 3 - Recorrer ambas listas para conocer sus valores
  for (let i = 0; i < array1.length; i++) {
    // 4 - Si las listas contienen valores identicos listarlos como COINCIDENCIAS
    if (array1[i].id === array2[i].id && array1[i].name === array2[i].name) {
      coincidencias.push(array1[i]);
    }
    // 5 - Listar elementos presentes solo en la Lista 1
    if (array1[i].id !== array2[i].id && array1[i].name !== array2[i].name) {
      lista1.push(array1[i]);
    }
    // 6 - Listar elementos presentes solo en la Lista 2
    if (array1[i].id !== array2[i].id && array1[i].name !== array2[i].name) {
      lista2.push(array2[i]);
    }
    // 7 - Elementos en conflicto, es decir, elementos que existen en ambas listas, pero con distintos valores
    if (
      (array1[i].id === array2[i].id && array1[i].name !== array2[i].name) ||
      (array1[i].id !== array2[i].id && array1[i].name === array2[i].name)
    ) {
      conflictos.push(array1[i], array2[i]);
    }
  }
  // 8 - finalmente devolver 4 listados
  console.table(coincidencias);
  console.table(lista1);
  console.table(lista2);
  console.table(conflictos);
}

compare(lenguajes1, lenguajes2);
