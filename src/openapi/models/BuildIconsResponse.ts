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
import type { BuildIcon } from './BuildIcon';
import {
    BuildIconFromJSON,
    BuildIconFromJSONTyped,
    BuildIconToJSON,
} from './BuildIcon';
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
 * @interface BuildIconsResponse
 */
export interface BuildIconsResponse {
    /**
     * 
     * @type {Array<BuildIcon>}
     * @memberof BuildIconsResponse
     */
    data: Array<BuildIcon>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BuildIconsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildIconsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BuildIconsResponse interface.
 */
export function instanceOfBuildIconsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildIconsResponseFromJSON(json: any): BuildIconsResponse {
    return BuildIconsResponseFromJSONTyped(json, false);
}

export function BuildIconsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BuildIconFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BuildIconsResponseToJSON(value?: BuildIconsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BuildIconToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

