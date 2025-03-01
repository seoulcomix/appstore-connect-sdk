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
import type { SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes } from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';
import {
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSONTyped,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON,
} from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeUpdateRequestData
 */
export interface SubscriptionOfferCodeUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeUpdateRequestData
     */
    type: SubscriptionOfferCodeUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeUpdateRequestData
     */
    attributes?: SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SubscriptionOfferCodeUpdateRequestDataTypeEnum = {
    SubscriptionOfferCodes: 'subscriptionOfferCodes'
} as const;
export type SubscriptionOfferCodeUpdateRequestDataTypeEnum = typeof SubscriptionOfferCodeUpdateRequestDataTypeEnum[keyof typeof SubscriptionOfferCodeUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeUpdateRequestData interface.
 */
export function instanceOfSubscriptionOfferCodeUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeUpdateRequestDataFromJSON(json: any): SubscriptionOfferCodeUpdateRequestData {
    return SubscriptionOfferCodeUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionOfferCodeUpdateRequestDataToJSON(value?: SubscriptionOfferCodeUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

