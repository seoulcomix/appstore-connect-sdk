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
import type { InAppPurchaseLocalizationUpdateRequestDataAttributes } from './InAppPurchaseLocalizationUpdateRequestDataAttributes';
import {
    InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSON,
    InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSONTyped,
    InAppPurchaseLocalizationUpdateRequestDataAttributesToJSON,
} from './InAppPurchaseLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionLocalizationUpdateRequestData
 */
export interface SubscriptionLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    type: SubscriptionLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseLocalizationUpdateRequestDataAttributes}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    attributes?: InAppPurchaseLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SubscriptionLocalizationUpdateRequestDataTypeEnum = {
    SubscriptionLocalizations: 'subscriptionLocalizations'
} as const;
export type SubscriptionLocalizationUpdateRequestDataTypeEnum = typeof SubscriptionLocalizationUpdateRequestDataTypeEnum[keyof typeof SubscriptionLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionLocalizationUpdateRequestData interface.
 */
export function instanceOfSubscriptionLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionLocalizationUpdateRequestDataFromJSON(json: any): SubscriptionLocalizationUpdateRequestData {
    return SubscriptionLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionLocalizationUpdateRequestDataToJSON(value?: SubscriptionLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': InAppPurchaseLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

