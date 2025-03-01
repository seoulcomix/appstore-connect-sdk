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
import type { GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail } from './GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail';
import {
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSONTyped,
    GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON,
} from './GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail';
import type { GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard } from './GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard';
import {
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON,
} from './GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardReleaseCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardReleaseCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardReleaseCreateRequestDataRelationships
     */
    gameCenterDetail: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail;
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard}
     * @memberof GameCenterLeaderboardReleaseCreateRequestDataRelationships
     */
    gameCenterLeaderboard: GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard;
}

/**
 * Check if a given object implements the GameCenterLeaderboardReleaseCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardReleaseCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameCenterDetail" in value;
    isInstance = isInstance && "gameCenterLeaderboard" in value;

    return isInstance;
}

export function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardReleaseCreateRequestDataRelationships {
    return GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON(json['gameCenterDetail']),
        'gameCenterLeaderboard': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON(json['gameCenterLeaderboard']),
    };
}

export function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsToJSON(value?: GameCenterLeaderboardReleaseCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterDetail': GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON(value.gameCenterDetail),
        'gameCenterLeaderboard': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON(value.gameCenterLeaderboard),
    };
}

