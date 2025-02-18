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
 * @interface GameCenterDetailAttributes
 */
export interface GameCenterDetailAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterDetailAttributes
     */
    arcadeEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterDetailAttributes
     */
    challengeEnabled?: boolean;
}

/**
 * Check if a given object implements the GameCenterDetailAttributes interface.
 */
export function instanceOfGameCenterDetailAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterDetailAttributesFromJSON(json: any): GameCenterDetailAttributes {
    return GameCenterDetailAttributesFromJSONTyped(json, false);
}

export function GameCenterDetailAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arcadeEnabled': !exists(json, 'arcadeEnabled') ? undefined : json['arcadeEnabled'],
        'challengeEnabled': !exists(json, 'challengeEnabled') ? undefined : json['challengeEnabled'],
    };
}

export function GameCenterDetailAttributesToJSON(value?: GameCenterDetailAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arcadeEnabled': value.arcadeEnabled,
        'challengeEnabled': value.challengeEnabled,
    };
}

