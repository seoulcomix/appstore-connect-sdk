/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppEventLocalizationRelationshipsAppEventData } from './AppEventLocalizationRelationshipsAppEventData';
import {
    AppEventLocalizationRelationshipsAppEventDataFromJSON,
    AppEventLocalizationRelationshipsAppEventDataFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventDataToJSON,
} from './AppEventLocalizationRelationshipsAppEventData';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent
 */
export interface ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent {
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEventData}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent
     */
    data?: AppEventLocalizationRelationshipsAppEventData;
}

/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent interface.
 */
export function instanceOfReviewSubmissionItemCreateRequestDataRelationshipsAppEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsAppEventFromJSON(json: any): ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent {
    return ReviewSubmissionItemCreateRequestDataRelationshipsAppEventFromJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsAppEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppEventLocalizationRelationshipsAppEventDataFromJSON(json['data']),
    };
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsAppEventToJSON(value?: ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventLocalizationRelationshipsAppEventDataToJSON(value.data),
    };
}

