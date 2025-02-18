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
import type { Territory } from './Territory';
import {
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * 
 * @export
 * @interface TerritoriesWithoutIncludesResponse
 */
export interface TerritoriesWithoutIncludesResponse {
    /**
     * 
     * @type {Array<Territory>}
     * @memberof TerritoriesWithoutIncludesResponse
     */
    data: Array<Territory>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof TerritoriesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof TerritoriesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the TerritoriesWithoutIncludesResponse interface.
 */
export function instanceOfTerritoriesWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function TerritoriesWithoutIncludesResponseFromJSON(json: any): TerritoriesWithoutIncludesResponse {
    return TerritoriesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function TerritoriesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoriesWithoutIncludesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(TerritoryFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function TerritoriesWithoutIncludesResponseToJSON(value?: TerritoriesWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(TerritoryToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

