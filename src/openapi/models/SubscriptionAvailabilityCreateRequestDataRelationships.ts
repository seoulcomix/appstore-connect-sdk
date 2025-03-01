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
import type { EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories } from './EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories';
import {
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSON,
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesToJSON,
} from './EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories';
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';

/**
 * 
 * @export
 * @interface SubscriptionAvailabilityCreateRequestDataRelationships
 */
export interface SubscriptionAvailabilityCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionAvailabilityCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories}
     * @memberof SubscriptionAvailabilityCreateRequestDataRelationships
     */
    availableTerritories: EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories;
}

/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionAvailabilityCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;
    isInstance = isInstance && "availableTerritories" in value;

    return isInstance;
}

export function SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionAvailabilityCreateRequestDataRelationships {
    return SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'availableTerritories': EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSON(json['availableTerritories']),
    };
}

export function SubscriptionAvailabilityCreateRequestDataRelationshipsToJSON(value?: SubscriptionAvailabilityCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        'availableTerritories': EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesToJSON(value.availableTerritories),
    };
}

