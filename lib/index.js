"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var client_1 = require("./client");
__exportStar(require("./client"), exports);
var aws_appsync_auth_link_1 = require("aws-appsync-auth-link");
Object.defineProperty(exports, "Signer", { enumerable: true, get: function () { return aws_appsync_auth_link_1.Signer; } });
__exportStar(require("./helpers/offline"), exports);
exports.default = client_1.default;
