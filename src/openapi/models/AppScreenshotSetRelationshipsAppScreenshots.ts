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
import type { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
import {
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON,
} from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppScreenshotSetRelationshipsAppScreenshots
 */
export interface AppScreenshotSetRelationshipsAppScreenshots {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    data?: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;
}

/**
 * Check if a given object implements the AppScreenshotSetRelationshipsAppScreenshots interface.
 */
export function instanceOfAppScreenshotSetRelationshipsAppScreenshots(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppScreenshotSetRelationshipsAppScreenshotsFromJSON(json: any): AppScreenshotSetRelationshipsAppScreenshots {
    return AppScreenshotSetRelationshipsAppScreenshotsFromJSONTyped(json, false);
}

export function AppScreenshotSetRelationshipsAppScreenshotsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetRelationshipsAppScreenshots {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)),
    };
}

export function AppScreenshotSetRelationshipsAppScreenshotsToJSON(value?: AppScreenshotSetRelationshipsAppScreenshots | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)),
    };
}

