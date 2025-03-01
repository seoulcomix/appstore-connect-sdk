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
import type { GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships } from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships';
import {
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON,
} from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestCreateRequestData
 */
export interface GameCenterMatchmakingRuleSetTestCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestData
     */
    type: GameCenterMatchmakingRuleSetTestCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestData
     */
    relationships: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetTestCreateRequestDataTypeEnum = {
    GameCenterMatchmakingRuleSetTests: 'gameCenterMatchmakingRuleSetTests'
} as const;
export type GameCenterMatchmakingRuleSetTestCreateRequestDataTypeEnum = typeof GameCenterMatchmakingRuleSetTestCreateRequestDataTypeEnum[keyof typeof GameCenterMatchmakingRuleSetTestCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequestData {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataToJSON(value?: GameCenterMatchmakingRuleSetTestCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

