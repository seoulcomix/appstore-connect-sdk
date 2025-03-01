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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { SubscriptionGroupSubmission } from './SubscriptionGroupSubmission';
import {
    SubscriptionGroupSubmissionFromJSON,
    SubscriptionGroupSubmissionFromJSONTyped,
    SubscriptionGroupSubmissionToJSON,
} from './SubscriptionGroupSubmission';

/**
 * 
 * @export
 * @interface SubscriptionGroupSubmissionResponse
 */
export interface SubscriptionGroupSubmissionResponse {
    /**
     * 
     * @type {SubscriptionGroupSubmission}
     * @memberof SubscriptionGroupSubmissionResponse
     */
    data: SubscriptionGroupSubmission;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionGroupSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionGroupSubmissionResponse interface.
 */
export function instanceOfSubscriptionGroupSubmissionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionGroupSubmissionResponseFromJSON(json: any): SubscriptionGroupSubmissionResponse {
    return SubscriptionGroupSubmissionResponseFromJSONTyped(json, false);
}

export function SubscriptionGroupSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupSubmissionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionGroupSubmissionFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionGroupSubmissionResponseToJSON(value?: SubscriptionGroupSubmissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionGroupSubmissionToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

