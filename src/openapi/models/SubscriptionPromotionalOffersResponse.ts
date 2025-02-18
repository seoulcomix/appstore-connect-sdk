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
import type { SubscriptionPromotionalOffer } from './SubscriptionPromotionalOffer';
import {
    SubscriptionPromotionalOfferFromJSON,
    SubscriptionPromotionalOfferFromJSONTyped,
    SubscriptionPromotionalOfferToJSON,
} from './SubscriptionPromotionalOffer';
import type { SubscriptionPromotionalOffersResponseIncludedInner } from './SubscriptionPromotionalOffersResponseIncludedInner';
import {
    SubscriptionPromotionalOffersResponseIncludedInnerFromJSON,
    SubscriptionPromotionalOffersResponseIncludedInnerFromJSONTyped,
    SubscriptionPromotionalOffersResponseIncludedInnerToJSON,
} from './SubscriptionPromotionalOffersResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOffersResponse
 */
export interface SubscriptionPromotionalOffersResponse {
    /**
     * 
     * @type {Array<SubscriptionPromotionalOffer>}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    data: Array<SubscriptionPromotionalOffer>;
    /**
     * 
     * @type {Array<SubscriptionPromotionalOffersResponseIncludedInner>}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    included?: Array<SubscriptionPromotionalOffersResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOffersResponse interface.
 */
export function instanceOfSubscriptionPromotionalOffersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionPromotionalOffersResponseFromJSON(json: any): SubscriptionPromotionalOffersResponse {
    return SubscriptionPromotionalOffersResponseFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionPromotionalOfferFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionPromotionalOffersResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionPromotionalOffersResponseToJSON(value?: SubscriptionPromotionalOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionPromotionalOfferToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionPromotionalOffersResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

