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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { MerchantId } from './MerchantId';
import {
    MerchantIdFromJSON,
    MerchantIdFromJSONTyped,
    MerchantIdToJSON,
} from './MerchantId';

/**
 * 
 * @export
 * @interface MerchantIdResponse
 */
export interface MerchantIdResponse {
    /**
     * 
     * @type {MerchantId}
     * @memberof MerchantIdResponse
     */
    data: MerchantId;
    /**
     * 
     * @type {Array<Certificate>}
     * @memberof MerchantIdResponse
     */
    included?: Array<Certificate>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof MerchantIdResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the MerchantIdResponse interface.
 */
export function instanceOfMerchantIdResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function MerchantIdResponseFromJSON(json: any): MerchantIdResponse {
    return MerchantIdResponseFromJSONTyped(json, false);
}

export function MerchantIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': MerchantIdFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CertificateFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function MerchantIdResponseToJSON(value?: MerchantIdResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': MerchantIdToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CertificateToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

