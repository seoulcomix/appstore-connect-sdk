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
 * @interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData
 */
export interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData
     */
    type: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataTypeEnum = {
    GameCenterLeaderboardSetImages: 'gameCenterLeaderboardSetImages'
} as const;
export type GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataTypeEnum = typeof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataTypeEnum[keyof typeof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataFromJSON(json: any): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData {
    return GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageDataToJSON(value?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData | null): any {
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

