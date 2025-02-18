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
 * @interface AppRelationshipsGameCenterEnabledVersionsDataInner
 */
export interface AppRelationshipsGameCenterEnabledVersionsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterEnabledVersionsDataInner
     */
    type: AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterEnabledVersionsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum = {
    GameCenterEnabledVersions: 'gameCenterEnabledVersions'
} as const;
export type AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum = typeof AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum[keyof typeof AppRelationshipsGameCenterEnabledVersionsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsGameCenterEnabledVersionsDataInner interface.
 */
export function instanceOfAppRelationshipsGameCenterEnabledVersionsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSON(json: any): AppRelationshipsGameCenterEnabledVersionsDataInner {
    return AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsGameCenterEnabledVersionsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsGameCenterEnabledVersionsDataInnerToJSON(value?: AppRelationshipsGameCenterEnabledVersionsDataInner | null): any {
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

