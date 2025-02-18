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
 * @interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner
 */
export interface AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner
     */
    type: AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerTypeEnum = typeof AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerTypeEnum[keyof typeof AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner interface.
 */
export function instanceOfAppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerFromJSON(json: any): AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner {
    return AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerFromJSONTyped(json, false);
}

export function AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInnerToJSON(value?: AppStoreReviewDetailRelationshipsAppStoreReviewAttachmentsDataInner | null): any {
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

