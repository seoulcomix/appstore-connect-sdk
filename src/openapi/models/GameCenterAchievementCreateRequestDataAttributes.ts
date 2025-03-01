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
 * @interface GameCenterAchievementCreateRequestDataAttributes
 */
export interface GameCenterAchievementCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    vendorIdentifier: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    points: number;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    showBeforeEarned: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementCreateRequestDataAttributes
     */
    repeatable: boolean;
}

/**
 * Check if a given object implements the GameCenterAchievementCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterAchievementCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceName" in value;
    isInstance = isInstance && "vendorIdentifier" in value;
    isInstance = isInstance && "points" in value;
    isInstance = isInstance && "showBeforeEarned" in value;
    isInstance = isInstance && "repeatable" in value;

    return isInstance;
}

export function GameCenterAchievementCreateRequestDataAttributesFromJSON(json: any): GameCenterAchievementCreateRequestDataAttributes {
    return GameCenterAchievementCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'vendorIdentifier': json['vendorIdentifier'],
        'points': json['points'],
        'showBeforeEarned': json['showBeforeEarned'],
        'repeatable': json['repeatable'],
    };
}

export function GameCenterAchievementCreateRequestDataAttributesToJSON(value?: GameCenterAchievementCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'vendorIdentifier': value.vendorIdentifier,
        'points': value.points,
        'showBeforeEarned': value.showBeforeEarned,
        'repeatable': value.repeatable,
    };
}

