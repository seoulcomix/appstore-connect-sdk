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
 * @interface GameCenterAchievementImageUpdateRequestData
 */
export interface GameCenterAchievementImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    type: GameCenterAchievementImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterAchievementImageUpdateRequestDataTypeEnum = {
    GameCenterAchievementImages: 'gameCenterAchievementImages'
} as const;
export type GameCenterAchievementImageUpdateRequestDataTypeEnum = typeof GameCenterAchievementImageUpdateRequestDataTypeEnum[keyof typeof GameCenterAchievementImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementImageUpdateRequestData interface.
 */
export function instanceOfGameCenterAchievementImageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterAchievementImageUpdateRequestDataFromJSON(json: any): GameCenterAchievementImageUpdateRequestData {
    return GameCenterAchievementImageUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppEventScreenshotUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterAchievementImageUpdateRequestDataToJSON(value?: GameCenterAchievementImageUpdateRequestData | null): any {
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

