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
import type { SubscriptionGracePeriod } from './SubscriptionGracePeriod';
import {
    SubscriptionGracePeriodFromJSON,
    SubscriptionGracePeriodFromJSONTyped,
    SubscriptionGracePeriodToJSON,
} from './SubscriptionGracePeriod';

/**
 * 
 * @export
 * @interface SubscriptionGracePeriodResponse
 */
export interface SubscriptionGracePeriodResponse {
    /**
     * 
     * @type {SubscriptionGracePeriod}
     * @memberof SubscriptionGracePeriodResponse
     */
    data: SubscriptionGracePeriod;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionGracePeriodResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionGracePeriodResponse interface.
 */
export function instanceOfSubscriptionGracePeriodResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionGracePeriodResponseFromJSON(json: any): SubscriptionGracePeriodResponse {
    return SubscriptionGracePeriodResponseFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionGracePeriodFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionGracePeriodResponseToJSON(value?: SubscriptionGracePeriodResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionGracePeriodToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

