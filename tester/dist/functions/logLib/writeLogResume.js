"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var fs_extra_1 = require("fs-extra");
var statusObj;
var httpStatus = {
    "100": 0,
    "101": 0,
    "102": 0,
    "103": 0,
    "200": 0,
    "201": 0,
    "202": 0,
    "203": 0,
    "204": 0,
    "205": 0,
    "206": 0,
    "207": 0,
    "208": 0,
    "226": 0,
    "300": 0,
    "301": 0,
    "302": 0,
    "303": 0,
    "304": 0,
    "305": 0,
    "306": 0,
    "307": 0,
    "308": 0,
    "400": 0,
    "401": 0,
    "402": 0,
    "403": 0,
    "404": 0,
    "405": 0,
    "406": 0,
    "407": 0,
    "408": 0,
    "409": 0,
    "410": 0,
    "411": 0,
    "412": 0,
    "413": 0,
    "414": 0,
    "415": 0,
    "416": 0,
    "417": 0,
    "418": 0,
    "421": 0,
    "422": 0,
    "423": 0,
    "424": 0,
    "425": 0,
    "426": 0,
    "428": 0,
    "429": 0,
    "431": 0,
    "451": 0,
    "500": 0,
    "501": 0,
    "502": 0,
    "503": 0,
    "504": 0,
    "505": 0,
    "506": 0,
    "507": 0,
    "508": 0,
    "510": 0,
    "511": 0,
};
/**
 * @param {Status} status Objeto com a key sendo o status e o value sendo 0 (por padrão terá todos os status)
 * @return {void}
 */
function defineResume(status) {
    if (status === void 0) { status = httpStatus; }
    statusObj = __assign(__assign({}, status), { "Other status": 0 });
}
exports.defineResume = defineResume;
/**
 * @param {number} status Status da requisição que foi feita
 * @return {Promise<void>}
 */
function logResume(status) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (statusObj[status] === undefined) {
                        statusObj["Other status"] = statusObj["Other status"] + 1;
                    }
                    else {
                        statusObj[status] = statusObj[status] + 1;
                    }
                    return [4 /*yield*/, fs_extra_1.writeFile("log/resume.log", "" + JSON.stringify(statusObj, null, "\t"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.logResume = logResume;
