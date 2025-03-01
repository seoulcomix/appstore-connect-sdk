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
 * @interface WinBackOfferCreateRequestDataAttributes
 */
export interface WinBackOfferCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    offerId: string;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    periodCount: number;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityPaidSubscriptionDurationInMonths: number;
    /**
     * 
     * @type {IntegerRange}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityTimeSinceLastSubscribedInMonths: IntegerRange;
    /**
     * 
     * @type {number}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    customerEligibilityWaitBetweenOffersInMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    priority: WinBackOfferCreateRequestDataAttributesPriorityEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOfferCreateRequestDataAttributes
     */
    promotionIntent?: WinBackOfferCreateRequestDataAttributesPromotionIntentEnum;
}


/**
 * @export
 */
export const WinBackOfferCreateRequestDataAttributesPriorityEnum = {
    High: 'HIGH',
    Normal: 'NORMAL'
} as const;
export type WinBackOfferCreateRequestDataAttributesPriorityEnum = typeof WinBackOfferCreateRequestDataAttributesPriorityEnum[keyof typeof WinBackOfferCreateRequestDataAttributesPriorityEnum];

/**
 * @export
 */
export const WinBackOfferCreateRequestDataAttributesPromotionIntentEnum = {
    NotPromoted: 'NOT_PROMOTED',
    UseAutoGeneratedAssets: 'USE_AUTO_GENERATED_ASSETS'
} as const;
export type WinBackOfferCreateRequestDataAttributesPromotionIntentEnum = typeof WinBackOfferCreateRequestDataAttributesPromotionIntentEnum[keyof typeof WinBackOfferCreateRequestDataAttributesPromotionIntentEnum];


/**
 * Check if a given object implements the WinBackOfferCreateRequestDataAttributes interface.
 */
export function instanceOfWinBackOfferCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceName" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "periodCount" in value;
    isInstance = isInstance && "customerEligibilityPaidSubscriptionDurationInMonths" in value;
    isInstance = isInstance && "customerEligibilityTimeSinceLastSubscribedInMonths" in value;
    isInstance = isInstance && "startDate" in value;
    isInstance = isInstance && "priority" in value;

    return isInstance;
}

export function WinBackOfferCreateRequestDataAttributesFromJSON(json: any): WinBackOfferCreateRequestDataAttributes {
    return WinBackOfferCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function WinBackOfferCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOfferCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': json['referenceName'],
        'offerId': json['offerId'],
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'periodCount': json['periodCount'],
        'customerEligibilityPaidSubscriptionDurationInMonths': json['customerEligibilityPaidSubscriptionDurationInMonths'],
        'customerEligibilityTimeSinceLastSubscribedInMonths': IntegerRangeFromJSON(json['customerEligibilityTimeSinceLastSubscribedInMonths']),
        'customerEligibilityWaitBetweenOffersInMonths': !exists(json, 'customerEligibilityWaitBetweenOffersInMonths') ? undefined : json['customerEligibilityWaitBetweenOffersInMonths'],
        'startDate': (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'priority': json['priority'],
        'promotionIntent': !exists(json, 'promotionIntent') ? undefined : json['promotionIntent'],
    };
}

export function WinBackOfferCreateRequestDataAttributesToJSON(value?: WinBackOfferCreateRequestDataAttributes | null): any {
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
        'startDate': (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'priority': value.priority,
        'promotionIntent': value.promotionIntent,
    };
}

