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
import type { AppEncryptionDeclarationDocument } from './AppEncryptionDeclarationDocument';
import {
    AppEncryptionDeclarationDocumentFromJSON,
    AppEncryptionDeclarationDocumentFromJSONTyped,
    AppEncryptionDeclarationDocumentToJSON,
} from './AppEncryptionDeclarationDocument';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentResponse
 */
export interface AppEncryptionDeclarationDocumentResponse {
    /**
     * 
     * @type {AppEncryptionDeclarationDocument}
     * @memberof AppEncryptionDeclarationDocumentResponse
     */
    data: AppEncryptionDeclarationDocument;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEncryptionDeclarationDocumentResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentResponse interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentResponseFromJSON(json: any): AppEncryptionDeclarationDocumentResponse {
    return AppEncryptionDeclarationDocumentResponseFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEncryptionDeclarationDocumentResponseToJSON(value?: AppEncryptionDeclarationDocumentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

