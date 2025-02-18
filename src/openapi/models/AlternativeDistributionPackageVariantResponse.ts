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
import type { AlternativeDistributionPackageVariant } from './AlternativeDistributionPackageVariant';
import {
    AlternativeDistributionPackageVariantFromJSON,
    AlternativeDistributionPackageVariantFromJSONTyped,
    AlternativeDistributionPackageVariantToJSON,
} from './AlternativeDistributionPackageVariant';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVariantResponse
 */
export interface AlternativeDistributionPackageVariantResponse {
    /**
     * 
     * @type {AlternativeDistributionPackageVariant}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    data: AlternativeDistributionPackageVariant;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVariantResponse interface.
 */
export function instanceOfAlternativeDistributionPackageVariantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AlternativeDistributionPackageVariantResponseFromJSON(json: any): AlternativeDistributionPackageVariantResponse {
    return AlternativeDistributionPackageVariantResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVariantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageVariantFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AlternativeDistributionPackageVariantResponseToJSON(value?: AlternativeDistributionPackageVariantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AlternativeDistributionPackageVariantToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

