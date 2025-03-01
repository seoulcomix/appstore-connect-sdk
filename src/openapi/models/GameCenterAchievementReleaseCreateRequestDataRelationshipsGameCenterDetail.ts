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
import type { AppRelationshipsGameCenterDetailData } from './AppRelationshipsGameCenterDetailData';
import {
    AppRelationshipsGameCenterDetailDataFromJSON,
    AppRelationshipsGameCenterDetailDataFromJSONTyped,
    AppRelationshipsGameCenterDetailDataToJSON,
} from './AppRelationshipsGameCenterDetailData';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail
 */
export interface GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    /**
     * 
     * @type {AppRelationshipsGameCenterDetailData}
     * @memberof GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail
     */
    data: AppRelationshipsGameCenterDetailData;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail interface.
 */
export function instanceOfGameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON(json: any): GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    return GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppRelationshipsGameCenterDetailDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON(value?: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsGameCenterDetailDataToJSON(value.data),
    };
}

