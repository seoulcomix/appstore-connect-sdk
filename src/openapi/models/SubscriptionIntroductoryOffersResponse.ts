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
import type { SubscriptionIntroductoryOffer } from './SubscriptionIntroductoryOffer';
import {
    SubscriptionIntroductoryOfferFromJSON,
    SubscriptionIntroductoryOfferFromJSONTyped,
    SubscriptionIntroductoryOfferToJSON,
} from './SubscriptionIntroductoryOffer';
import type { SubscriptionIntroductoryOffersResponseIncludedInner } from './SubscriptionIntroductoryOffersResponseIncludedInner';
import {
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON,
    SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped,
    SubscriptionIntroductoryOffersResponseIncludedInnerToJSON,
} from './SubscriptionIntroductoryOffersResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionIntroductoryOffersResponse
 */
export interface SubscriptionIntroductoryOffersResponse {
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffer>}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    data: Array<SubscriptionIntroductoryOffer>;
    /**
     * 
     * @type {Array<SubscriptionIntroductoryOffersResponseIncludedInner>}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    included?: Array<SubscriptionIntroductoryOffersResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionIntroductoryOffersResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOffersResponse interface.
 */
export function instanceOfSubscriptionIntroductoryOffersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOffersResponseFromJSON(json: any): SubscriptionIntroductoryOffersResponse {
    return SubscriptionIntroductoryOffersResponseFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionIntroductoryOfferFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionIntroductoryOffersResponseToJSON(value?: SubscriptionIntroductoryOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionIntroductoryOfferToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionIntroductoryOffersResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

