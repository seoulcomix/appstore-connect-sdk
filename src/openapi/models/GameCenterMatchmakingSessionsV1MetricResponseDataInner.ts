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
import type { GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints } from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints';
import {
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped,
    GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON,
} from './GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInner
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInner {
    /**
     * 
     * @type {GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInner
     */
    dataPoints?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInner
     */
    granularity?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum;
}


/**
 * @export
 */
export const GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum = typeof GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum[keyof typeof GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInner interface.
 */
export function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInner {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataPoints': !exists(json, 'dataPoints') ? undefined : GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON(json['dataPoints']),
        'granularity': !exists(json, 'granularity') ? undefined : json['granularity'],
    };
}

export function GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataPoints': GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON(value.dataPoints),
        'granularity': value.granularity,
    };
}

