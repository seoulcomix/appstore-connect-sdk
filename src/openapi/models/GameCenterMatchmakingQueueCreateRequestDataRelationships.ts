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
import type { GameCenterMatchmakingQueueRelationshipsRuleSet } from './GameCenterMatchmakingQueueRelationshipsRuleSet';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetToJSON,
} from './GameCenterMatchmakingQueueRelationshipsRuleSet';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestDataRelationships
 */
export interface GameCenterMatchmakingQueueCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationships
     */
    ruleSet: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationships
     */
    experimentRuleSet?: GameCenterMatchmakingQueueRelationshipsRuleSet;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ruleSet" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataRelationships {
    return GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json['ruleSet']),
        'experimentRuleSet': !exists(json, 'experimentRuleSet') ? undefined : GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON(json['experimentRuleSet']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON(value?: GameCenterMatchmakingQueueCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ruleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value.ruleSet),
        'experimentRuleSet': GameCenterMatchmakingQueueRelationshipsRuleSetToJSON(value.experimentRuleSet),
    };
}

