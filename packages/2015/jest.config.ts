import * as sharedConfig from "../../jest.config.base";
import { name } from "./package.json";

const packageName = name.split("/").pop();

export default {
  ...sharedConfig.default,
  roots: [`<rootDir>/packages/${packageName}`],
  rootDir: "../..",
};
