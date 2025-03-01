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
import type { AppEncryptionDeclaration } from './AppEncryptionDeclaration';
import {
    AppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationToJSON,
} from './AppEncryptionDeclaration';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationWithoutIncludesResponse
 */
export interface AppEncryptionDeclarationWithoutIncludesResponse {
    /**
     * 
     * @type {AppEncryptionDeclaration}
     * @memberof AppEncryptionDeclarationWithoutIncludesResponse
     */
    data: AppEncryptionDeclaration;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEncryptionDeclarationWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationWithoutIncludesResponse interface.
 */
export function instanceOfAppEncryptionDeclarationWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEncryptionDeclarationWithoutIncludesResponseFromJSON(json: any): AppEncryptionDeclarationWithoutIncludesResponse {
    return AppEncryptionDeclarationWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEncryptionDeclarationWithoutIncludesResponseToJSON(value?: AppEncryptionDeclarationWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

