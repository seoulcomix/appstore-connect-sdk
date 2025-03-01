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
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
} from './SubscriptionOfferCode';
import type { SubscriptionOfferCodesResponseIncludedInner } from './SubscriptionOfferCodesResponseIncludedInner';
import {
    SubscriptionOfferCodesResponseIncludedInnerFromJSON,
    SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped,
    SubscriptionOfferCodesResponseIncludedInnerToJSON,
} from './SubscriptionOfferCodesResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeResponse
 */
export interface SubscriptionOfferCodeResponse {
    /**
     * 
     * @type {SubscriptionOfferCode}
     * @memberof SubscriptionOfferCodeResponse
     */
    data: SubscriptionOfferCode;
    /**
     * 
     * @type {Array<SubscriptionOfferCodesResponseIncludedInner>}
     * @memberof SubscriptionOfferCodeResponse
     */
    included?: Array<SubscriptionOfferCodesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeResponse interface.
 */
export function instanceOfSubscriptionOfferCodeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodeResponseFromJSON(json: any): SubscriptionOfferCodeResponse {
    return SubscriptionOfferCodeResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodeResponseToJSON(value?: SubscriptionOfferCodeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

