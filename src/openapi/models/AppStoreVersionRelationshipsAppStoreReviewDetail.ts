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
import type { AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData } from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';
import {
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSONTyped,
    AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON,
} from './AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreReviewDetail
 */
export interface AppStoreVersionRelationshipsAppStoreReviewDetail {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreReviewDetail
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData}
     * @memberof AppStoreVersionRelationshipsAppStoreReviewDetail
     */
    data?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreReviewDetail interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreReviewDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppStoreReviewDetailFromJSON(json: any): AppStoreVersionRelationshipsAppStoreReviewDetail {
    return AppStoreVersionRelationshipsAppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreReviewDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppStoreReviewDetailToJSON(value?: AppStoreVersionRelationshipsAppStoreReviewDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON(value.data),
    };
}

