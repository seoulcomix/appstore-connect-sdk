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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { SubscriptionOfferCodePrice } from './SubscriptionOfferCodePrice';
import {
    SubscriptionOfferCodePriceFromJSON,
    SubscriptionOfferCodePriceFromJSONTyped,
    SubscriptionOfferCodePriceToJSON,
} from './SubscriptionOfferCodePrice';
import type { SubscriptionOfferCodePricesResponseIncludedInner } from './SubscriptionOfferCodePricesResponseIncludedInner';
import {
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSON,
    SubscriptionOfferCodePricesResponseIncludedInnerFromJSONTyped,
    SubscriptionOfferCodePricesResponseIncludedInnerToJSON,
} from './SubscriptionOfferCodePricesResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodePricesResponse
 */
export interface SubscriptionOfferCodePricesResponse {
    /**
     * 
     * @type {Array<SubscriptionOfferCodePrice>}
     * @memberof SubscriptionOfferCodePricesResponse
     */
    data: Array<SubscriptionOfferCodePrice>;
    /**
     * 
     * @type {Array<SubscriptionOfferCodePricesResponseIncludedInner>}
     * @memberof SubscriptionOfferCodePricesResponse
     */
    included?: Array<SubscriptionOfferCodePricesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionOfferCodePricesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodePricesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionOfferCodePricesResponse interface.
 */
export function instanceOfSubscriptionOfferCodePricesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodePricesResponseFromJSON(json: any): SubscriptionOfferCodePricesResponse {
    return SubscriptionOfferCodePricesResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodePricesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodePricesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionOfferCodePriceFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionOfferCodePricesResponseToJSON(value?: SubscriptionOfferCodePricesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionOfferCodePriceToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodePricesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

