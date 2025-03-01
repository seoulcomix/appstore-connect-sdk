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
import type { BundleId } from './BundleId';
import {
    BundleIdFromJSON,
    BundleIdFromJSONTyped,
    BundleIdToJSON,
} from './BundleId';
import type { BundleIdsResponseIncludedInner } from './BundleIdsResponseIncludedInner';
import {
    BundleIdsResponseIncludedInnerFromJSON,
    BundleIdsResponseIncludedInnerFromJSONTyped,
    BundleIdsResponseIncludedInnerToJSON,
} from './BundleIdsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BundleIdResponse
 */
export interface BundleIdResponse {
    /**
     * 
     * @type {BundleId}
     * @memberof BundleIdResponse
     */
    data: BundleId;
    /**
     * 
     * @type {Array<BundleIdsResponseIncludedInner>}
     * @memberof BundleIdResponse
     */
    included?: Array<BundleIdsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BundleIdResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BundleIdResponse interface.
 */
export function instanceOfBundleIdResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BundleIdResponseFromJSON(json: any): BundleIdResponse {
    return BundleIdResponseFromJSONTyped(json, false);
}

export function BundleIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BundleIdFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BundleIdsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BundleIdResponseToJSON(value?: BundleIdResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BundleIdToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BundleIdsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

