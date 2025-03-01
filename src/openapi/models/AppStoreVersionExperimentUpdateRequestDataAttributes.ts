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
/**
 * 
 * @export
 * @interface AppStoreVersionExperimentUpdateRequestDataAttributes
 */
export interface AppStoreVersionExperimentUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionExperimentUpdateRequestDataAttributes
     */
    trafficProportion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppStoreVersionExperimentUpdateRequestDataAttributes
     */
    started?: boolean;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentUpdateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentUpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentUpdateRequestDataAttributes {
    return AppStoreVersionExperimentUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'trafficProportion': !exists(json, 'trafficProportion') ? undefined : json['trafficProportion'],
        'started': !exists(json, 'started') ? undefined : json['started'],
    };
}

export function AppStoreVersionExperimentUpdateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'trafficProportion': value.trafficProportion,
        'started': value.started,
    };
}

