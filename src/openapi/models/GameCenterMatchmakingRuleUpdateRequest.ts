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
import type { GameCenterMatchmakingRuleUpdateRequestData } from './GameCenterMatchmakingRuleUpdateRequestData';
import {
    GameCenterMatchmakingRuleUpdateRequestDataFromJSON,
    GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped,
    GameCenterMatchmakingRuleUpdateRequestDataToJSON,
} from './GameCenterMatchmakingRuleUpdateRequestData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRuleUpdateRequest
 */
export interface GameCenterMatchmakingRuleUpdateRequest {
    /**
     * 
     * @type {GameCenterMatchmakingRuleUpdateRequestData}
     * @memberof GameCenterMatchmakingRuleUpdateRequest
     */
    data: GameCenterMatchmakingRuleUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleUpdateRequest interface.
 */
export function instanceOfGameCenterMatchmakingRuleUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleUpdateRequestFromJSON(json: any): GameCenterMatchmakingRuleUpdateRequest {
    return GameCenterMatchmakingRuleUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingRuleUpdateRequestDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingRuleUpdateRequestToJSON(value?: GameCenterMatchmakingRuleUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingRuleUpdateRequestDataToJSON(value.data),
    };
}

