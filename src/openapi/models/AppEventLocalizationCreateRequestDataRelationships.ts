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
import type { AppEventLocalizationCreateRequestDataRelationshipsAppEvent } from './AppEventLocalizationCreateRequestDataRelationshipsAppEvent';
import {
    AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSON,
    AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSONTyped,
    AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSON,
} from './AppEventLocalizationCreateRequestDataRelationshipsAppEvent';

/**
 * 
 * @export
 * @interface AppEventLocalizationCreateRequestDataRelationships
 */
export interface AppEventLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEventLocalizationCreateRequestDataRelationshipsAppEvent}
     * @memberof AppEventLocalizationCreateRequestDataRelationships
     */
    appEvent: AppEventLocalizationCreateRequestDataRelationshipsAppEvent;
}

/**
 * Check if a given object implements the AppEventLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppEventLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appEvent" in value;

    return isInstance;
}

export function AppEventLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppEventLocalizationCreateRequestDataRelationships {
    return AppEventLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appEvent': AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSON(json['appEvent']),
    };
}

export function AppEventLocalizationCreateRequestDataRelationshipsToJSON(value?: AppEventLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appEvent': AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSON(value.appEvent),
    };
}

