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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from './AnalyticsReportRequestCreateRequestDataRelationships';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSON,
} from './AnalyticsReportRequestCreateRequestDataRelationships';
import type { GameCenterDetailCreateRequestDataAttributes } from './GameCenterDetailCreateRequestDataAttributes';
import {
    GameCenterDetailCreateRequestDataAttributesFromJSON,
    GameCenterDetailCreateRequestDataAttributesFromJSONTyped,
    GameCenterDetailCreateRequestDataAttributesToJSON,
} from './GameCenterDetailCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface GameCenterDetailCreateRequestData
 */
export interface GameCenterDetailCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof GameCenterDetailCreateRequestData
     */
    type: GameCenterDetailCreateRequestDataTypeEnum;
    /**
     * 
     * @type {GameCenterDetailCreateRequestDataAttributes}
     * @memberof GameCenterDetailCreateRequestData
     */
    attributes?: GameCenterDetailCreateRequestDataAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof GameCenterDetailCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const GameCenterDetailCreateRequestDataTypeEnum = {
    GameCenterDetails: 'gameCenterDetails'
} as const;
export type GameCenterDetailCreateRequestDataTypeEnum = typeof GameCenterDetailCreateRequestDataTypeEnum[keyof typeof GameCenterDetailCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the GameCenterDetailCreateRequestData interface.
 */
export function instanceOfGameCenterDetailCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterDetailCreateRequestDataFromJSON(json: any): GameCenterDetailCreateRequestData {
    return GameCenterDetailCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterDetailCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : GameCenterDetailCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function GameCenterDetailCreateRequestDataToJSON(value?: GameCenterDetailCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GameCenterDetailCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

