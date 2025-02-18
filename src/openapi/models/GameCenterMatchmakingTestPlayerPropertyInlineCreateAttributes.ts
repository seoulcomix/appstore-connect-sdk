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
import type { Property } from './Property';
import {
    PropertyFromJSON,
    PropertyFromJSONTyped,
    PropertyToJSON,
} from './Property';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes
 */
export interface GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes
     */
    playerId: string;
    /**
     * 
     * @type {Array<Property>}
     * @memberof GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes
     */
    properties?: Array<Property>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes interface.
 */
export function instanceOfGameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "playerId" in value;

    return isInstance;
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON(json: any): GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes {
    return GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playerId': json['playerId'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(PropertyFromJSON)),
    };
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON(value?: GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'playerId': value.playerId,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(PropertyToJSON)),
    };
}

