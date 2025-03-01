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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';
import {
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped,
    GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON,
} from './GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData';

/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseRelationshipsGameCenterAchievement
 */
export interface GameCenterAchievementReleaseRelationshipsGameCenterAchievement {
    /**
     * 
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementReleaseRelationshipsGameCenterAchievement
     */
    data?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseRelationshipsGameCenterAchievement interface.
 */
export function instanceOfGameCenterAchievementReleaseRelationshipsGameCenterAchievement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSON(json: any): GameCenterAchievementReleaseRelationshipsGameCenterAchievement {
    return GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseRelationshipsGameCenterAchievementFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseRelationshipsGameCenterAchievement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON(json['data']),
    };
}

export function GameCenterAchievementReleaseRelationshipsGameCenterAchievementToJSON(value?: GameCenterAchievementReleaseRelationshipsGameCenterAchievement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON(value.data),
    };
}

