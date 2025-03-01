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
/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData
 */
export interface AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData
     */
    type: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataTypeEnum = {
    AppStoreReviewDetails: 'appStoreReviewDetails'
} as const;
export type AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataTypeEnum = typeof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataTypeEnum[keyof typeof AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData interface.
 */
export function instanceOfAppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSON(json: any): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData {
    return AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailDataToJSON(value?: AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

