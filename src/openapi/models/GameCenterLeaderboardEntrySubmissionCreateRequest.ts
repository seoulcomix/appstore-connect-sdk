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
import type { GameCenterLeaderboardEntrySubmissionCreateRequestData } from './GameCenterLeaderboardEntrySubmissionCreateRequestData';
import {
    GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSON,
    GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSONTyped,
    GameCenterLeaderboardEntrySubmissionCreateRequestDataToJSON,
} from './GameCenterLeaderboardEntrySubmissionCreateRequestData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardEntrySubmissionCreateRequest
 */
export interface GameCenterLeaderboardEntrySubmissionCreateRequest {
    /**
     * 
     * @type {GameCenterLeaderboardEntrySubmissionCreateRequestData}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequest
     */
    data: GameCenterLeaderboardEntrySubmissionCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardEntrySubmissionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestFromJSON(json: any): GameCenterLeaderboardEntrySubmissionCreateRequest {
    return GameCenterLeaderboardEntrySubmissionCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestToJSON(value?: GameCenterLeaderboardEntrySubmissionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardEntrySubmissionCreateRequestDataToJSON(value.data),
    };
}

