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
import type { GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard } from './GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard';
import {
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped,
    GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON,
} from './GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardLocalizationCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataRelationships
     */
    gameCenterLeaderboard: GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameCenterLeaderboard" in value;

    return isInstance;
}

export function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestDataRelationships {
    return GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterLeaderboard': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON(json['gameCenterLeaderboard']),
    };
}

export function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsToJSON(value?: GameCenterLeaderboardLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterLeaderboard': GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON(value.gameCenterLeaderboard),
    };
}

