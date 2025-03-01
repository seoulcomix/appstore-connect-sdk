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
 * @interface AppRelationshipsPreReleaseVersionsDataInner
 */
export interface AppRelationshipsPreReleaseVersionsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsPreReleaseVersionsDataInner
     */
    type: AppRelationshipsPreReleaseVersionsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsPreReleaseVersionsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsPreReleaseVersionsDataInnerTypeEnum = {
    PreReleaseVersions: 'preReleaseVersions'
} as const;
export type AppRelationshipsPreReleaseVersionsDataInnerTypeEnum = typeof AppRelationshipsPreReleaseVersionsDataInnerTypeEnum[keyof typeof AppRelationshipsPreReleaseVersionsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsPreReleaseVersionsDataInner interface.
 */
export function instanceOfAppRelationshipsPreReleaseVersionsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsPreReleaseVersionsDataInnerFromJSON(json: any): AppRelationshipsPreReleaseVersionsDataInner {
    return AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPreReleaseVersionsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsPreReleaseVersionsDataInnerToJSON(value?: AppRelationshipsPreReleaseVersionsDataInner | null): any {
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

