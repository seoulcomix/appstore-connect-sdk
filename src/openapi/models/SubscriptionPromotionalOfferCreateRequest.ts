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
import type { SubscriptionPromotionalOfferCreateRequestData } from './SubscriptionPromotionalOfferCreateRequestData';
import {
    SubscriptionPromotionalOfferCreateRequestDataFromJSON,
    SubscriptionPromotionalOfferCreateRequestDataFromJSONTyped,
    SubscriptionPromotionalOfferCreateRequestDataToJSON,
} from './SubscriptionPromotionalOfferCreateRequestData';
import type { SubscriptionPromotionalOfferPriceInlineCreate } from './SubscriptionPromotionalOfferPriceInlineCreate';
import {
    SubscriptionPromotionalOfferPriceInlineCreateFromJSON,
    SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped,
    SubscriptionPromotionalOfferPriceInlineCreateToJSON,
} from './SubscriptionPromotionalOfferPriceInlineCreate';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferCreateRequest
 */
export interface SubscriptionPromotionalOfferCreateRequest {
    /**
     * 
     * @type {SubscriptionPromotionalOfferCreateRequestData}
     * @memberof SubscriptionPromotionalOfferCreateRequest
     */
    data: SubscriptionPromotionalOfferCreateRequestData;
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferPriceInlineCreate>}
     * @memberof SubscriptionPromotionalOfferCreateRequest
     */
    included?: Array<SubscriptionPromotionalOfferPriceInlineCreate>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequest interface.
 */
export function instanceOfSubscriptionPromotionalOfferCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferCreateRequestFromJSON(json: any): SubscriptionPromotionalOfferCreateRequest {
    return SubscriptionPromotionalOfferCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionPromotionalOfferCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionPromotionalOfferPriceInlineCreateFromJSON)),
    };
}

export function SubscriptionPromotionalOfferCreateRequestToJSON(value?: SubscriptionPromotionalOfferCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionPromotionalOfferCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionPromotionalOfferPriceInlineCreateToJSON)),
    };
}

