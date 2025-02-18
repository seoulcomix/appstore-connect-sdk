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
import type { SubscriptionAvailability } from './SubscriptionAvailability';
import {
    SubscriptionAvailabilityFromJSON,
    SubscriptionAvailabilityFromJSONTyped,
    SubscriptionAvailabilityToJSON,
} from './SubscriptionAvailability';
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * 
 * @export
 * @interface SubscriptionAvailabilityResponse
 */
export interface SubscriptionAvailabilityResponse {
    /**
     * 
     * @type {SubscriptionAvailability}
     * @memberof SubscriptionAvailabilityResponse
     */
    data: SubscriptionAvailability;
    /**
     * 
     * @type {Array<Territory>}
     * @memberof SubscriptionAvailabilityResponse
     */
    included?: Array<Territory>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionAvailabilityResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionAvailabilityResponse interface.
 */
export function instanceOfSubscriptionAvailabilityResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionAvailabilityResponseFromJSON(json: any): SubscriptionAvailabilityResponse {
    return SubscriptionAvailabilityResponseFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionAvailabilityFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(TerritoryFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionAvailabilityResponseToJSON(value?: SubscriptionAvailabilityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionAvailabilityToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(TerritoryToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

