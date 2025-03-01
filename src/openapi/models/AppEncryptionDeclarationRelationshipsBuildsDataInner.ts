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
/**
 * 
 * @export
 * @interface AppEncryptionDeclarationRelationshipsBuildsDataInner
 */
export interface AppEncryptionDeclarationRelationshipsBuildsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsBuildsDataInner
     */
    type: AppEncryptionDeclarationRelationshipsBuildsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsBuildsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppEncryptionDeclarationRelationshipsBuildsDataInnerTypeEnum = {
    Builds: 'builds'
} as const;
export type AppEncryptionDeclarationRelationshipsBuildsDataInnerTypeEnum = typeof AppEncryptionDeclarationRelationshipsBuildsDataInnerTypeEnum[keyof typeof AppEncryptionDeclarationRelationshipsBuildsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsBuildsDataInner interface.
 */
export function instanceOfAppEncryptionDeclarationRelationshipsBuildsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON(json: any): AppEncryptionDeclarationRelationshipsBuildsDataInner {
    return AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsBuildsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON(value?: AppEncryptionDeclarationRelationshipsBuildsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

