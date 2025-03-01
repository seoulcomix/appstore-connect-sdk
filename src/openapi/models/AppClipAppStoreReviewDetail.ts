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
import type { AppClipAppStoreReviewDetailRelationships } from './AppClipAppStoreReviewDetailRelationships';
import {
    AppClipAppStoreReviewDetailRelationshipsFromJSON,
    AppClipAppStoreReviewDetailRelationshipsFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsToJSON,
} from './AppClipAppStoreReviewDetailRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetail
 */
export interface AppClipAppStoreReviewDetail {
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetail
     */
    type: AppClipAppStoreReviewDetailTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAppStoreReviewDetail
     */
    id: string;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailAttributes}
     * @memberof AppClipAppStoreReviewDetail
     */
    attributes?: AppClipAppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationships}
     * @memberof AppClipAppStoreReviewDetail
     */
    relationships?: AppClipAppStoreReviewDetailRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipAppStoreReviewDetail
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipAppStoreReviewDetailTypeEnum = {
    AppClipAppStoreReviewDetails: 'appClipAppStoreReviewDetails'
} as const;
export type AppClipAppStoreReviewDetailTypeEnum = typeof AppClipAppStoreReviewDetailTypeEnum[keyof typeof AppClipAppStoreReviewDetailTypeEnum];


/**
 * Check if a given object implements the AppClipAppStoreReviewDetail interface.
 */
export function instanceOfAppClipAppStoreReviewDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailFromJSON(json: any): AppClipAppStoreReviewDetail {
    return AppClipAppStoreReviewDetailFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppClipAppStoreReviewDetailRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipAppStoreReviewDetailToJSON(value?: AppClipAppStoreReviewDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAppStoreReviewDetailAttributesToJSON(value.attributes),
        'relationships': AppClipAppStoreReviewDetailRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

