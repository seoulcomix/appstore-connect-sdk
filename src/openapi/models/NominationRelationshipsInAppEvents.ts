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
import type { AppEventLocalizationRelationshipsAppEventData } from './AppEventLocalizationRelationshipsAppEventData';
import {
    AppEventLocalizationRelationshipsAppEventDataFromJSON,
    AppEventLocalizationRelationshipsAppEventDataFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventDataToJSON,
} from './AppEventLocalizationRelationshipsAppEventData';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface NominationRelationshipsInAppEvents
 */
export interface NominationRelationshipsInAppEvents {
    /**
     * 
     * @type {PagingInformation}
     * @memberof NominationRelationshipsInAppEvents
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppEventLocalizationRelationshipsAppEventData>}
     * @memberof NominationRelationshipsInAppEvents
     */
    data?: Array<AppEventLocalizationRelationshipsAppEventData>;
}

/**
 * Check if a given object implements the NominationRelationshipsInAppEvents interface.
 */
export function instanceOfNominationRelationshipsInAppEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NominationRelationshipsInAppEventsFromJSON(json: any): NominationRelationshipsInAppEvents {
    return NominationRelationshipsInAppEventsFromJSONTyped(json, false);
}

export function NominationRelationshipsInAppEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NominationRelationshipsInAppEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppEventLocalizationRelationshipsAppEventDataFromJSON)),
    };
}

export function NominationRelationshipsInAppEventsToJSON(value?: NominationRelationshipsInAppEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppEventLocalizationRelationshipsAppEventDataToJSON)),
    };
}

