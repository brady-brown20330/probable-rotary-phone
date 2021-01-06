// polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import { renderCanvas } from "@replay/web";
import { Game, gameProps } from "../src";

renderCanvas(Game(gameProps));
