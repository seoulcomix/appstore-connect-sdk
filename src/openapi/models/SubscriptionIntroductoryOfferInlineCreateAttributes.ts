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
 * @interface SubscriptionIntroductoryOfferInlineCreateAttributes
 */
export interface SubscriptionIntroductoryOfferInlineCreateAttributes {
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    endDate?: Date;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    numberOfPeriods: number;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateAttributes interface.
 */
export function instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "numberOfPeriods" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON(json: any): SubscriptionIntroductoryOfferInlineCreateAttributes {
    return SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferInlineCreateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'],
    };
}

export function SubscriptionIntroductoryOfferInlineCreateAttributesToJSON(value?: SubscriptionIntroductoryOfferInlineCreateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'duration': SubscriptionOfferDurationToJSON(value.duration),
        'offerMode': SubscriptionOfferModeToJSON(value.offerMode),
        'numberOfPeriods': value.numberOfPeriods,
    };
}

