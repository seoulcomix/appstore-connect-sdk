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
import type { AppStoreAgeRating } from './AppStoreAgeRating';
import {
    AppStoreAgeRatingFromJSON,
    AppStoreAgeRatingFromJSONTyped,
    AppStoreAgeRatingToJSON,
} from './AppStoreAgeRating';
import type { AppStoreVersionState } from './AppStoreVersionState';
import {
    AppStoreVersionStateFromJSON,
    AppStoreVersionStateFromJSONTyped,
    AppStoreVersionStateToJSON,
} from './AppStoreVersionState';
import type { BrazilAgeRating } from './BrazilAgeRating';
import {
    BrazilAgeRatingFromJSON,
    BrazilAgeRatingFromJSONTyped,
    BrazilAgeRatingToJSON,
} from './BrazilAgeRating';
import type { KidsAgeBand } from './KidsAgeBand';
import {
    KidsAgeBandFromJSON,
    KidsAgeBandFromJSONTyped,
    KidsAgeBandToJSON,
} from './KidsAgeBand';

/**
 * 
 * @export
 * @interface AppInfoAttributes
 */
export interface AppInfoAttributes {
    /**
     * 
     * @type {AppStoreVersionState}
     * @memberof AppInfoAttributes
     */
    appStoreState?: AppStoreVersionState;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    state?: AppInfoAttributesStateEnum;
    /**
     * 
     * @type {AppStoreAgeRating}
     * @memberof AppInfoAttributes
     */
    appStoreAgeRating?: AppStoreAgeRating;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    australiaAgeRating?: AppInfoAttributesAustraliaAgeRatingEnum;
    /**
     * 
     * @type {BrazilAgeRating}
     * @memberof AppInfoAttributes
     */
    brazilAgeRating?: BrazilAgeRating;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    brazilAgeRatingV2?: AppInfoAttributesBrazilAgeRatingV2Enum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    franceAgeRating?: AppInfoAttributesFranceAgeRatingEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    koreaAgeRating?: AppInfoAttributesKoreaAgeRatingEnum;
    /**
     * 
     * @type {KidsAgeBand}
     * @memberof AppInfoAttributes
     */
    kidsAgeBand?: KidsAgeBand;
}


/**
 * @export
 */
export const AppInfoAttributesStateEnum = {
    Accepted: 'ACCEPTED',
    DeveloperRejected: 'DEVELOPER_REJECTED',
    InReview: 'IN_REVIEW',
    PendingRelease: 'PENDING_RELEASE',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    ReadyForDistribution: 'READY_FOR_DISTRIBUTION',
    ReadyForReview: 'READY_FOR_REVIEW',
    Rejected: 'REJECTED',
    ReplacedWithNewInfo: 'REPLACED_WITH_NEW_INFO',
    WaitingForReview: 'WAITING_FOR_REVIEW'
} as const;
export type AppInfoAttributesStateEnum = typeof AppInfoAttributesStateEnum[keyof typeof AppInfoAttributesStateEnum];

/**
 * @export
 */
export const AppInfoAttributesAustraliaAgeRatingEnum = {
    Fifteen: 'FIFTEEN',
    Eighteen: 'EIGHTEEN'
} as const;
export type AppInfoAttributesAustraliaAgeRatingEnum = typeof AppInfoAttributesAustraliaAgeRatingEnum[keyof typeof AppInfoAttributesAustraliaAgeRatingEnum];

/**
 * @export
 */
export const AppInfoAttributesBrazilAgeRatingV2Enum = {
    SelfRatedL: 'SELF_RATED_L',
    SelfRatedTen: 'SELF_RATED_TEN',
    SelfRatedTwelve: 'SELF_RATED_TWELVE',
    SelfRatedFourteen: 'SELF_RATED_FOURTEEN',
    SelfRatedSixteen: 'SELF_RATED_SIXTEEN',
    SelfRatedEighteen: 'SELF_RATED_EIGHTEEN',
    OfficialL: 'OFFICIAL_L',
    OfficialTen: 'OFFICIAL_TEN',
    OfficialTwelve: 'OFFICIAL_TWELVE',
    OfficialFourteen: 'OFFICIAL_FOURTEEN',
    OfficialSixteen: 'OFFICIAL_SIXTEEN',
    OfficialEighteen: 'OFFICIAL_EIGHTEEN'
} as const;
export type AppInfoAttributesBrazilAgeRatingV2Enum = typeof AppInfoAttributesBrazilAgeRatingV2Enum[keyof typeof AppInfoAttributesBrazilAgeRatingV2Enum];

/**
 * @export
 */
export const AppInfoAttributesFranceAgeRatingEnum = {
    Eighteen: 'EIGHTEEN'
} as const;
export type AppInfoAttributesFranceAgeRatingEnum = typeof AppInfoAttributesFranceAgeRatingEnum[keyof typeof AppInfoAttributesFranceAgeRatingEnum];

/**
 * @export
 */
export const AppInfoAttributesKoreaAgeRatingEnum = {
    All: 'ALL',
    Twelve: 'TWELVE',
    Fifteen: 'FIFTEEN',
    Nineteen: 'NINETEEN',
    NotApplicable: 'NOT_APPLICABLE'
} as const;
export type AppInfoAttributesKoreaAgeRatingEnum = typeof AppInfoAttributesKoreaAgeRatingEnum[keyof typeof AppInfoAttributesKoreaAgeRatingEnum];


/**
 * Check if a given object implements the AppInfoAttributes interface.
 */
export function instanceOfAppInfoAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoAttributesFromJSON(json: any): AppInfoAttributes {
    return AppInfoAttributesFromJSONTyped(json, false);
}

export function AppInfoAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreState': !exists(json, 'appStoreState') ? undefined : AppStoreVersionStateFromJSON(json['appStoreState']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'appStoreAgeRating': !exists(json, 'appStoreAgeRating') ? undefined : AppStoreAgeRatingFromJSON(json['appStoreAgeRating']),
        'australiaAgeRating': !exists(json, 'australiaAgeRating') ? undefined : json['australiaAgeRating'],
        'brazilAgeRating': !exists(json, 'brazilAgeRating') ? undefined : BrazilAgeRatingFromJSON(json['brazilAgeRating']),
        'brazilAgeRatingV2': !exists(json, 'brazilAgeRatingV2') ? undefined : json['brazilAgeRatingV2'],
        'franceAgeRating': !exists(json, 'franceAgeRating') ? undefined : json['franceAgeRating'],
        'koreaAgeRating': !exists(json, 'koreaAgeRating') ? undefined : json['koreaAgeRating'],
        'kidsAgeBand': !exists(json, 'kidsAgeBand') ? undefined : KidsAgeBandFromJSON(json['kidsAgeBand']),
    };
}

export function AppInfoAttributesToJSON(value?: AppInfoAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreState': AppStoreVersionStateToJSON(value.appStoreState),
        'state': value.state,
        'appStoreAgeRating': AppStoreAgeRatingToJSON(value.appStoreAgeRating),
        'australiaAgeRating': value.australiaAgeRating,
        'brazilAgeRating': BrazilAgeRatingToJSON(value.brazilAgeRating),
        'brazilAgeRatingV2': value.brazilAgeRatingV2,
        'franceAgeRating': value.franceAgeRating,
        'koreaAgeRating': value.koreaAgeRating,
        'kidsAgeBand': KidsAgeBandToJSON(value.kidsAgeBand),
    };
}

