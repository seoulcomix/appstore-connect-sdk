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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters } from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON,
} from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult } from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';
import {
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSONTyped,
    GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON,
} from './GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
 */
export interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    /**
     * 
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    result?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResult;
    /**
     * 
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    gameCenterDetail?: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultFromJSON(json['result']),
        'gameCenterDetail': !exists(json, 'gameCenterDetail') ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON(json['gameCenterDetail']),
    };
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON(value?: GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsResultToJSON(value.result),
        'gameCenterDetail': AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON(value.gameCenterDetail),
    };
}

