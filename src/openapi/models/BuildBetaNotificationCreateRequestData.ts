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
import type { BetaAppReviewSubmissionCreateRequestDataRelationships } from './BetaAppReviewSubmissionCreateRequestDataRelationships';
import {
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSONTyped,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON,
} from './BetaAppReviewSubmissionCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BuildBetaNotificationCreateRequestData
 */
export interface BuildBetaNotificationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BuildBetaNotificationCreateRequestData
     */
    type: BuildBetaNotificationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaAppReviewSubmissionCreateRequestDataRelationships}
     * @memberof BuildBetaNotificationCreateRequestData
     */
    relationships: BetaAppReviewSubmissionCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BuildBetaNotificationCreateRequestDataTypeEnum = {
    BuildBetaNotifications: 'buildBetaNotifications'
} as const;
export type BuildBetaNotificationCreateRequestDataTypeEnum = typeof BuildBetaNotificationCreateRequestDataTypeEnum[keyof typeof BuildBetaNotificationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BuildBetaNotificationCreateRequestData interface.
 */
export function instanceOfBuildBetaNotificationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BuildBetaNotificationCreateRequestDataFromJSON(json: any): BuildBetaNotificationCreateRequestData {
    return BuildBetaNotificationCreateRequestDataFromJSONTyped(json, false);
}

export function BuildBetaNotificationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotificationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BuildBetaNotificationCreateRequestDataToJSON(value?: BuildBetaNotificationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

