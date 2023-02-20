"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TasksController = void 0;
var common_1 = require("@nestjs/common");
var exceptions_1 = require("../../common/exceptions");
var TasksController = /** @class */ (function () {
    function TasksController(tasksService) {
        this.tasksService = tasksService;
    }
    TasksController.prototype.findAll = function () {
        return this.tasksService.findAll();
    };
    TasksController.prototype.create = function (createTaskDto) {
        return this.tasksService.create(createTaskDto);
    };
    TasksController.prototype.findOne = function (uuid) {
        return this.tasksService.findOneById(uuid);
    };
    TasksController.prototype.update = function (uuid, updateTaskDto) {
        return this.tasksService.updateById(uuid, updateTaskDto);
    };
    TasksController.prototype.remove = function (uuid) {
        return this.tasksService.remove(uuid);
    };
    __decorate([
        (0, common_1.Get)()
    ], TasksController.prototype, "findAll");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TasksController.prototype, "create");
    __decorate([
        (0, common_1.Get)(':uuid'),
        __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe))
    ], TasksController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':uuid'),
        (0, common_1.UseFilters)(exceptions_1.EntityNotFoundExceptionFilter),
        __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe)),
        __param(1, (0, common_1.Body)())
    ], TasksController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':uuid'),
        __param(0, (0, common_1.Param)('uuid', common_1.ParseUUIDPipe))
    ], TasksController.prototype, "remove");
    TasksController = __decorate([
        (0, common_1.Controller)('tasks')
    ], TasksController);
    return TasksController;
}());
exports.TasksController = TasksController;
