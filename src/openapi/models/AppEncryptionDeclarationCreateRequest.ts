/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppEncryptionDeclarationCreateRequestData } from './AppEncryptionDeclarationCreateRequestData';
import {
    AppEncryptionDeclarationCreateRequestDataFromJSON,
    AppEncryptionDeclarationCreateRequestDataFromJSONTyped,
    AppEncryptionDeclarationCreateRequestDataToJSON,
} from './AppEncryptionDeclarationCreateRequestData';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationCreateRequest
 */
export interface AppEncryptionDeclarationCreateRequest {
    /**
     * 
     * @type {AppEncryptionDeclarationCreateRequestData}
     * @memberof AppEncryptionDeclarationCreateRequest
     */
    data: AppEncryptionDeclarationCreateRequestData;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationCreateRequest interface.
 */
export function instanceOfAppEncryptionDeclarationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEncryptionDeclarationCreateRequestFromJSON(json: any): AppEncryptionDeclarationCreateRequest {
    return AppEncryptionDeclarationCreateRequestFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationCreateRequestDataFromJSON(json['data']),
    };
}

export function AppEncryptionDeclarationCreateRequestToJSON(value?: AppEncryptionDeclarationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationCreateRequestDataToJSON(value.data),
    };
}

