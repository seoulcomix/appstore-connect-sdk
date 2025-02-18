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
import type { AppClipAdvancedExperienceAttributesPlaceDisplayPoint } from './AppClipAdvancedExperienceAttributesPlaceDisplayPoint';
import {
    AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON,
} from './AppClipAdvancedExperienceAttributesPlaceDisplayPoint';
import type { AppClipAdvancedExperienceAttributesPlaceMainAddress } from './AppClipAdvancedExperienceAttributesPlaceMainAddress';
import {
    AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSON,
    AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceMainAddressToJSON,
} from './AppClipAdvancedExperienceAttributesPlaceMainAddress';
import type { AppClipAdvancedExperienceAttributesPlacePhoneNumber } from './AppClipAdvancedExperienceAttributesPlacePhoneNumber';
import {
    AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSON,
    AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlacePhoneNumberToJSON,
} from './AppClipAdvancedExperienceAttributesPlacePhoneNumber';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceAttributesPlace
 */
export interface AppClipAdvancedExperienceAttributesPlace {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    placeId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    names?: Array<string>;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceMainAddress}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    mainAddress?: AppClipAdvancedExperienceAttributesPlaceMainAddress;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceDisplayPoint}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    displayPoint?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    mapAction?: AppClipAdvancedExperienceAttributesPlaceMapActionEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    relationship?: AppClipAdvancedExperienceAttributesPlaceRelationshipEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlacePhoneNumber}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    phoneNumber?: AppClipAdvancedExperienceAttributesPlacePhoneNumber;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    homePage?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    categories?: Array<string>;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceMapActionEnum = {
    BuyTickets: 'BUY_TICKETS',
    ViewAvailability: 'VIEW_AVAILABILITY',
    ViewPricing: 'VIEW_PRICING',
    HotelBookRoom: 'HOTEL_BOOK_ROOM',
    ParkingReserveParking: 'PARKING_RESERVE_PARKING',
    RestaurantJoinWaitlist: 'RESTAURANT_JOIN_WAITLIST',
    RestaurantOrderDelivery: 'RESTAURANT_ORDER_DELIVERY',
    RestaurantOrderFood: 'RESTAURANT_ORDER_FOOD',
    RestaurantOrderTakeout: 'RESTAURANT_ORDER_TAKEOUT',
    RestaurantReservation: 'RESTAURANT_RESERVATION',
    ScheduleAppointment: 'SCHEDULE_APPOINTMENT',
    RestaurantViewMenu: 'RESTAURANT_VIEW_MENU',
    TheaterNowPlaying: 'THEATER_NOW_PLAYING'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceMapActionEnum = typeof AppClipAdvancedExperienceAttributesPlaceMapActionEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceMapActionEnum];

/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceRelationshipEnum = {
    Owner: 'OWNER',
    Authorized: 'AUTHORIZED',
    Other: 'OTHER'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceRelationshipEnum = typeof AppClipAdvancedExperienceAttributesPlaceRelationshipEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceRelationshipEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlace interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributesPlace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceAttributesPlaceFromJSON(json: any): AppClipAdvancedExperienceAttributesPlace {
    return AppClipAdvancedExperienceAttributesPlaceFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'placeId': !exists(json, 'placeId') ? undefined : json['placeId'],
        'names': !exists(json, 'names') ? undefined : json['names'],
        'mainAddress': !exists(json, 'mainAddress') ? undefined : AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSON(json['mainAddress']),
        'displayPoint': !exists(json, 'displayPoint') ? undefined : AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON(json['displayPoint']),
        'mapAction': !exists(json, 'mapAction') ? undefined : json['mapAction'],
        'relationship': !exists(json, 'relationship') ? undefined : json['relationship'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSON(json['phoneNumber']),
        'homePage': !exists(json, 'homePage') ? undefined : json['homePage'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
    };
}

export function AppClipAdvancedExperienceAttributesPlaceToJSON(value?: AppClipAdvancedExperienceAttributesPlace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'placeId': value.placeId,
        'names': value.names,
        'mainAddress': AppClipAdvancedExperienceAttributesPlaceMainAddressToJSON(value.mainAddress),
        'displayPoint': AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON(value.displayPoint),
        'mapAction': value.mapAction,
        'relationship': value.relationship,
        'phoneNumber': AppClipAdvancedExperienceAttributesPlacePhoneNumberToJSON(value.phoneNumber),
        'homePage': value.homePage,
        'categories': value.categories,
    };
}

