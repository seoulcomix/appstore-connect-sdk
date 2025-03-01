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
 * @interface GameCenterLeaderboardSetLocalizationAttributes
 */
export interface GameCenterLeaderboardSetLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationAttributes
     */
    name?: string;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationAttributes interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationAttributesFromJSON(json: any): GameCenterLeaderboardSetLocalizationAttributes {
    return GameCenterLeaderboardSetLocalizationAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function GameCenterLeaderboardSetLocalizationAttributesToJSON(value?: GameCenterLeaderboardSetLocalizationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'name': value.name,
    };
}

