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
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
} from './BetaTester';
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
 * @interface BetaTestersWithoutIncludesResponse
 */
export interface BetaTestersWithoutIncludesResponse {
    /**
     * 
     * @type {Array<BetaTester>}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    data: Array<BetaTester>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTestersWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTestersWithoutIncludesResponse interface.
 */
export function instanceOfBetaTestersWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTestersWithoutIncludesResponseFromJSON(json: any): BetaTestersWithoutIncludesResponse {
    return BetaTestersWithoutIncludesResponseFromJSONTyped(json, false);
}

export function BetaTestersWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTestersWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaTesterFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTestersWithoutIncludesResponseToJSON(value?: BetaTestersWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaTesterToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

