import { config } from "dotenv";
import { connect } from "./configs/mongo.js";
import {initServer} from "./configs/app.js"
import { DefultAdmin } from "./src/Users/user.controller.js";

config()
connect()
initServer()
DefultAdmin()