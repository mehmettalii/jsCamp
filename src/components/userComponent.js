import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component yüklendi");

let logger1 = new ElasticLogger();

let userService = new UserService(logger1);

let user1 = new User(1, "Mehmet", "Kaya", "Ankara");
let user2 = new User(2, "Baran", "Gökçe", "İstanbul");

userService.add(user1);
userService.add(user2);

console.log(userService.list());

userService.getById(1);
userService.list();
