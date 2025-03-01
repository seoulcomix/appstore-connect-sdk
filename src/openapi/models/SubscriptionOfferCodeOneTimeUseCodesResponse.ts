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
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
} from './SubscriptionOfferCode';
import type { SubscriptionOfferCodeOneTimeUseCode } from './SubscriptionOfferCodeOneTimeUseCode';
import {
    SubscriptionOfferCodeOneTimeUseCodeFromJSON,
    SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped,
    SubscriptionOfferCodeOneTimeUseCodeToJSON,
} from './SubscriptionOfferCodeOneTimeUseCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodesResponse
 */
export interface SubscriptionOfferCodeOneTimeUseCodesResponse {
    /**
     * 
     * @type {Array<SubscriptionOfferCodeOneTimeUseCode>}
     * @memberof SubscriptionOfferCodeOneTimeUseCodesResponse
     */
    data: Array<SubscriptionOfferCodeOneTimeUseCode>;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeOneTimeUseCodesResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionOfferCodeOneTimeUseCodesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeOneTimeUseCodesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodesResponse interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodeOneTimeUseCodesResponseFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodesResponse {
    return SubscriptionOfferCodeOneTimeUseCodesResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionOfferCodeOneTimeUseCodeFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionOfferCodeOneTimeUseCodesResponseToJSON(value?: SubscriptionOfferCodeOneTimeUseCodesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionOfferCodeOneTimeUseCodeToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

