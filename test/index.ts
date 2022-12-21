/* eslint-disable no-console */
import path from 'path';

import a from './a';

console.log(__dirname |> path.basename(%));

a();

const envars = { a: 1 };

a();

console.log(
  Object.keys(envars)
    .map((envar) => `${envar}=${envars[envar]}`)
    .join(' ') |> `$ ${%}`
);
