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
import type { GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner } from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner';
import {
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSON,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSONTyped,
    GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSON,
} from './GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties
 */
export interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    /**
     * 
     * @type {Array<GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner>}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties
     */
    data?: Array<GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner>;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties interface.
 */
export function instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSON)),
    };
}

export function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSON(value?: GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSON)),
    };
}

