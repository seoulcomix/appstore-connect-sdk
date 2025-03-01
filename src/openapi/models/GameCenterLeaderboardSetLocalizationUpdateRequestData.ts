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
import type { BundleIdUpdateRequestDataAttributes } from './BundleIdUpdateRequestDataAttributes';
import {
    BundleIdUpdateRequestDataAttributesFromJSON,
    BundleIdUpdateRequestDataAttributesFromJSONTyped,
    BundleIdUpdateRequestDataAttributesToJSON,
} from './BundleIdUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalizationUpdateRequestData
 */
export interface GameCenterLeaderboardSetLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    type: GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetLocalizationUpdateRequestData
     */
    attributes?: BundleIdUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum = {
    GameCenterLeaderboardSetLocalizations: 'gameCenterLeaderboardSetLocalizations'
} as const;
export type GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum = typeof GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum[keyof typeof GameCenterLeaderboardSetLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardSetLocalizationUpdateRequestData {
    return GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BundleIdUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterLeaderboardSetLocalizationUpdateRequestDataToJSON(value?: GameCenterLeaderboardSetLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BundleIdUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

