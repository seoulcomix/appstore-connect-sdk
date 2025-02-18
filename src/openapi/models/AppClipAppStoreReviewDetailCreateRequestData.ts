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
import type { AppClipAppStoreReviewDetailAttributes } from './AppClipAppStoreReviewDetailAttributes';
import {
    AppClipAppStoreReviewDetailAttributesFromJSON,
    AppClipAppStoreReviewDetailAttributesFromJSONTyped,
    AppClipAppStoreReviewDetailAttributesToJSON,
} from './AppClipAppStoreReviewDetailAttributes';
import type { AppClipAppStoreReviewDetailCreateRequestDataRelationships } from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';
import {
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON,
} from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailCreateRequestData
 */
export interface AppClipAppStoreReviewDetailCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailCreateRequestData
     */
    type: AppClipAppStoreReviewDetailCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailAttributes}
     * @memberof AppClipAppStoreReviewDetailCreateRequestData
     */
    attributes?: AppClipAppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppClipAppStoreReviewDetailCreateRequestData
     */
    relationships: AppClipAppStoreReviewDetailCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipAppStoreReviewDetailCreateRequestDataTypeEnum = {
    AppClipAppStoreReviewDetails: 'appClipAppStoreReviewDetails'
} as const;
export type AppClipAppStoreReviewDetailCreateRequestDataTypeEnum = typeof AppClipAppStoreReviewDetailCreateRequestDataTypeEnum[keyof typeof AppClipAppStoreReviewDetailCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipAppStoreReviewDetailCreateRequestData interface.
 */
export function instanceOfAppClipAppStoreReviewDetailCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailCreateRequestDataFromJSON(json: any): AppClipAppStoreReviewDetailCreateRequestData {
    return AppClipAppStoreReviewDetailCreateRequestDataFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipAppStoreReviewDetailCreateRequestDataToJSON(value?: AppClipAppStoreReviewDetailCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAppStoreReviewDetailAttributesToJSON(value.attributes),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

