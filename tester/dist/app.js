"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Rafael de Gouveia
 */
var fs_extra_1 = require("fs-extra");
var tokenController_1 = require("./functions/tokenLib/tokenController");
var node_schedule_1 = require("node-schedule");
var requestController_1 = require("./functions/requestLib/requestController");
var createDir_1 = require("./functions/utils/createDir");
var formatInput_1 = require("./functions/utils/formatInput");
/**
 * @param {JobConfig} jobConfig Configurações para iniciar os testes
 * @return {Promise<void>}
 */
exports.default = (function (jobConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, rule, time, concurrency, rules, fn;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = formatInput_1.formatInput(jobConfig), token = _a.token, rule = _a.rule, time = _a.time, concurrency = _a.concurrency;
                rules = {
                    start: Date.now(),
                    end: Date.now() + time * 60 * 1000,
                    rule: "*/" + rule + " * * * * *",
                };
                return [4 /*yield*/, createDir_1.createDir()];
            case 1:
                _b.sent();
                fn = function () {
                    var j = node_schedule_1.scheduleJob(rules, function () { return __awaiter(void 0, void 0, void 0, function () {
                        var data, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, fs_extra_1.readJSON("data.json")];
                                case 1:
                                    data = _c.sent();
                                    if (!(token && !!data.auth)) return [3 /*break*/, 4];
                                    _a = requestController_1.newReq;
                                    _b = [data];
                                    return [4 /*yield*/, tokenController_1.getToken(data.auth)];
                                case 2: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                                case 3:
                                    _c.sent();
                                    return [3 /*break*/, 7];
                                case 4:
                                    if (!!token) return [3 /*break*/, 6];
                                    return [4 /*yield*/, requestController_1.newReq(data, null)];
                                case 5:
                                    _c.sent();
                                    return [3 /*break*/, 7];
                                case 6:
                                    console.error("If is necessary a token flow, 'auth' must exist in 'data.json'");
                                    j.cancel();
                                    _c.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); });
                };
                Array.from({ length: concurrency }).map(fn);
                return [2 /*return*/];
        }
    });
}); });
