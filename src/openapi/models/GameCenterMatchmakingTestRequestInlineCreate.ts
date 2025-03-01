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
import type { GameCenterMatchmakingTestRequestInlineCreateAttributes } from './GameCenterMatchmakingTestRequestInlineCreateAttributes';
import {
    GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSON,
    GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSONTyped,
    GameCenterMatchmakingTestRequestInlineCreateAttributesToJSON,
} from './GameCenterMatchmakingTestRequestInlineCreateAttributes';
import type { GameCenterMatchmakingTestRequestInlineCreateRelationships } from './GameCenterMatchmakingTestRequestInlineCreateRelationships';
import {
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON,
} from './GameCenterMatchmakingTestRequestInlineCreateRelationships';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreate
 */
export interface GameCenterMatchmakingTestRequestInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreate
     */
    type: GameCenterMatchmakingTestRequestInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {GameCenterMatchmakingTestRequestInlineCreateAttributes}
     * @memberof GameCenterMatchmakingTestRequestInlineCreate
     */
    attributes: GameCenterMatchmakingTestRequestInlineCreateAttributes;
    /**
     * 
     * @type {GameCenterMatchmakingTestRequestInlineCreateRelationships}
     * @memberof GameCenterMatchmakingTestRequestInlineCreate
     */
    relationships?: GameCenterMatchmakingTestRequestInlineCreateRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingTestRequestInlineCreateTypeEnum = {
    GameCenterMatchmakingTestRequests: 'gameCenterMatchmakingTestRequests'
} as const;
export type GameCenterMatchmakingTestRequestInlineCreateTypeEnum = typeof GameCenterMatchmakingTestRequestInlineCreateTypeEnum[keyof typeof GameCenterMatchmakingTestRequestInlineCreateTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreate interface.
 */
export function instanceOfGameCenterMatchmakingTestRequestInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function GameCenterMatchmakingTestRequestInlineCreateFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreate {
    return GameCenterMatchmakingTestRequestInlineCreateFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingTestRequestInlineCreateToJSON(value?: GameCenterMatchmakingTestRequestInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GameCenterMatchmakingTestRequestInlineCreateAttributesToJSON(value.attributes),
        'relationships': GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON(value.relationships),
    };
}

