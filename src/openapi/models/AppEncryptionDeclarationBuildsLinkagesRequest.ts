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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationBuildsLinkagesRequest
 */
export interface AppEncryptionDeclarationBuildsLinkagesRequest {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof AppEncryptionDeclarationBuildsLinkagesRequest
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationBuildsLinkagesRequest interface.
 */
export function instanceOfAppEncryptionDeclarationBuildsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEncryptionDeclarationBuildsLinkagesRequestFromJSON(json: any): AppEncryptionDeclarationBuildsLinkagesRequest {
    return AppEncryptionDeclarationBuildsLinkagesRequestFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationBuildsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationBuildsLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function AppEncryptionDeclarationBuildsLinkagesRequestToJSON(value?: AppEncryptionDeclarationBuildsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}

