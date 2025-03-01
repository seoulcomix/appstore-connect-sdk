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
 * @interface AppRelationshipsGameCenterDetailData
 */
export interface AppRelationshipsGameCenterDetailData {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterDetailData
     */
    type: AppRelationshipsGameCenterDetailDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsGameCenterDetailData
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsGameCenterDetailDataTypeEnum = {
    GameCenterDetails: 'gameCenterDetails'
} as const;
export type AppRelationshipsGameCenterDetailDataTypeEnum = typeof AppRelationshipsGameCenterDetailDataTypeEnum[keyof typeof AppRelationshipsGameCenterDetailDataTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsGameCenterDetailData interface.
 */
export function instanceOfAppRelationshipsGameCenterDetailData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsGameCenterDetailDataFromJSON(json: any): AppRelationshipsGameCenterDetailData {
    return AppRelationshipsGameCenterDetailDataFromJSONTyped(json, false);
}

export function AppRelationshipsGameCenterDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsGameCenterDetailData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsGameCenterDetailDataToJSON(value?: AppRelationshipsGameCenterDetailData | null): any {
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

