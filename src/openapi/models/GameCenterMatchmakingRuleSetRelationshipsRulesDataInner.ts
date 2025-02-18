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
 * @interface GameCenterMatchmakingRuleSetRelationshipsRulesDataInner
 */
export interface GameCenterMatchmakingRuleSetRelationshipsRulesDataInner {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsRulesDataInner
     */
    type: GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsRulesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerTypeEnum = {
    GameCenterMatchmakingRules: 'gameCenterMatchmakingRules'
} as const;
export type GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerTypeEnum = typeof GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerTypeEnum[keyof typeof GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetRelationshipsRulesDataInner interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetRelationshipsRulesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerFromJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsRulesDataInner {
    return GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetRelationshipsRulesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterMatchmakingRuleSetRelationshipsRulesDataInnerToJSON(value?: GameCenterMatchmakingRuleSetRelationshipsRulesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

