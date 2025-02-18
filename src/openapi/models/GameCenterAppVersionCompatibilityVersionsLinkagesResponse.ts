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
import type { AppStoreVersionRelationshipsGameCenterAppVersionData } from './AppStoreVersionRelationshipsGameCenterAppVersionData';
import {
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON,
} from './AppStoreVersionRelationshipsGameCenterAppVersionData';
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
 * @interface GameCenterAppVersionCompatibilityVersionsLinkagesResponse
 */
export interface GameCenterAppVersionCompatibilityVersionsLinkagesResponse {
    /**
     * 
     * @type {Array<AppStoreVersionRelationshipsGameCenterAppVersionData>}
     * @memberof GameCenterAppVersionCompatibilityVersionsLinkagesResponse
     */
    data: Array<AppStoreVersionRelationshipsGameCenterAppVersionData>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterAppVersionCompatibilityVersionsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterAppVersionCompatibilityVersionsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterAppVersionCompatibilityVersionsLinkagesResponse interface.
 */
export function instanceOfGameCenterAppVersionCompatibilityVersionsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesResponseFromJSON(json: any): GameCenterAppVersionCompatibilityVersionsLinkagesResponse {
    return GameCenterAppVersionCompatibilityVersionsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionCompatibilityVersionsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesResponseToJSON(value?: GameCenterAppVersionCompatibilityVersionsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

