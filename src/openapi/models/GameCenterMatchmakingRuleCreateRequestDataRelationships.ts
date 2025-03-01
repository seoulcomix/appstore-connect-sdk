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
import type { GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet } from './GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet';
import {
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSONTyped,
    GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON,
} from './GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleCreateRequestDataRelationships
 */
export interface GameCenterMatchmakingRuleCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingRuleCreateRequestDataRelationships
     */
    ruleSet: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterMatchmakingRuleCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ruleSet" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON(json: any): GameCenterMatchmakingRuleCreateRequestDataRelationships {
    return GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json['ruleSet']),
    };
}

export function GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON(value?: GameCenterMatchmakingRuleCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value.ruleSet),
    };
}

