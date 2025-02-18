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
import type { AlternativeDistributionPackageVersion } from './AlternativeDistributionPackageVersion';
import {
    AlternativeDistributionPackageVersionFromJSON,
    AlternativeDistributionPackageVersionFromJSONTyped,
    AlternativeDistributionPackageVersionToJSON,
} from './AlternativeDistributionPackageVersion';
import type { AlternativeDistributionPackageVersionsResponseIncludedInner } from './AlternativeDistributionPackageVersionsResponseIncludedInner';
import {
    AlternativeDistributionPackageVersionsResponseIncludedInnerFromJSON,
    AlternativeDistributionPackageVersionsResponseIncludedInnerFromJSONTyped,
    AlternativeDistributionPackageVersionsResponseIncludedInnerToJSON,
} from './AlternativeDistributionPackageVersionsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVersionResponse
 */
export interface AlternativeDistributionPackageVersionResponse {
    /**
     * 
     * @type {AlternativeDistributionPackageVersion}
     * @memberof AlternativeDistributionPackageVersionResponse
     */
    data: AlternativeDistributionPackageVersion;
    /**
     * 
     * @type {Array<AlternativeDistributionPackageVersionsResponseIncludedInner>}
     * @memberof AlternativeDistributionPackageVersionResponse
     */
    included?: Array<AlternativeDistributionPackageVersionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVersionResponse interface.
 */
export function instanceOfAlternativeDistributionPackageVersionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AlternativeDistributionPackageVersionResponseFromJSON(json: any): AlternativeDistributionPackageVersionResponse {
    return AlternativeDistributionPackageVersionResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageVersionFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AlternativeDistributionPackageVersionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AlternativeDistributionPackageVersionResponseToJSON(value?: AlternativeDistributionPackageVersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AlternativeDistributionPackageVersionToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AlternativeDistributionPackageVersionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

