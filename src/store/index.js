import Vue from "vue";
import Vuex from "vuex";
import { wrap } from "../lib";
import opts from "./opts";

Vue.use(Vuex);

export default wrap(opts, new Worker("./worker", { type: "module" }));
