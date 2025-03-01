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
import type { SubscriptionImage } from './SubscriptionImage';
import {
    SubscriptionImageFromJSON,
    SubscriptionImageFromJSONTyped,
    SubscriptionImageToJSON,
} from './SubscriptionImage';

/**
 * 
 * @export
 * @interface SubscriptionImageResponse
 */
export interface SubscriptionImageResponse {
    /**
     * 
     * @type {SubscriptionImage}
     * @memberof SubscriptionImageResponse
     */
    data: SubscriptionImage;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof SubscriptionImageResponse
     */
    included?: Array<Subscription>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionImageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionImageResponse interface.
 */
export function instanceOfSubscriptionImageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionImageResponseFromJSON(json: any): SubscriptionImageResponse {
    return SubscriptionImageResponseFromJSONTyped(json, false);
}

export function SubscriptionImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionImageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionImageFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionImageResponseToJSON(value?: SubscriptionImageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionImageToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

