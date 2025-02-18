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
import type { SubscriptionCustomerEligibility } from './SubscriptionCustomerEligibility';
import {
    SubscriptionCustomerEligibilityFromJSON,
    SubscriptionCustomerEligibilityFromJSONTyped,
    SubscriptionCustomerEligibilityToJSON,
} from './SubscriptionCustomerEligibility';
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import {
    SubscriptionOfferDurationFromJSON,
    SubscriptionOfferDurationFromJSONTyped,
    SubscriptionOfferDurationToJSON,
} from './SubscriptionOfferDuration';
import type { SubscriptionOfferEligibility } from './SubscriptionOfferEligibility';
import {
    SubscriptionOfferEligibilityFromJSON,
    SubscriptionOfferEligibilityFromJSONTyped,
    SubscriptionOfferEligibilityToJSON,
} from './SubscriptionOfferEligibility';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
import {
    SubscriptionOfferModeFromJSON,
    SubscriptionOfferModeFromJSONTyped,
    SubscriptionOfferModeToJSON,
} from './SubscriptionOfferMode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequestDataAttributes
 */
export interface SubscriptionOfferCodeCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {Array<SubscriptionCustomerEligibility>}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    customerEligibilities: Array<SubscriptionCustomerEligibility>;
    /**
     * 
     * @type {SubscriptionOfferEligibility}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    offerEligibility: SubscriptionOfferEligibility;
    /**
     * 
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     * 
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionOfferCodeCreateRequestDataAttributes
     */
    numberOfPeriods: number;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "customerEligibilities" in value;
    isInstance = isInstance && "offerEligibility" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "numberOfPeriods" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCreateRequestDataAttributesFromJSON(json: any): SubscriptionOfferCodeCreateRequestDataAttributes {
    return SubscriptionOfferCodeCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'customerEligibilities': ((json['customerEligibilities'] as Array<any>).map(SubscriptionCustomerEligibilityFromJSON)),
        'offerEligibility': SubscriptionOfferEligibilityFromJSON(json['offerEligibility']),
        'duration': SubscriptionOfferDurationFromJSON(json['duration']),
        'offerMode': SubscriptionOfferModeFromJSON(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'],
    };
}

export function SubscriptionOfferCodeCreateRequestDataAttributesToJSON(value?: SubscriptionOfferCodeCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'customerEligibilities': ((value.customerEligibilities as Array<any>).map(SubscriptionCustomerEligibilityToJSON)),
        'offerEligibility': SubscriptionOfferEligibilityToJSON(value.offerEligibility),
        'duration': SubscriptionOfferDurationToJSON(value.duration),
        'offerMode': SubscriptionOfferModeToJSON(value.offerMode),
        'numberOfPeriods': value.numberOfPeriods,
    };
}

