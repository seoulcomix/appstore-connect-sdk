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
import type { AppEventScreenshotUpdateRequestDataAttributes } from './AppEventScreenshotUpdateRequestDataAttributes';
import {
    AppEventScreenshotUpdateRequestDataAttributesFromJSON,
    AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped,
    AppEventScreenshotUpdateRequestDataAttributesToJSON,
} from './AppEventScreenshotUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageUpdateRequestData
 */
export interface GameCenterLeaderboardSetImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    type: GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum = {
    GameCenterLeaderboardSetImages: 'gameCenterLeaderboardSetImages'
} as const;
export type GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum = typeof GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetImageUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetImageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetImageUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardSetImageUpdateRequestData {
    return GameCenterLeaderboardSetImageUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppEventScreenshotUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterLeaderboardSetImageUpdateRequestDataToJSON(value?: GameCenterLeaderboardSetImageUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppEventScreenshotUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

