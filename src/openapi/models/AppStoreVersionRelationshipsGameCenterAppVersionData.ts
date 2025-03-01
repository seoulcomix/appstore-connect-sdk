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
 * @interface AppStoreVersionRelationshipsGameCenterAppVersionData
 */
export interface AppStoreVersionRelationshipsGameCenterAppVersionData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersionData
     */
    type: AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsGameCenterAppVersionData
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum = {
    GameCenterAppVersions: 'gameCenterAppVersions'
} as const;
export type AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum = typeof AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum[keyof typeof AppStoreVersionRelationshipsGameCenterAppVersionDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionRelationshipsGameCenterAppVersionData interface.
 */
export function instanceOfAppStoreVersionRelationshipsGameCenterAppVersionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON(json: any): AppStoreVersionRelationshipsGameCenterAppVersionData {
    return AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsGameCenterAppVersionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON(value?: AppStoreVersionRelationshipsGameCenterAppVersionData | null): any {
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

