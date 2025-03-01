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

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience
 */
export interface AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData}
     * @memberof AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience
     */
    data: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience interface.
 */
export function instanceOfAppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperienceFromJSON(json: any): AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience {
    return AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperienceFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json['data']),
    };
}

export function AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperienceToJSON(value?: AppClipAppStoreReviewDetailCreateRequestDataRelationshipsAppClipDefaultExperience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value.data),
    };
}

