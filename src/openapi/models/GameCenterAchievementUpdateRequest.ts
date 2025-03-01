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
import type { GameCenterAchievementUpdateRequestData } from './GameCenterAchievementUpdateRequestData';
import {
    GameCenterAchievementUpdateRequestDataFromJSON,
    GameCenterAchievementUpdateRequestDataFromJSONTyped,
    GameCenterAchievementUpdateRequestDataToJSON,
} from './GameCenterAchievementUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterAchievementUpdateRequest
 */
export interface GameCenterAchievementUpdateRequest {
    /**
     * 
     * @type {GameCenterAchievementUpdateRequestData}
     * @memberof GameCenterAchievementUpdateRequest
     */
    data: GameCenterAchievementUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterAchievementUpdateRequest interface.
 */
export function instanceOfGameCenterAchievementUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterAchievementUpdateRequestFromJSON(json: any): GameCenterAchievementUpdateRequest {
    return GameCenterAchievementUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterAchievementUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterAchievementUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementUpdateRequestToJSON(value?: GameCenterAchievementUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterAchievementUpdateRequestDataToJSON(value.data),
    };
}

