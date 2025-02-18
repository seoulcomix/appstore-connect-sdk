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
import type { IntegerRange } from './IntegerRange';
import {
    IntegerRangeFromJSON,
    IntegerRangeFromJSONTyped,
    IntegerRangeToJSON,
} from './IntegerRange';
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import {
    SubscriptionOfferDurationFromJSON,
    SubscriptionOfferDurationFromJSONTyped,
    SubscriptionOfferDurationToJSON,
} from './SubscriptionOfferDuration';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
import {
    SubscriptionOfferModeFromJSON,
    SubscriptionOfferModeFromJSONTyped,
    SubscriptionOfferModeToJSON,
} from './SubscriptionOfferMode';

/**
 * 
 * @export
 * @interface WinBackOfferAttributes
 */
export interface WinBackOfferAttributes {
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    offerId?: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof WinBackOfferAttributes
     */
    duration?: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof WinBackOfferAttributes
     */
    offerMode?: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    periodCount?: number;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityPaidSubscriptionDurationInMonths?: number;
    /**
     * 
     * @type {IntegerRange}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityTimeSinceLastSubscribedInMonths?: IntegerRange;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferAttributes
     */
    customerEligibilityWaitBetweenOffersInMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    priority?: WinBackOfferAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferAttributes
     */
    promotionIntent?: WinBackOfferAttributesPromotionIntentEnum;
}


/**
 * @export
 */
export const WinBackOfferAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type WinBackOfferAttributesPriorityEnum = typeof WinBackOfferAttributesPriorityEnum[keyof typeof WinBackOfferAttributesPriorityEnum];

/**
 * @export
 */
export const WinBackOfferAttributesPromotionIntentEnum = {
    NotPromoted: 'NOT_PROMOTED',
    UseAutoGeneratedAssets: 'USE_AUTO_GENERATED_ASSETS'
} as const;
export type WinBackOfferAttributesPromotionIntentEnum = typeof WinBackOfferAttributesPromotionIntentEnum[keyof typeof WinBackOfferAttributesPromotionIntentEnum];


/**
 * Check if a given object implements the WinBackOfferAttributes interface.
 */
export function instanceOfWinBackOfferAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WinBackOfferAttributesFromJSON(json: any): WinBackOfferAttributes {
    return WinBackOfferAttributesFromJSONTyped(json, false);
}

export function WinBackOfferAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'duration': !exists(json, 'duration') ? undefined : SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': !exists(json, 'offerMode') ? undefined : SubscriptionOfferModeFromJSON(json['offerMode']),
        'periodCount': !exists(json, 'periodCount') ? undefined : json['periodCount'],
        'customerEligibilityPaidSubscriptionDurationInMonths': !exists(json, 'customerEligibilityPaidSubscriptionDurationInMonths') ? undefined : json['customerEligibilityPaidSubscriptionDurationInMonths'],
        'customerEligibilityTimeSinceLastSubscribedInMonths': !exists(json, 'customerEligibilityTimeSinceLastSubscribedInMonths') ? undefined : IntegerRangeFromJSON(json['customerEligibilityTimeSinceLastSubscribedInMonths']),
        'customerEligibilityWaitBetweenOffersInMonths': !exists(json, 'customerEligibilityWaitBetweenOffersInMonths') ? undefined : json['customerEligibilityWaitBetweenOffersInMonths'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'promotionIntent': !exists(json, 'promotionIntent') ? undefined : json['promotionIntent'],
    };
}

export function WinBackOfferAttributesToJSON(value?: WinBackOfferAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
        'offerId': value.offerId,
        'duration': SubscriptionOfferDurationToJSON(value.duration),
        'offerMode': SubscriptionOfferModeToJSON(value.offerMode),
        'periodCount': value.periodCount,
        'customerEligibilityPaidSubscriptionDurationInMonths': value.customerEligibilityPaidSubscriptionDurationInMonths,
        'customerEligibilityTimeSinceLastSubscribedInMonths': IntegerRangeToJSON(value.customerEligibilityTimeSinceLastSubscribedInMonths),
        'customerEligibilityWaitBetweenOffersInMonths': value.customerEligibilityWaitBetweenOffersInMonths,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'priority': value.priority,
        'promotionIntent': value.promotionIntent,
    };
}

