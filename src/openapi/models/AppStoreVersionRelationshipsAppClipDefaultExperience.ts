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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppClipDefaultExperience
 */
export interface AppStoreVersionRelationshipsAppClipDefaultExperience {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAppClipDefaultExperience
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData}
     * @memberof AppStoreVersionRelationshipsAppClipDefaultExperience
     */
    data?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppClipDefaultExperience interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppClipDefaultExperience(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSON(json: any): AppStoreVersionRelationshipsAppClipDefaultExperience {
    return AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppClipDefaultExperience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppClipDefaultExperienceToJSON(value?: AppStoreVersionRelationshipsAppClipDefaultExperience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value.data),
    };
}

