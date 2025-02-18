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
import type { AppStoreVersionExperimentV2UpdateRequestDataAttributes } from './AppStoreVersionExperimentV2UpdateRequestDataAttributes';
import {
    AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSON,
    AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSONTyped,
    AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSON,
} from './AppStoreVersionExperimentV2UpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2UpdateRequestData
 */
export interface AppStoreVersionExperimentV2UpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2UpdateRequestData
     */
    type: AppStoreVersionExperimentV2UpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2UpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentV2UpdateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentV2UpdateRequestData
     */
    attributes?: AppStoreVersionExperimentV2UpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppStoreVersionExperimentV2UpdateRequestDataTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentV2UpdateRequestDataTypeEnum = typeof AppStoreVersionExperimentV2UpdateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentV2UpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentV2UpdateRequestData interface.
 */
export function instanceOfAppStoreVersionExperimentV2UpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionExperimentV2UpdateRequestDataFromJSON(json: any): AppStoreVersionExperimentV2UpdateRequestData {
    return AppStoreVersionExperimentV2UpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2UpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2UpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppStoreVersionExperimentV2UpdateRequestDataToJSON(value?: AppStoreVersionExperimentV2UpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSON(value.attributes),
    };
}

