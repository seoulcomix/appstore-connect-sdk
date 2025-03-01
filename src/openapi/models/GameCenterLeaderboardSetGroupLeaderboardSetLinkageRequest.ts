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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest
 */
export interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest {
    /**
     * 
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestFromJSON(json: any): GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest {
    return GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestToJSON(value?: GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON(value.data),
    };
}

