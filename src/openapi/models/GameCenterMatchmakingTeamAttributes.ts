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
 * @interface GameCenterMatchmakingTeamAttributes
 */
export interface GameCenterMatchmakingTeamAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    minPlayers?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingTeamAttributes
     */
    maxPlayers?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamAttributes interface.
 */
export function instanceOfGameCenterMatchmakingTeamAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingTeamAttributesFromJSON(json: any): GameCenterMatchmakingTeamAttributes {
    return GameCenterMatchmakingTeamAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'minPlayers': !exists(json, 'minPlayers') ? undefined : json['minPlayers'],
        'maxPlayers': !exists(json, 'maxPlayers') ? undefined : json['maxPlayers'],
    };
}

export function GameCenterMatchmakingTeamAttributesToJSON(value?: GameCenterMatchmakingTeamAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'minPlayers': value.minPlayers,
        'maxPlayers': value.maxPlayers,
    };
}

