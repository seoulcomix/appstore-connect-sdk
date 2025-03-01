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
import type { MarketplaceWebhook } from './MarketplaceWebhook';
import {
    MarketplaceWebhookFromJSON,
    MarketplaceWebhookFromJSONTyped,
    MarketplaceWebhookToJSON,
} from './MarketplaceWebhook';
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

/**
 * 
 * @export
 * @interface MarketplaceWebhooksResponse
 */
export interface MarketplaceWebhooksResponse {
    /**
     * 
     * @type {Array<MarketplaceWebhook>}
     * @memberof MarketplaceWebhooksResponse
     */
    data: Array<MarketplaceWebhook>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof MarketplaceWebhooksResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof MarketplaceWebhooksResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the MarketplaceWebhooksResponse interface.
 */
export function instanceOfMarketplaceWebhooksResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MarketplaceWebhooksResponseFromJSON(json: any): MarketplaceWebhooksResponse {
    return MarketplaceWebhooksResponseFromJSONTyped(json, false);
}

export function MarketplaceWebhooksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhooksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MarketplaceWebhookFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function MarketplaceWebhooksResponseToJSON(value?: MarketplaceWebhooksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(MarketplaceWebhookToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

