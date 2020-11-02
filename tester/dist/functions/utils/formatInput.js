"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatInput = void 0;
/**
 *
 * @param {JobConfig} jobConfig Configurações para iniciar os testes
 */
exports.formatInput = function (jobConfig) {
    return {
        token: jobConfig.token ? jobConfig.token : false,
        rule: jobConfig.rule ? jobConfig.rule : 1,
        time: jobConfig.time ? jobConfig.time : 3600,
        concurrency: jobConfig.concurrency ? jobConfig.concurrency : 1,
    };
};
