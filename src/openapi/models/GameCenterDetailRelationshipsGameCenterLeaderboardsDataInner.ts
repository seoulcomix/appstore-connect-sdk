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
/**
 * 
 * @export
 * @interface GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
 */
export interface GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
     */
    type: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum = {
    GameCenterLeaderboards: 'gameCenterLeaderboards'
} as const;
export type GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum = typeof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum[keyof typeof GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerTypeEnum];


/**
 * Check if a given object implements the GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner interface.
 */
export function instanceOfGameCenterDetailRelationshipsGameCenterLeaderboardsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON(json: any): GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    return GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON(value?: GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

