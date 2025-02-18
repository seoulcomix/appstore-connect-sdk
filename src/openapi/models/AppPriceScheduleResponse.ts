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
import type { AppPriceSchedule } from './AppPriceSchedule';
import {
    AppPriceScheduleFromJSON,
    AppPriceScheduleFromJSONTyped,
    AppPriceScheduleToJSON,
} from './AppPriceSchedule';
import type { AppPriceScheduleResponseIncludedInner } from './AppPriceScheduleResponseIncludedInner';
import {
    AppPriceScheduleResponseIncludedInnerFromJSON,
    AppPriceScheduleResponseIncludedInnerFromJSONTyped,
    AppPriceScheduleResponseIncludedInnerToJSON,
} from './AppPriceScheduleResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPriceScheduleResponse
 */
export interface AppPriceScheduleResponse {
    /**
     * 
     * @type {AppPriceSchedule}
     * @memberof AppPriceScheduleResponse
     */
    data: AppPriceSchedule;
    /**
     * 
     * @type {Array<AppPriceScheduleResponseIncludedInner>}
     * @memberof AppPriceScheduleResponse
     */
    included?: Array<AppPriceScheduleResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPriceScheduleResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPriceScheduleResponse interface.
 */
export function instanceOfAppPriceScheduleResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPriceScheduleResponseFromJSON(json: any): AppPriceScheduleResponse {
    return AppPriceScheduleResponseFromJSONTyped(json, false);
}

export function AppPriceScheduleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPriceScheduleFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppPriceScheduleResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPriceScheduleResponseToJSON(value?: AppPriceScheduleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPriceScheduleToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppPriceScheduleResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

