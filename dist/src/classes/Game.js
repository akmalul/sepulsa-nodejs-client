"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(config) {
        this.cfg = config;
    }
    createTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cfg.postRequest("/transaction/game.json", data);
                const respData = response.data;
                return respData;
            }
            catch (e) {
                return {
                    error: e.message || e
                };
            }
        });
    }
    queryTransactionDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.cfg.getRequest(`/transaction/${id}.json`);
                const respData = response.data;
                return respData;
            }
            catch (e) {
                return {
                    error: e.message || e
                };
            }
        });
    }
}
exports.Game = Game;
