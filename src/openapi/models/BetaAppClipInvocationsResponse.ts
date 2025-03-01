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
import type { BetaAppClipInvocation } from './BetaAppClipInvocation';
import {
    BetaAppClipInvocationFromJSON,
    BetaAppClipInvocationFromJSONTyped,
    BetaAppClipInvocationToJSON,
} from './BetaAppClipInvocation';
import type { BetaAppClipInvocationLocalization } from './BetaAppClipInvocationLocalization';
import {
    BetaAppClipInvocationLocalizationFromJSON,
    BetaAppClipInvocationLocalizationFromJSONTyped,
    BetaAppClipInvocationLocalizationToJSON,
} from './BetaAppClipInvocationLocalization';
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
 * @interface BetaAppClipInvocationsResponse
 */
export interface BetaAppClipInvocationsResponse {
    /**
     * 
     * @type {Array<BetaAppClipInvocation>}
     * @memberof BetaAppClipInvocationsResponse
     */
    data: Array<BetaAppClipInvocation>;
    /**
     * 
     * @type {Array<BetaAppClipInvocationLocalization>}
     * @memberof BetaAppClipInvocationsResponse
     */
    included?: Array<BetaAppClipInvocationLocalization>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaAppClipInvocationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaAppClipInvocationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaAppClipInvocationsResponse interface.
 */
export function instanceOfBetaAppClipInvocationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaAppClipInvocationsResponseFromJSON(json: any): BetaAppClipInvocationsResponse {
    return BetaAppClipInvocationsResponseFromJSONTyped(json, false);
}

export function BetaAppClipInvocationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaAppClipInvocationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BetaAppClipInvocationLocalizationFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaAppClipInvocationsResponseToJSON(value?: BetaAppClipInvocationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaAppClipInvocationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BetaAppClipInvocationLocalizationToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

