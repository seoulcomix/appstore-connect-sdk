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
 * @interface GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets
 */
export interface GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets
     */
    data?: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets interface.
 */
export function instanceOfGameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsFromJSON(json: any): GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets {
    return GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON)),
    };
}

export function GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsToJSON(value?: GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON)),
    };
}

