"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskEntity = void 0;
var typeorm_1 = require("typeorm");
var task_types_1 = require("@app-types/task.types");
var TaskEntity = /** @class */ (function () {
    function TaskEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], TaskEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": task_types_1.TaskStatus, "default": task_types_1.TaskStatus.ToDo })
    ], TaskEntity.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": task_types_1.TaskPriority, "default": task_types_1.TaskPriority.Medium })
    ], TaskEntity.prototype, "priority");
    __decorate([
        (0, typeorm_1.Column)()
    ], TaskEntity.prototype, "dueDate");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], TaskEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], TaskEntity.prototype, "updatedAt");
    TaskEntity = __decorate([
        (0, typeorm_1.Entity)('tasks')
    ], TaskEntity);
    return TaskEntity;
}());
exports.TaskEntity = TaskEntity;
