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
import type { GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization } from './GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization';
import {
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON,
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped,
    GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON,
} from './GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardImageCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization}
     * @memberof GameCenterLeaderboardImageCreateRequestDataRelationships
     */
    gameCenterLeaderboardLocalization: GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterLeaderboardImageCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameCenterLeaderboardLocalization" in value;

    return isInstance;
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationships {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterLeaderboardLocalization': GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON(json['gameCenterLeaderboardLocalization']),
    };
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSON(value?: GameCenterLeaderboardImageCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterLeaderboardLocalization': GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON(value.gameCenterLeaderboardLocalization),
    };
}

