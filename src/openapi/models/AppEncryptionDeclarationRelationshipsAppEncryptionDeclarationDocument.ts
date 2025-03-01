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
import type { AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData } from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData';
import {
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSONTyped,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON,
} from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
 */
export interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
     */
    data?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument interface.
 */
export function instanceOfAppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSON(json: any): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    return AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON(json['data']),
    };
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentToJSON(value?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON(value.data),
    };
}

