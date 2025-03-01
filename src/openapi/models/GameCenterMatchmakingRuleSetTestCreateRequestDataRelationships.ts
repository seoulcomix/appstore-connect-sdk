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
import type { GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests } from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests';
import {
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSON,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSONTyped,
    GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSON,
} from './GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
 */
export interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    /**
     * 
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
     */
    matchmakingRuleSet: GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet;
    /**
     * 
     * @type {GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships
     */
    matchmakingRequests: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "matchmakingRuleSet" in value;
    isInstance = isInstance && "matchmakingRequests" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'matchmakingRuleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON(json['matchmakingRuleSet']),
        'matchmakingRequests': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSON(json['matchmakingRequests']),
    };
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON(value?: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'matchmakingRuleSet': GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON(value.matchmakingRuleSet),
        'matchmakingRequests': GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSON(value.matchmakingRequests),
    };
}

