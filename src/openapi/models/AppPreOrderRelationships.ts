/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppClipRelationshipsApp } from './AppClipRelationshipsApp';
import {
    AppClipRelationshipsAppFromJSON,
    AppClipRelationshipsAppFromJSONTyped,
    AppClipRelationshipsAppToJSON,
} from './AppClipRelationshipsApp';

/**
 * 
 * @export
 * @interface AppPreOrderRelationships
 */
export interface AppPreOrderRelationships {
    /**
     * 
     * @type {AppClipRelationshipsApp}
     * @memberof AppPreOrderRelationships
     */
    app?: AppClipRelationshipsApp;
}

/**
 * Check if a given object implements the AppPreOrderRelationships interface.
 */
export function instanceOfAppPreOrderRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreOrderRelationshipsFromJSON(json: any): AppPreOrderRelationships {
    return AppPreOrderRelationshipsFromJSONTyped(json, false);
}

export function AppPreOrderRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AppClipRelationshipsAppFromJSON(json['app']),
    };
}

export function AppPreOrderRelationshipsToJSON(value?: AppPreOrderRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppClipRelationshipsAppToJSON(value.app),
    };
}

