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
import type { GameCenterAchievementCreateRequestDataAttributes } from './GameCenterAchievementCreateRequestDataAttributes';
import {
    GameCenterAchievementCreateRequestDataAttributesFromJSON,
    GameCenterAchievementCreateRequestDataAttributesFromJSONTyped,
    GameCenterAchievementCreateRequestDataAttributesToJSON,
} from './GameCenterAchievementCreateRequestDataAttributes';
import type { GameCenterAchievementCreateRequestDataRelationships } from './GameCenterAchievementCreateRequestDataRelationships';
import {
    GameCenterAchievementCreateRequestDataRelationshipsFromJSON,
    GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterAchievementCreateRequestDataRelationshipsToJSON,
} from './GameCenterAchievementCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterAchievementCreateRequestData
 */
export interface GameCenterAchievementCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementCreateRequestData
     */
    type: GameCenterAchievementCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterAchievementCreateRequestDataAttributes}
     * @memberof GameCenterAchievementCreateRequestData
     */
    attributes: GameCenterAchievementCreateRequestDataAttributes;
    /**
     * 
     * @type {GameCenterAchievementCreateRequestDataRelationships}
     * @memberof GameCenterAchievementCreateRequestData
     */
    relationships?: GameCenterAchievementCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterAchievementCreateRequestDataTypeEnum = {
    GameCenterAchievements: 'gameCenterAchievements'
} as const;
export type GameCenterAchievementCreateRequestDataTypeEnum = typeof GameCenterAchievementCreateRequestDataTypeEnum[keyof typeof GameCenterAchievementCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterAchievementCreateRequestData interface.
 */
export function instanceOfGameCenterAchievementCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function GameCenterAchievementCreateRequestDataFromJSON(json: any): GameCenterAchievementCreateRequestData {
    return GameCenterAchievementCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GameCenterAchievementCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterAchievementCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterAchievementCreateRequestDataToJSON(value?: GameCenterAchievementCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GameCenterAchievementCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': GameCenterAchievementCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

