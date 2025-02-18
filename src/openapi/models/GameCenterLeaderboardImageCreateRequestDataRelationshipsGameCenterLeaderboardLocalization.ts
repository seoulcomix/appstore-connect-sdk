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
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData } from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';
import {
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSONTyped,
    GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON,
} from './GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    /**
     * 
     * @type {GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData}
     * @memberof GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization
     */
    data: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization interface.
 */
export function instanceOfGameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON(value?: GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationDataToJSON(value.data),
    };
}

