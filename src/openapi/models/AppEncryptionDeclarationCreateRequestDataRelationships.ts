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
import type { AppEncryptionDeclarationCreateRequestDataRelationshipsApp } from './AppEncryptionDeclarationCreateRequestDataRelationshipsApp';
import {
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSON,
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSONTyped,
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSON,
} from './AppEncryptionDeclarationCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationCreateRequestDataRelationships
 */
export interface AppEncryptionDeclarationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationCreateRequestDataRelationshipsApp}
     * @memberof AppEncryptionDeclarationCreateRequestDataRelationships
     * @deprecated
     */
    app: AppEncryptionDeclarationCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationCreateRequestDataRelationships interface.
 */
export function instanceOfAppEncryptionDeclarationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;

    return isInstance;
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSON(json: any): AppEncryptionDeclarationCreateRequestDataRelationships {
    return AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsToJSON(value?: AppEncryptionDeclarationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSON(value.app),
    };
}

