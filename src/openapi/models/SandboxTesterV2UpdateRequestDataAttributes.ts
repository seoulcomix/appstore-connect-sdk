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
import type { TerritoryCode } from './TerritoryCode';
import {
    TerritoryCodeFromJSON,
    TerritoryCodeFromJSONTyped,
    TerritoryCodeToJSON,
} from './TerritoryCode';

/**
 * 
 * @export
 * @interface SandboxTesterV2UpdateRequestDataAttributes
 */
export interface SandboxTesterV2UpdateRequestDataAttributes {
    /**
     * 
     * @type {TerritoryCode}
     * @memberof SandboxTesterV2UpdateRequestDataAttributes
     */
    territory?: TerritoryCode;
    /**
     * 
     * @type {boolean}
     * @memberof SandboxTesterV2UpdateRequestDataAttributes
     */
    interruptPurchases?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SandboxTesterV2UpdateRequestDataAttributes
     */
    subscriptionRenewalRate?: SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum;
}


/**
 * @export
 */
export const SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum = {
    OneHour: 'MONTHLY_RENEWAL_EVERY_ONE_HOUR',
    ThirtyMinutes: 'MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES',
    FifteenMinutes: 'MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES',
    FiveMinutes: 'MONTHLY_RENEWAL_EVERY_FIVE_MINUTES',
    ThreeMinutes: 'MONTHLY_RENEWAL_EVERY_THREE_MINUTES'
} as const;
export type SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum = typeof SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum[keyof typeof SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum];


/**
 * Check if a given object implements the SandboxTesterV2UpdateRequestDataAttributes interface.
 */
export function instanceOfSandboxTesterV2UpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SandboxTesterV2UpdateRequestDataAttributesFromJSON(json: any): SandboxTesterV2UpdateRequestDataAttributes {
    return SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2UpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'territory': !exists(json, 'territory') ? undefined : TerritoryCodeFromJSON(json['territory']),
        'interruptPurchases': !exists(json, 'interruptPurchases') ? undefined : json['interruptPurchases'],
        'subscriptionRenewalRate': !exists(json, 'subscriptionRenewalRate') ? undefined : json['subscriptionRenewalRate'],
    };
}

export function SandboxTesterV2UpdateRequestDataAttributesToJSON(value?: SandboxTesterV2UpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'territory': TerritoryCodeToJSON(value.territory),
        'interruptPurchases': value.interruptPurchases,
        'subscriptionRenewalRate': value.subscriptionRenewalRate,
    };
}

