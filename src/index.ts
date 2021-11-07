require("dotenv").config();
import { ExtendedClient } from "./structures/Client";

export const client = new ExtendedClient();

client.start();
