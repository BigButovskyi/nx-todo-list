"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypeOrmConnectionModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var entities_1 = require("./entities");
var TypeOrmConnectionModule = /** @class */ (function () {
    function TypeOrmConnectionModule() {
    }
    TypeOrmConnectionModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'root',
                    password: 'root',
                    database: 'tasks_db',
                    synchronize: true,
                    logging: ['error'],
                    entities: [entities_1.TaskEntity],
                    // entityPrefix: 'my_prefix_',
                    migrations: []
                }),
            ]
        })
    ], TypeOrmConnectionModule);
    return TypeOrmConnectionModule;
}());
exports.TypeOrmConnectionModule = TypeOrmConnectionModule;
