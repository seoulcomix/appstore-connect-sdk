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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';

/**
 * 
 * @export
 * @interface BuildAppEncryptionDeclarationLinkageRequest
 */
export interface BuildAppEncryptionDeclarationLinkageRequest {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildAppEncryptionDeclarationLinkageRequest
     */
    data: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
}

/**
 * Check if a given object implements the BuildAppEncryptionDeclarationLinkageRequest interface.
 */
export function instanceOfBuildAppEncryptionDeclarationLinkageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BuildAppEncryptionDeclarationLinkageRequestFromJSON(json: any): BuildAppEncryptionDeclarationLinkageRequest {
    return BuildAppEncryptionDeclarationLinkageRequestFromJSONTyped(json, false);
}

export function BuildAppEncryptionDeclarationLinkageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAppEncryptionDeclarationLinkageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON(json['data']),
    };
}

export function BuildAppEncryptionDeclarationLinkageRequestToJSON(value?: BuildAppEncryptionDeclarationLinkageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON(value.data),
    };
}

