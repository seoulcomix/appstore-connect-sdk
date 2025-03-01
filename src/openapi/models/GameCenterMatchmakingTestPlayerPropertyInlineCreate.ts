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
import type { GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes } from './GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes';
import {
    GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON,
    GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped,
    GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON,
} from './GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestPlayerPropertyInlineCreate
 */
export interface GameCenterMatchmakingTestPlayerPropertyInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestPlayerPropertyInlineCreate
     */
    type: GameCenterMatchmakingTestPlayerPropertyInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestPlayerPropertyInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes}
     * @memberof GameCenterMatchmakingTestPlayerPropertyInlineCreate
     */
    attributes: GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes;
}


/**
 * @export
 */
export const GameCenterMatchmakingTestPlayerPropertyInlineCreateTypeEnum = {
    GameCenterMatchmakingTestPlayerProperties: 'gameCenterMatchmakingTestPlayerProperties'
} as const;
export type GameCenterMatchmakingTestPlayerPropertyInlineCreateTypeEnum = typeof GameCenterMatchmakingTestPlayerPropertyInlineCreateTypeEnum[keyof typeof GameCenterMatchmakingTestPlayerPropertyInlineCreateTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTestPlayerPropertyInlineCreate interface.
 */
export function instanceOfGameCenterMatchmakingTestPlayerPropertyInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateFromJSON(json: any): GameCenterMatchmakingTestPlayerPropertyInlineCreate {
    return GameCenterMatchmakingTestPlayerPropertyInlineCreateFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestPlayerPropertyInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON(json['attributes']),
    };
}

export function GameCenterMatchmakingTestPlayerPropertyInlineCreateToJSON(value?: GameCenterMatchmakingTestPlayerPropertyInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON(value.attributes),
    };
}

