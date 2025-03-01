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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';
import type { SubscriptionAppStoreReviewScreenshot } from './SubscriptionAppStoreReviewScreenshot';
import {
    SubscriptionAppStoreReviewScreenshotFromJSON,
    SubscriptionAppStoreReviewScreenshotFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotToJSON,
} from './SubscriptionAppStoreReviewScreenshot';

/**
 * 
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotResponse
 */
export interface SubscriptionAppStoreReviewScreenshotResponse {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshot}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    data: SubscriptionAppStoreReviewScreenshot;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    included?: Array<Subscription>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotResponse interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionAppStoreReviewScreenshotResponseFromJSON(json: any): SubscriptionAppStoreReviewScreenshotResponse {
    return SubscriptionAppStoreReviewScreenshotResponseFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionAppStoreReviewScreenshotFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionAppStoreReviewScreenshotResponseToJSON(value?: SubscriptionAppStoreReviewScreenshotResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionAppStoreReviewScreenshotToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

