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
import type { SubscriptionLocalization } from './SubscriptionLocalization';
import {
    SubscriptionLocalizationFromJSON,
    SubscriptionLocalizationFromJSONTyped,
    SubscriptionLocalizationToJSON,
} from './SubscriptionLocalization';

/**
 * 
 * @export
 * @interface SubscriptionLocalizationResponse
 */
export interface SubscriptionLocalizationResponse {
    /**
     * 
     * @type {SubscriptionLocalization}
     * @memberof SubscriptionLocalizationResponse
     */
    data: SubscriptionLocalization;
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof SubscriptionLocalizationResponse
     */
    included?: Array<Subscription>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionLocalizationResponse interface.
 */
export function instanceOfSubscriptionLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionLocalizationResponseFromJSON(json: any): SubscriptionLocalizationResponse {
    return SubscriptionLocalizationResponseFromJSONTyped(json, false);
}

export function SubscriptionLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionLocalizationResponseToJSON(value?: SubscriptionLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

