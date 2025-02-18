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
import type { Certificate } from './Certificate';
import {
    CertificateFromJSON,
    CertificateFromJSONTyped,
    CertificateToJSON,
} from './Certificate';
import type { MerchantId } from './MerchantId';
import {
    MerchantIdFromJSON,
    MerchantIdFromJSONTyped,
    MerchantIdToJSON,
} from './MerchantId';
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
 * @interface MerchantIdsResponse
 */
export interface MerchantIdsResponse {
    /**
     * 
     * @type {Array<MerchantId>}
     * @memberof MerchantIdsResponse
     */
    data: Array<MerchantId>;
    /**
     * 
     * @type {Array<Certificate>}
     * @memberof MerchantIdsResponse
     */
    included?: Array<Certificate>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof MerchantIdsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof MerchantIdsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the MerchantIdsResponse interface.
 */
export function instanceOfMerchantIdsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MerchantIdsResponseFromJSON(json: any): MerchantIdsResponse {
    return MerchantIdsResponseFromJSONTyped(json, false);
}

export function MerchantIdsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantIdsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MerchantIdFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CertificateFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function MerchantIdsResponseToJSON(value?: MerchantIdsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(MerchantIdToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CertificateToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

