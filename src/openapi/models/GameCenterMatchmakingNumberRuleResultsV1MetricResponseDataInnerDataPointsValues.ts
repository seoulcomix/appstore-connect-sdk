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
 * @interface GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues
 */
export interface GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues {
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues
     */
    count?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues
     */
    averageResult?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues
     */
    p50Result?: number;
    /**
     * 
     * @type {number}
     * @memberof GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues
     */
    p95Result?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues {
    return GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'averageResult': !exists(json, 'averageResult') ? undefined : json['averageResult'],
        'p50Result': !exists(json, 'p50Result') ? undefined : json['p50Result'],
        'p95Result': !exists(json, 'p95Result') ? undefined : json['p95Result'],
    };
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesToJSON(value?: GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'averageResult': value.averageResult,
        'p50Result': value.p50Result,
        'p95Result': value.p95Result,
    };
}

