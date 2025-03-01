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
 * @interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration
 */
export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration
     */
    data?: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
}

/**
 * Check if a given object implements the BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration interface.
 */
export function instanceOfBuildUpdateRequestDataRelationshipsAppEncryptionDeclaration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSON(json: any): BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration {
    return BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped(json, false);
}

export function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON(json['data']),
    };
}

export function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationToJSON(value?: BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration | null): any {
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

